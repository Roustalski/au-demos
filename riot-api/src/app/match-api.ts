import { autoinject } from 'aurelia-framework';
import { EventAggregator } from 'aurelia-event-aggregator';
import { RiotApi, RiotApiEvents } from './api';
import { MatchList } from './data/models/match/match-list';
import { MatchReference } from './data/models/match/match-reference';
import { ChampionList } from './data/models/static/champion/list';
import { Champion } from './data/models/static/champion/model';

export class MatchApiEvents {
    static MATCHES_BY_CHAMPION_CALCULATED: string = "match-api:matchesByChampionCalculated";
}

/**
 * In order to remove duplication of work between the summoner's champion list
 * and champion match view models and modeling the match references by champion
 * this model will work with the riot api and the event aggregator in order to
 * provide a set of subscribers the data in various formats as needed.
 *
 * @export
 * @class MatchApi
 */
@autoinject
export class MatchApi {

    // ----------------------------------------
    //
    //  Public Properties
    //
    // ----------------------------------------
    // ----------------------------------------
    //  Champion List
    // ----------------------------------------
    private _championList: ChampionList;

    public get championList(): ChampionList {
        return this._championList;
    }

    // ----------------------------------------
    //
    //  Internal Properties
    //
    // ----------------------------------------
    private _pendingMatchList: MatchList;

    // ----------------------------------------
    //
    //  Constructor
    //
    // ----------------------------------------
    constructor(private _api: RiotApi, private _ea: EventAggregator) {
        _api.getChampionList().then(value => {
            this._championList = value;
            if (this._pendingMatchList !== undefined) {
                this.calculateMatchesByChampion(this._pendingMatchList);
            }
        });

        _ea.subscribe(RiotApiEvents.RECEIVED_MATCH_LIST, (matchList) => this.calculateMatchesByChampion(matchList));
    }

    // ----------------------------------------
    //
    //  Public Methods
    //
    // ----------------------------------------
    /**
     * Creates a Map<Champion, MatchReference[]> and emits a MatchApiEvents.MATCHES_BY_CHAMPION_CALCULATED event when the work is complete.
     *
     * @param {MatchList} matchList
     */
    calculateMatchesByChampion(matchList: MatchList) {
        //Keep track of the last user search until we have the static champion list.
        if (this._championList === undefined) {
            this._pendingMatchList = matchList;
            return;
        }

        let matchesByChampion: Map<Champion, MatchReference[]> = new Map<Champion, MatchReference[]>();
        matchList.matches.forEach(value => {
            let champion: Champion = this._championList.getChampionBy(value.champion);
            let matchReferenceList: MatchReference[] = matchesByChampion.get(champion);
            if (matchReferenceList === undefined) {
                matchReferenceList = [];
                matchesByChampion.set(champion, matchReferenceList);
            }
            matchReferenceList.push(value);
        });
        this._ea.publish(MatchApiEvents.MATCHES_BY_CHAMPION_CALCULATED, matchesByChampion);

    }

}