import {autoinject} from 'aurelia-framework';
import {EventAggregator} from 'aurelia-event-aggregator';
import AjaxInterceptor from 'slorber/ajax-interceptor';
import {Settings} from '../core/module';

/**
 * Aurelia does not currently have a global exception handling with providers like the Angular Modular demo.
 * Solution provided by sylvain-hamel
 * @see https://github.com/aurelia/framework/issues/174
 */
@autoinject
export class UnhandledExceptionProvider {
    public eventAggregator;
    public settings;

    constructor(eventAggregator: EventAggregator, settings: Settings) {
        this.eventAggregator = eventAggregator;
        this.settings = settings;

        window.addEventListener('error', (errorEvent: ErrorEvent) => {
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

    // ----------------------------------------
    //
    //  Public Methods
    //
    // ----------------------------------------
    // ----------------------------------------
    //  Error
    // ----------------------------------------
    /**
     * Error method accepts a string message, or an error object, intended to be an error off of an ErrorEvent.
     */
    error(message: string): void;
    error(error: any): void;
    error(message: any): void {
        this.eventAggregator.publish(this.settings.app.unhandledExceptionEvent, message);
    }
}