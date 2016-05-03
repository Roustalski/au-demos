import 'bootstrap';
import {Aurelia} from 'aurelia-framework';
import { MatchApi } from './app/match-api';

export function configure(aurelia: Aurelia) {
  aurelia.use
    .standardConfiguration()
    .developmentLogging();

  aurelia.use.plugin('aurelia-animator-css');

  aurelia.container.registerSingleton(MatchApi);
  aurelia.container.get(MatchApi);

  aurelia.start().then(() => aurelia.setRoot("app/module"));
}
