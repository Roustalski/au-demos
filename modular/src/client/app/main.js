import {Log} from './blocks/log/log.module';

export function configure(aurelia) {
    aurelia.use
        .standardConfiguration()
        .developmentLogging();

    aurelia.start().then(() => aurelia.setRoot('app/blocks/log/log.module'));
}