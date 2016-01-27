import {inject} from 'aurelia-framework';
import {RouterConfiguration, Router} from 'aurelia-router';
import * as core from '../core/module';
import * as utils from '../utils/module';
import {AppRoutes} from './module';
import {CastModel} from '../../data/types';

@inject(utils.Log, core.Settings, AppRoutes)
export class Shell {

    // ----------------------------------------
    //
    //  Properties
    //
    // ----------------------------------------
    // ----------------------------------------
    //  Logger
    // ----------------------------------------
    private _logger: utils.Log;

    public get logger(): utils.Log {
        return this._logger;
    }

    public set logger(v: utils.Log) {
        this._logger = v;
    }

    // ----------------------------------------
    //  Router
    // ----------------------------------------
    public router:Router;

    // ----------------------------------------
    //  Router Config
    // ----------------------------------------
    private _appRoutes: AppRoutes;

    public get appRoutes(): AppRoutes {
        return this._appRoutes;
    }

    public set appRoutes(v: AppRoutes) {
        this._appRoutes = v;
    }


    // ----------------------------------------
    //  Settings
    // ----------------------------------------
    private _settings: core.Settings;

    public get settings(): core.Settings {
        return this._settings;
    }

    public set settings(v: core.Settings) {
        this._settings = v;
    }

    // ----------------------------------------
    //
    //  Constructor
    //
    // ----------------------------------------
    constructor(log: utils.Log, settings: core.Settings, appRoutes: AppRoutes) {
        this.logger = log;
        this.settings = settings;
        this.appRoutes = appRoutes;

        //When debugging in chrome, this variable gets succesfully created.
        //but, the settings injection is not working via @autoinject
        let blah = new core.Settings();
    }

    configureRouter(config: RouterConfiguration, router: Router) {
        config.title = this.settings.app.title;
        config.map(this.appRoutes.routes);
        this.router = router;
    }

    activate() {
        this.logger.success(`${this.settings.app.title} loaded!`);
    }
}
