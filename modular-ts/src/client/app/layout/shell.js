import {autoinject, Router} from 'aurelia-framework';
import {Settings} from '../core/settings';
import {RouterConfig} from './router.config';
import {Log} from '../blocks/log/log.module';

@autoinject
export class Shell {
    private _logger: Log;

    constructor(log: Log, settings: Settings, routerConfig: RouterConfig) {
        this.logger = log;
        this.settings = settings;
        this.routerConfig = routerConfig;
    }

    configureRouter(config: RouterConfig, router: Router) {
        config.title = this.settings.app.title;
    }

    activate() {
        //this.logger
    }
}