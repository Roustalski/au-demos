import { autoinject } from 'aurelia-framework';
import { Router } from 'aurelia-router';
import { RiotApi } from '../api';
import { Summoner } from '../data/models/summoner';
import { MatchList } from '../data/models/match/match-list';
import { MatchReference } from '../data/models/match/match-reference';
import { ChampionList } from './data/models/static/champion/list';
import { Champion } from './data/models/static/champion/model';

@autoinject
export class ChampionResults {
    summonerName: string;

    public matchesByChampion: Map<Champion, MatchReference[]>;

    constructor(private _api: RiotApi, private _router: Router) { }

    activate(routeParams: any) {
        return this._api.getChampionList().then(championList => championList).then(championList => {
            this._api.getSummoners([routeParams.summonerName]).then(summonerList => {
                this.summonerName = summonerList[0].name;

                this._api.getMatchList(summonerList[0].id).then(value => {
                    this.matchesByChampion = new Map<Champion, MatchReference[]>();
                    value.matches.forEach(value => {
                        let champion: Champion = championList.getChamionBy(value.champion);
                        let matchReferenceList: MatchReference[] = this.matchesByChampion.get(champion);
                        if (matchReferenceList === undefined) {
                            matchReferenceList = [];
                            this.matchesByChampion.set(champion, matchReferenceList);
                        }
                        matchReferenceList.push(value);
                    });
                });
            }).catch(err => {
                this._router.navigateToRoute('search');
            });
        });
    }

    getChampionSquareImage(champion: Champion): string {
        return this._api.getChampionImageSquare(champion.image)
    }
}
