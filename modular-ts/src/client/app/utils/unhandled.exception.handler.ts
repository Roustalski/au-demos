import {autoinject} from 'aurelia-framework';
import {EventAggregator} from 'aurelia-event-aggregator';
import {Log} from './log.module';
import {Settings} from '../core/module';

var _log: Log, _settings: Settings;

@autoinject
export class UnhandledExceptionHandler {

    constructor(ea: EventAggregator, log: Log, settings: Settings) {
        _log = log;
        _settings = settings;
        ea.subscribe(settings.app.unhandledExceptionEvent, error => {
            this.errorHandler(error);
        });
    }

    errorHandler(error): void {
        //let msg = `${errorEvent.error.message} \r ${errorEvent.error.stack}`;
        _log.error('This is embarassing. An error has occurred and has been logged.', error);
    }
}