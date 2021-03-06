import * as LogManager from 'aurelia-logging';
import {inject} from 'aurelia-framework';
import * as core from '../core/module';

/**
 * A generic logging service that will log out to the browser's console, but also provide a toast to the user.
 */
@inject(core.Settings)
export class Log {
    private _logger: LogManager.Logger;

    constructor(settings: core.Settings) {
        this._logger = LogManager.getLogger(settings.app.prefix);
    }

    /**
     * Invoke the Aurelia logger and toastr error methods with the provided message, data object, and title
     */
    error(message: string, data?: any, title?: string, toastUser: boolean = true) {
        _toastUser('error', message, title, toastUser);
        this._executeLogger('error', message, data);
    }

    /**
     * Invoke the Aurelia logger and toastr error methods with the provided message, data object, and title
     */
    info(message: string, data?: any, title?: string, toastUser: boolean = true) {
        _toastUser('info', message, title, toastUser);
        this._executeLogger('info', message, data);
    }

    /**
     * Invoke the Aurelia logger info method and toastr succes method with the provided message, data object, and title
     */
    success(message: string, data?: any, title?: string, toastUser: boolean = true) {
        _toastUser('success', message, title, toastUser);
        this._executeLogger('info', `Success: ${message}`, data);
    }

    /**
     * Invoke the Aurelia logger and toastr error methods with the provided message, data object, and title
     */
    warning(message: string, data?: any, title?: string, toastUser: boolean = true) {
        _toastUser('warning', message, title, toastUser);
        this._executeLogger('warn', message, data);
    }

    debug(message: string, data?: any, title?: string, toastUser: boolean = true) {
        this._logger.debug(message);
        //this._logger.debug(message, data);
    }

    _executeLogger(method: string, message: string, data: any) {
        this._logger[method].apply(this._logger, [].concat(message, data ? `; ${data}` : ''));
    }
}

function _toastUser(method: string, message: string, title: string, shouldToastUser: boolean) {
    if (shouldToastUser) {
        toastr[method](message, title);
    }
}