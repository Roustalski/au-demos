import {LogManager, inject, noView} from 'aurelia-framework';
import {Settings} from 'app-settings';
import 'toastr';

var logger = null;

/**
 * A generic logging service that will log out to the browser's console, but also provide a toast to the user.
 */
@inject(Settings)
@noView
export class Log {

    constructor(settings) {
        logger = LogManager.getLogger(settings.app.prefix);
    }

    /**
     * Invoke the Aurelia logger and toastr error methods with the provided message, data object, and title
     */
    error(message, data, title, toastUser = true) {
        if ( toastUser ) {
            toastr.error(message, title);
        }
        logger.error(`Error: ${message};`, data);
    }

    /**
     * Invoke the Aurelia logger and toastr error methods with the provided message, data object, and title
     */
    info(message, data, title) {
        toastr.info(message, title);
        logger.info(`Info: ${message};`, data);
    }

    /**
     * Invoke the Aurelia logger info method and toastr succes method with the provided message, data object, and title
     */
    success(message, data, title) {
        toastr.success(message, title);
        logger.info(`Success: ${message};`, data);
    }

    /**
     * Invoke the Aurelia logger and toastr error methods with the provided message, data object, and title
     */
    warning(message, data, title) {
        toastr.warning(message, title);
        logger.warn(`Warning: ${message};`, data);
    }
}