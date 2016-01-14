import {UnhandledExceptionProvider} from 'app-exception-provider';
import {UnhandledExceptionHandler} from 'app-exception-handler';

export function configure(aurelia) {

    aurelia.use
        .standardConfiguration()
        .developmentLogging();

    aurelia.start().then(() => {
        //Register the unhandled exception classes so that the specified dependencies can be injected
        aurelia.container.registerSingleton(UnhandledExceptionProvider, UnhandledExceptionProvider);
        aurelia.container.registerSingleton(UnhandledExceptionHandler, UnhandledExceptionHandler);

        //Create the exception provider and handler so that they can register for uncaught errors
        aurelia.container.get(UnhandledExceptionProvider);
        aurelia.container.get(UnhandledExceptionHandler);

        //aurelia.loader.loadModule('app-log');
        //aurelia.setRoot('app/blocks/log/log.module');
    });
};