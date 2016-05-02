import { autoinject } from 'aurelia-framework';
import { Router } from 'aurelia-router';

@autoinject
export class SearchModule {
    public searchText: string;

    constructor(private _router: Router) {}

    searchForSummoners() {
        this._router.navigateToRoute('summoner-champions', { summonerName: this.searchText }, { trigger: true });
    }
}