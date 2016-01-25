import {Aurelia} from 'aurelia-framework';

export function configure(aurelia:Aurelia) {
    aurelia.use
        .standardConfiguration()
        .developmentLogging();

    aurelia.start().then(() => {
        console.log("Set root");
        aurelia.setRoot('app/layout/shell');
    });
}