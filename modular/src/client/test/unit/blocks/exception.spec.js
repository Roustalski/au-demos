import {UnhandledExceptionProvider} from 'app-exception-provider';
import {UnhandledExceptionHandler} from 'app-exception-handler';
import {EventAggregator} from 'aurelia-event-aggregator';
import {Settings} from 'app-settings';

// Dummy out XMLHttpRequest sends in order to test the AJAX interceptor
var httpSend = XMLHttpRequest.prototype.send;
XMLHttpRequest.prototype.send = function () { };
import AjaxInterceptor from 'slorber/ajax-interceptor';

describe('blocks.exception', () => {

    describe('provider', () => {
        let mocks, ea, s, provider;

        it('should be defined', () => {
            expect(UnhandledExceptionProvider).toBeDefined();
        });

        beforeEach(() => {
            ea = new EventAggregator();
            s = new Settings();
            provider = new UnhandledExceptionProvider(ea, s);
            mocks = {
                handler: function (error) { }
            };

            spyOn(mocks, 'handler');
            ea.subscribe(s.app.unhandledExceptionEvent, mocks.handler);
        });

        afterEach(() => {
            AjaxInterceptor.unwire();
        })

        it('should publish window errors', () => {
            // try {
            //     //window.dispatchEvent(new ErrorEvent("error", new Error("Test123")));
            //     //throw new Error("testlulz");
            // } catch (ex) {
            //     console.log(ex);
            // }
            //Directly invoke the error method on the provider in this case since we can't test
            //the uncaught error handler
            provider.error("whaaaaaat?");
            expect(mocks.handler).toHaveBeenCalled();
        });

        it('should publish XHR errors via AjaxInterceptor', () => {
            var xhr = new XMLHttpRequest();
            xhr.open("meth", "url");
            xhr.send("lulz");
            xhr.abort();
            expect(mocks.handler).toHaveBeenCalled();
        });
    })

    describe('handler', () => {
        it('should be defined', () => {
            expect(UnhandledExceptionHandler).toBeDefined();
        });
    });

});
