import {inject} from 'aurelia-framework';
import {Log} from 'app-log';
import {DataService} from 'app-data-service';

@inject(Log, DataService)
export class DashboardModule {

    constructor(logger, dataService) {
        this.logger = logger;
        this.dataService = dataService;

        this.news = {
            title: 'Marvel Avengers',
            description: 'Marvel Avengers 2 is now in production!'
        };
        this.avengersCount = 0;
        this.avengers = [];
        this.title = 'Avengers Movie Cast';
    }

    activate() {
        return Promise.all([this.getAvengersCount(), this.getAvengersCast()])
            .then(() => {
                this.logger.info("Activated Dashboard View");
            });
    }

    getAvengersCount() {
        return this.dataService.getAvengersCount()
            .then(count => {
                this.avengersCount = count;
                return count;
            });
    }

    getAvengersCast() {
        return this.dataService.getAvengersCast()
            .then(avengers => {
                this.avengers = avengers;
                return avengers;
            })
    }
}