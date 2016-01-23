import {inject} from 'aurelia-framework';
import {EventAggregator} from 'aurelia-event-aggregator';
import {Log} from 'app-log';
import {Settings} from 'app-settings';

var _log, _settings;

@inject(EventAggregator, Log, Settings)
export class UnhandledExceptionHandler {

    constructor(ea, log, settings) {
        _log = log;
        _settings = settings;
        ea.subscribe(settings.app.unhandledExceptionEvent, error => {
            this.errorHandler(error);
        });
    }

    errorHandler(error) {
        //let msg = `${errorEvent.error.message} \r ${errorEvent.error.stack}`;
        _log.error(_settings.app.unhandledExceptionPrefix, error);
    }
}