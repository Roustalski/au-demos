import {autoinject} from 'aurelia-framework';
import {Log} from '../utils/module';
import {DataService} from '../core/module';
import {CharacterModel} from '../../data/types';

@autoinject
export class AvengersModule {
    public logger: Log;
    public dataService: DataService;
    public avengers: Array<CharacterModel>;
    public filterStr: string;
    public title: string;

    constructor(logger: Log, dataService: DataService) {
        this.logger = logger;
        this.dataService = dataService;

        this.avengers = [];
        this.filterStr = '';
    }

    activate(params, routeConfig) {
        this.title = routeConfig.title;
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