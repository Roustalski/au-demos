import {inject} from 'aurelia-framework';
import {Log} from 'app-log';

var logger = null;

/**
 * A generic exception generator that implements the exception by using the app logger's error method.
 */
@inject(Log)
export class Exception {
    constructor(log) {
        logger = log;
    }

    catcher(message) {
        return reason => logger.error(message, reason);
    }
}