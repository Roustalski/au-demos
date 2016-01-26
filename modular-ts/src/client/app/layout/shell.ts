import {autoinject} from 'aurelia-framework';
import {RouterConfiguration, Router} from 'aurelia-router';
import * as core from 'src/client/app/core/module';
import * as utils from 'src/client/app/utils/module';
import {AppRoutes} from './module';

@autoinject
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
    //  Router Config
    // ----------------------------------------
    private _routerConfig: AppRoutes;

    public get routerConfig(): AppRoutes {
        return this._routerConfig;
    }

    public set routerConfig(v: AppRoutes) {
        this._routerConfig = v;
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
    constructor(log: utils.Log, settings: core.Settings, routerConfig: AppRoutes) {
        this.logger = log;
        this.settings = settings;
        this.routerConfig = routerConfig;
    }

    configureRouter(config: RouterConfiguration, router: Router) {
        config.title = this.settings.app.title;
    }

    activate() {
        //this._logger
    }
}
