import {inject} from 'aurelia-framework'
import {Log} from 'app-log';
import {Settings} from 'app-settings';

@inject(Log, Settings)
export class Shell {

    //FIXME: TODO: Locale

    constructor(log, settings) {
        this.log = log;
        this.settings = settings;
    }

    configureRouter(config, router) {
        config.title = this.settings.app.title;
        config.map([
            {
                route: ['', 'dashboard'],
                name: 'dashboard',
                moduleId: 'dashboard/dashboard.module',
                nav: true,
                title: 'Dashboard'
            },
            {
                route: ['avengers'],
                name: 'avengers',
                moduleId: 'avengers/avengers.module',
                nav: true,
                title: 'Avengers'
            }
        ]);
        this.router = router;
    }

    activate() {
        this.log.success(`${this.settings.app.title} loaded!`);
    }
}