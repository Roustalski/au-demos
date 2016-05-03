import { autoinject } from 'aurelia-framework';
import { EventAggregator } from 'aurelia-event-aggregator';
import { HttpClient } from 'aurelia-fetch-client';
import { Summoner } from './data/models/summoner';
import { MatchList } from './data/models/match/match-list';
import { ChampionList } from './data/models/static/champion/list';
import { Image } from './data/models/static/common/image';
import 'fetch';

const API_KEY = "";
const BASE_URL = "https://na.api.pvp.net/api/lol/na/";
const STATIC_BASE_URL = "https://global.api.pvp.net/api/lol/static-data/na/"
const IMAGE_BASE_URL = "http://ddragon.leagueoflegends.com/cdn/6.9.1/img/champion/";

export class RiotApiEvents {
    static RECEIVED_CHAMPION_LIST: string = "api:receivedChampionList"
    static RECEIVED_MATCH_LIST: string = "api:receivedMatchList"
};

@autoinject
export class RiotApi {

    // ----------------------------------------
    //
    //  Constructor
    //
    // ----------------------------------------
    constructor(private _http: HttpClient, private _ea: EventAggregator) {
        _http.configure(config => {
            config.useStandardConfiguration();
        });
    }

    // ----------------------------------------
    //
    //  Public Methods
    //
    // ----------------------------------------
    getChampionImageSquare(image: Image): string {
        return `${IMAGE_BASE_URL}${image.full}`;
    }

    /**
     * Get's the static champion list from the Riot API.
     *
     * @emits RiotApiEvents.RECEIVED_CHAMPION_LIST
     * @returns {Promise<ChampionList>}
     */
    getChampionList(): Promise<ChampionList> {
        return this._http.fetch(this._getRequest(`${STATIC_BASE_URL}v1.2/champion?champData=image`))
            .then(response => response.json())
            .then(championListJson => {
                let championList: ChampionList = ChampionList.fromJson(championListJson);
                this._ea.publish(RiotApiEvents.RECEIVED_CHAMPION_LIST, championList);
                return championList;
            });
    }

    // ----------------------------------------
    //  Get Match List
    // ----------------------------------------
    /**
     * Get's the match list by summoner from the Riot API.
     *
     * @emits RiotApiEvents.RECEIVED_MATCH_LIST
     * @param {string} summonerId The summoner to fetch the match list for.
     * @returns {Promise<MatchList>} Returns the MatchList for the provided summonerId.
     */
    getMatchList(summonerId: string): Promise<MatchList> {
        return this._http.fetch(this._getRequest(`${BASE_URL}v2.2/matchlist/by-summoner/${summonerId}`))
            .then(response => response.json())
            .then(matchListJson => {
                let matchList: MatchList = MatchList.fromJson(matchListJson);
                this._ea.publish(RiotApiEvents.RECEIVED_MATCH_LIST, matchList);
                return matchList;
            });
    }

    // ----------------------------------------
    //  Get Summoners
    // ----------------------------------------
    /**
     * Get one or more summoner details by name from the Riot API.
     *
     * @param {string[]} nameList List of summoner names or standardized summoner names associated with summoners to retrieve. Maximum allowed at once is 40.
     * @returns {Promise<Summoner[]>} Returns a list of <code>Summoner</code> objects
     */
    getSummoners(nameList: string[]): Promise<Summoner[]> {
        return this._http.fetch(this._getRequest(`${BASE_URL}v1.4/summoner/by-name/${nameList.join(',')}`))
            .then((response: Response) => response.json())
            .then(summoners => {
                let summonerList: Summoner[] = [];
                Object.keys(summoners).forEach(key => {
                    summonerList.push(Summoner.fromService(summoners[key]));
                })
                return summonerList;
            }).catch(error => {
                //TODO: Toast user.
                console.log("No user found");
                return [];
            });
    }

    // ----------------------------------------
    //
    //  Internal Methods
    //
    // ----------------------------------------
    /**
     * An internal method to append the API key onto the end of all get requests.
     *
     * @private
     * @param {string} operation The operation string
     * @returns {string} The operation string with the api key appended.
     */
    private _getRequest(operation: string): string {
        if ( operation.indexOf('?') > -1 ) return `${operation}&api_key=${API_KEY}`;//?z=${new Date().getTime().toString()}
        return `${operation}?api_key=${API_KEY}`;
    }
}