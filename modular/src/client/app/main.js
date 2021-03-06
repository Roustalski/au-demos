import {UnhandledExceptionProvider} from 'app-exception-provider';
import {UnhandledExceptionHandler} from 'app-exception-handler';
import {inject} from 'aurelia-framework';
import {HttpClient} from 'aurelia-fetch-client';
import 'fetch';
import 'toastr';
import 'bootstrap';
import "velocity/velocity.ui";

export function configure(aurelia) {

    aurelia.use
        .standardConfiguration()
        .developmentLogging()
        .plugin('aurelia/animator-velocity', instance => {
            instance.options.duration = 300;
            instance.options.easing = "linear";

            instance.enterAnimation = { properties: "fadeIn", options: { easing: "easeIn", duration: 400 } };
            instance.leaveAnimation = { properties: "fadeOut", options: { easing: "easeIn", duration: 400 } };
        });

    aurelia.start().then(() => {
        //Register the unhandled exception classes so that the specified dependencies can be injected
        aurelia.container.registerSingleton(UnhandledExceptionProvider, UnhandledExceptionProvider);
        aurelia.container.registerSingleton(UnhandledExceptionHandler, UnhandledExceptionHandler);

        //Create the exception provider and handler so that they can register for uncaught errors
        aurelia.container.get(UnhandledExceptionProvider);
        aurelia.container.get(UnhandledExceptionHandler);

        aurelia.container.registerSingleton(HttpClient, HttpClient);
        configureHttpClient(aurelia.container.get(HttpClient));

        console.log("Set Root");
        aurelia.setRoot('app/layout/shell');
    })
    //For debugging on Safari - The splash screen would stay up forever and there were no details on why the start promise never resolved.
    //Tracked it down to not having the fetch polyfill
    .catch(ex => {
        console.log(ex);
    });

    toastr.options.timeOut = 4000;
    toastr.options.positionClass = 'toast-bottom-right';
};

function configureHttpClient(httpClient) {
    httpClient.configure(config => {
        config
            .withBaseUrl('http://localhost:8080/')
            .withDefaults({
                headers: {
                    'Accept': 'application/json',
                    'X-Requested-With': 'Fetch'
                }
            })
            .withInterceptor({
                request(request) {
                    console.log(`Requesting ${request.method} ${request.url}`);
                    return request; // you can return a modified Request, or you can short-circuit the request by returning a Response
                },
                response(response) {
                    console.log(`Received ${response.status} ${response.url}`);
                    return response; // you can return a modified Response
                }
            });
    });
}