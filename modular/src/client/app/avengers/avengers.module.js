import {inject} from 'aurelia-framework';
import {Log} from 'app-log';
import {DataService} from 'app-data-service';

@inject(Log, DataService)
export class AvengersModule {
    constructor(logger, dataService) {
        this.logger = logger;
        this.dataService = dataService;

        this.avengers = [];
    }

    activate() {
        return this.getAvengers().then(() => {
            this.logger.info('Activated Avengers View');
        });
    }

    getAvengers() {
        return this.dataService.getAvengers()
            .then(avengersList => {
                this.avengers = avengersList;
                return this.avengers;
            });
    }
}