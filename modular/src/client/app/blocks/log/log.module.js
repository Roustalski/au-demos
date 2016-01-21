import {LogManager, inject} from 'aurelia-framework';
import {Settings} from 'app-settings';
import 'toastr';

var logger = null;

/**
 * A generic logging service that will log out to the browser's console, but also provide a toast to the user.
 */
@inject(Settings)
export class Log {

    constructor(settings) {
        logger = LogManager.getLogger(settings.app.prefix);
    }

    /**
     * Invoke the Aurelia logger and toastr error methods with the provided message, data object, and title
     */
    error(message, data, title, toastUser = true) {
        _toastUser('error', message, title, toastUser);
        _executeLogger('error', message, data);
    }

    /**
     * Invoke the Aurelia logger and toastr error methods with the provided message, data object, and title
     */
    info(message, data, title, toastUser = true) {
        _toastUser('info', message, title, toastUser);
        _executeLogger('info', message, data);
    }

    /**
     * Invoke the Aurelia logger info method and toastr succes method with the provided message, data object, and title
     */
    success(message, data, title, toastUser = true) {
        _toastUser('success', message, title, toastUser);
        _executeLogger('info', `Success: ${message}`, data);
    }

    /**
     * Invoke the Aurelia logger and toastr error methods with the provided message, data object, and title
     */
    warning(message, data, title, toastUser = true) {
        _toastUser('warning', message, title, toastUser);
        _executeLogger('warn', message, data);
    }
}

function _toastUser(method, message, title, shouldToastUser) {
    if (shouldToastUser) {
        toastr[method](message, title);
    }
}

function _executeLogger(method, message, data) {
    logger[method].apply(logger, [].concat(message, data ? `;${data}` : ''));
}