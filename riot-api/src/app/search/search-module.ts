import { autoinject } from 'aurelia-framework';
import { RiotApi } from '../api';
import { Summoner } from '../data/models/summoner';
import { MatchList } from '../data/models/match/match-list';

@autoinject
export class SearchModule {
    public summonerList: Summoner[];

    public searchText: string;

    public matchList: MatchList;

    constructor(private _api: RiotApi) {}

    searchForSummoners() {
        this._api.getSummoners([this.searchText])
            .then(summonerList => {
                this.summonerList = summonerList;
                this._api.getMatchList(summonerList[0].id).then(value => this.matchList = value );
            })
    }
}