import { autoinject } from 'aurelia-framework';
import { RiotApi } from '../api';
import { Summoner } from '../data/models/summoner';
import { MatchList } from '../data/models/match/match-list';
import { MatchReference } from '../data/models/match/match-reference';
import { ChampionList } from './data/models/static/champion/list';
import { Champion } from './data/models/static/champion/model';

@autoinject
export class SearchModule {
    public summonerList: Summoner[];

    public searchText: string;

    public matchList: MatchList;

    public matchesByChampion: Map<Champion, MatchReference>;

    private _championList: ChampionList;

    constructor(private _api: RiotApi) {
        _api.getChampionList().then(value => this._championList = value);
    }

    getChampionSquareImage(champion: Champion): string {
        return this._api.getChampionImageSquare(champion.image)
    }

    searchForSummoners() {
        this._api.getSummoners([this.searchText])
            .then(summonerList => {
                this.summonerList = summonerList;
                this._api.getMatchList(summonerList[0].id).then(value => {
                    this.matchList = value;
                    this.matchesByChampion = new Map<Champion, MatchReference>();
                    this.matchList.matches.forEach(value => {
                        let champion:Champion = this._championList.getChamionBy(value.champion);
                        this.matchesByChampion.set(champion, value);
                    });
                });
            });
    }
}