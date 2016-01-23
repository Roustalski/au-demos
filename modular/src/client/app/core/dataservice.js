import {inject} from 'aurelia-framework';
import {HttpClient} from 'aurelia-fetch-client';

@inject(HttpClient)
export class DataService {
    constructor(http) {
        this.http = http;
    }

    getAvengers() {
        return this.http.fetch('api/maa/')
            .then(response => response.json());
    }

    getAvengersCount() {
        return this.getAvengersCast()
            .then(castList => {
                return new Promise(resolve => {
                    resolve(castList.length);
                })
            });
    }

    getAvengersCast() {
        return new Promise(resolve => {
            resolve([
                { name: 'Robert Downey Jr.', character: 'Tony Stark / Iron Man' },
                { name: 'Chris Hemsworth', character: 'Thor' },
                { name: 'Chris Evans', character: 'Steve Rogers / Captain America' },
                { name: 'Mark Ruffalo', character: 'Bruce Banner / The Hulk' },
                { name: 'Scarlett Johansson', character: 'Natasha Romanoff / Black Widow' },
                { name: 'Jeremy Renner', character: 'Clint Barton / Hawkeye' },
                { name: 'Gwyneth Paltrow', character: 'Pepper Potts' },
                { name: 'Samuel L. Jackson', character: 'Nick Fury' },
                { name: 'Paul Bettany', character: 'Jarvis' },
                { name: 'Tom Hiddleston', character: 'Loki' },
                { name: 'Clark Gregg', character: 'Agent Phil Coulson' }
            ]);
        });
    }
}