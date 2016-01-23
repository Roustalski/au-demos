import {inject} from 'aurelia-framework'
import {Log} from 'app-log';
import {Settings} from 'app-settings';
import {RouterConfig} from './router.config';

@inject(Log, Settings, RouterConfig)
export class Shell {

    constructor(log, settings, routerConfig) {
        this.log = log;
        this.settings = settings;
        this.routerConfig = routerConfig;
    }

    configureRouter(config, router) {
        config.title = this.settings.app.title;
        config.map(this.routerConfig.routes);
        this.router = router;
    }

    activate() {
        this.log.success(`${this.settings.app.title} loaded!`);
    }
}