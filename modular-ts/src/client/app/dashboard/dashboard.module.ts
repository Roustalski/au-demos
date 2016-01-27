import {autoinject} from 'aurelia-framework';
import {Log} from '../utils/module';
import {DataService} from '../core/module';
import {CastModel} from '../../data/types';

@autoinject
export class DashboardModule {
    public logger: Log;
    public dataService: DataService;
    public news: Object;
    public avengersCount: number;
    public avengers: Array<CastModel>;
    public title;

    constructor(logger: Log, dataService: DataService) {
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

    getAvengersCount(): Promise<any> {
        return this.dataService.getAvengersCount()
            .then(count => {
                this.avengersCount = count;
                return count;
            });
    }

    getAvengersCast(): Promise<CastModel[]> {
        return this.dataService.getAvengersCast()
            .then(avengers => {
                this.avengers = avengers;
                return avengers;
            })
    }
}