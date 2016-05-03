import { autoinject } from 'aurelia-framework';
import { EventAggregator } from 'aurelia-event-aggregator';
import { Router, RouteConfig } from 'aurelia-router';
import { RiotApi } from '../api';
import { MatchApi } from '../match-api';
import { MatchReference } from '../data/models/match/match-reference';
import { Champion } from './data/models/static/champion/model';
import { ChampionResults } from './champ-results';

@autoinject
export class MatchResults extends ChampionResults {

    // ----------------------------------------
    //
    //  Public Properties
    //
    // ----------------------------------------
    public championName: string;

    public matches: MatchReference[];

    // ----------------------------------------
    //
    //  Constructor
    //
    // ----------------------------------------
    constructor(api: RiotApi, router: Router, ea: EventAggregator, private _matchApi: MatchApi) {
        super(api, router, ea);
    }

    // ----------------------------------------
    //
    //  Aurelia Lifecycle Functions
    //
    // ----------------------------------------
    activate(routeParams: any, routeConfig: RouteConfig) {
        return this._api.getSummoners([routeParams.summonerName]).then(summonerList => {
            this.summonerName = summonerList[0].name;
            this.championName = routeParams.championName;
            routeConfig.navModel.setTitle(`${this.summonerName} - ${this.championName}`);
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
    onMatchesByChampion(matchesByChampion: Map<Champion, MatchReference[]>) {
        super.onMatchesByChampion(matchesByChampion);
        let champion: Champion = this._matchApi.championList.getChampionBy(this.championName);
        this.matches = matchesByChampion.get(champion);
    }
}