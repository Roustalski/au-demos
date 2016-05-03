import {Router, RouterConfiguration} from 'aurelia-router'
import { HttpClient } from 'aurelia-fetch-client';
import { autoinject } from 'aurelia-framework';

@autoinject
export class App {
  router: Router;

  constructor(public http: HttpClient) {}

  configureRouter(config: RouterConfiguration, router: Router) {
    config.title = 'League Pro Builds';
    config.map([
      { route: ['', 'why-pro-builds'], name: 'why', moduleId: 'app/why/why-module', title: 'Powerful build mimicker to up your game.' },
      { route: ['search'], name: 'search', moduleId: 'app/search/search-module', nav: true, title: 'Name your pro.' },
      { route: ['search/:summonerName/champions'], name: 'summoner-champions', moduleId: 'app/search/champ-results', title: 'TODO: Dynamic title' },
      { route: ['search/:summonerName/champion/:championName'], name: 'summoner-matches-by-champ', moduleId: 'app/search/match-results', title: 'TODO: Dynamic title' }
    ]);

    this.router = router;
  }
}
