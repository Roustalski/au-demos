import {Router, RouterConfiguration} from 'aurelia-router'
import { HttpClient } from 'aurelia-fetch-client';
import { autoinject } from 'aurelia-framework';
import { RiotApi } from './api';
import { ChampionList } from './data/models/static/champion/list';

@autoinject
export class App {
  router: Router;
  championList: ChampionList;

  constructor(public http: HttpClient, api: RiotApi) {
    api.getChampionList().then(value => {
      this.championList = value
    });
  }

  configureRouter(config: RouterConfiguration, router: Router) {
    config.title = 'League Pro Builds';
    config.map([
      { route: ['', 'search'], name: 'search',      moduleId: 'app/search/search-module',      nav: true, title: 'Summoner Name Search' },
      { route: 'users',         name: 'users',        moduleId: 'users',        nav: true, title: 'Github Users' },
      { route: 'child-router',  name: 'child-router', moduleId: 'child-router', nav: true, title: 'Child Router' }
    ]);

    this.router = router;
  }
}
