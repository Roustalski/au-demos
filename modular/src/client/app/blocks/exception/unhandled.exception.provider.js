import {inject} from 'aurelia-framework';
import {EventAggregator} from 'aurelia-event-aggregator';
import AjaxInterceptor from 'slorber/ajax-interceptor';
import {Settings} from 'app-settings';

/**
 * Aurelia does not currently have a global exception handling with providers like the Angular Modular demo.
 * Solution provided by sylvain-hamel
 * @see https://github.com/aurelia/framework/issues/174
 */
@inject(EventAggregator, Settings)
export class UnhandledExceptionProvider {
    constructor(eventAggregator, settings) {
        this.eventAggregator = eventAggregator;
        this.settings = settings;

        window.addEventListener('error', (errorEvent) => {
            this.error(errorEvent.error);
        });

        AjaxInterceptor.addResponseCallback((xhr) => {
            if (xhr.status === 500) {
                let msg = `${xhr.statusCode} - ${xhr.statusText} \r ${xhr.responseText}`
                this.error(msg);
            }
            if (xhr.status === 0) {
                let msg = `XMLHttpRequest request cancelled by browser (status code 0). See console for details.`
                this.error(msg);
            }
        });
        AjaxInterceptor.wire();
    }

    error(message) {
        this.eventAggregator.publish(this.settings.app.unhandledExceptionEvent, message);
    }
}