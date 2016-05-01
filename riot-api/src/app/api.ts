import { autoinject } from 'aurelia-framework';
import { HttpClient } from 'aurelia-fetch-client';
import { Summoner } from './data/models/summoner';
import { MatchList } from './data/models/match/match-list';
import { ChampionList } from './data/models/static/champion/list';
import 'fetch';

const API_KEY = "";
const BASE_URL = "https://na.api.pvp.net/api/lol/na/";
const STATIC_BASE_URL = "https://global.api.pvp.net/api/lol/static-data/na/"

@autoinject
export class RiotApi {

    // ----------------------------------------
    //
    //  Constructor
    //
    // ----------------------------------------
    constructor(private _http: HttpClient) {
        _http.configure(config => {
            config.useStandardConfiguration();
        });
    }

    // ----------------------------------------
    //
    //  Public Methods
    //
    // ----------------------------------------
    getChampionList(): Promise<ChampionList> {
        return this._http.fetch(this._getRequest(`${STATIC_BASE_URL}v1.2/champion?champData=all`))
            .then(response => response.json())
            .then(championListJson => {
                return ChampionList.fromJson(championListJson);
            });
    }

    // ----------------------------------------
    //  Get Match List
    // ----------------------------------------
    getMatchList(summonerId: string): Promise<MatchList> {
        return this._http.fetch(this._getRequest(`${BASE_URL}v2.2/matchlist/by-summoner/${summonerId}`))
            .then(response => response.json())
            .then(matchListJson => {
                return MatchList.fromJson(matchListJson);
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
        if ( operation.indexOf('?') > -1 ) return `${operation}&api_key=${API_KEY}`;
        return `${operation}?api_key=${API_KEY}`;
    }
}