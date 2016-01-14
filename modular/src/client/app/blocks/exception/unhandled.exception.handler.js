import {inject} from 'aurelia-framework';
import {EventAggregator} from 'aurelia-event-aggregator';
import {Log} from 'app-log';
import {Settings} from 'app-settings';

@inject(EventAggregator, Log, Settings)
export class UnhandledExceptionHandler {
    constructor(ea, log, settings) {
        ea.subscribe(settings.app.unhandledExceptionEvent, (error) => {
            //let msg = `${errorEvent.error.message} \r ${errorEvent.error.stack}`;
            log.error(settings.app.unhandledExceptionPrefix, error);
        });
    }
}