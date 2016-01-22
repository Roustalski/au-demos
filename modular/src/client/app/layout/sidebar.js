import {inject} from 'aurelia-framework';
import {Log} from 'app-log';
import {RouterConfig} from './router.config'

@inject(Log, RouterConfig)
export class Sidebar {
    constructor(log, routerConfig) {
        this.log = log;
        this.routerConfig = routerConfig;
    }

    configureRouter(config, router) {
        this.log.info("Whatever man.");
        config.map(this.routerConfig.routes);
        this.router = router;
    }
}