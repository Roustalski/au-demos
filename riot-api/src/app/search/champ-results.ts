import { autoinject } from 'aurelia-framework';
import { EventAggregator } from 'aurelia-event-aggregator';
import { Router, RouteConfig } from 'aurelia-router';
import { RiotApi } from '../api';
import { MatchApiEvents } from '../match-api';
import { MatchReference } from '../data/models/match/match-reference';
import { Champion } from './data/models/static/champion/model';

@autoinject
export class ChampionResults {

    // ----------------------------------------
    //
    //  Public Properties
    //
    // ----------------------------------------
    public summonerName: string;

    public matchesByChampion: Map<Champion, MatchReference[]>;

    // ----------------------------------------
    //
    //  Internal Properties
    //
    // ----------------------------------------

    // ----------------------------------------
    //
    //  Constructor
    //
    // ----------------------------------------
    constructor(protected _api: RiotApi, protected _router: Router, protected _ea: EventAggregator) {
        _ea.subscribe(MatchApiEvents.MATCHES_BY_CHAMPION_CALCULATED, (matchesByChampion) => this.onMatchesByChampion(matchesByChampion));
    }

    // ----------------------------------------
    //
    //  Aurelia Lifecycle Functions
    //
    // ----------------------------------------
    activate(routeParams: any, routeConfig: RouteConfig) {
        return this._api.getSummoners([routeParams.summonerName]).then(summonerList => {
            this.summonerName = summonerList[0].name;
            routeConfig.navModel.setTitle(this.summonerName);
            this._api.getMatchList(summonerList[0].id);
        }).catch(err => {
            this._router.navigateToRoute('search');
        });
    }

    // ----------------------------------------
    //
    //  Public Methods
    //
    // ----------------------------------------
    showChampionMatches(champion: Champion) {
        this._router.navigateToRoute("summoner-matches-by-champ", { summonerName: this.summonerName, championName: champion.name }, { trigger: true });
    }

    getChampionSquareImage(champion: Champion): string {
        return this._api.getChampionImageSquare(champion.image)
    }

    // ----------------------------------------
    //
    //  Internal Methods
    //
    // ----------------------------------------
    protected onMatchesByChampion(matchesByChampion: Map<Champion, MatchReference[]>) {
        this.matchesByChampion = matchesByChampion;
    }
}
