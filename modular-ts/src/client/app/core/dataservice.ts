import {autoinject} from 'aurelia-framework';
import {HttpClient} from 'aurelia-fetch-client';
import {CastModel} from '../../data/types';

@autoinject
export class DataService {

    // ----------------------------------------
    //
    //  Properties
    //
    // ----------------------------------------
    // ----------------------------------------
    //  Http Client
    // ----------------------------------------
    private _http : HttpClient;

    public get http() : HttpClient {
        return this._http;
    }

    public set http(v : HttpClient) {
        this._http = v;
    }

    // ----------------------------------------
    //
    //  Constructor
    //
    // ----------------------------------------
    constructor(http: HttpClient) {
        this.http = http;
        //this.getAvengers();//.then(data => data.)
    }

    // ----------------------------------------
    //
    //  Public Methods
    //
    // ----------------------------------------
    // ----------------------------------------
    //  Get Avengers
    // ----------------------------------------
    getAvengers():Promise<CastModel[]> {
        return this.http.fetch('api/maa/')
            .then(response => response.json())
            .then((json: Object[]) => {
                return json.map(cast => CastModel.from(cast))
            });
    }

    // ----------------------------------------
    //  Get Avengers Cast
    // ----------------------------------------
    getAvengersCast():Promise<CastModel[]> {
        return new Promise(resolve => {
            resolve([
                //Lazy man's way of copying the non-TS code over.
                CastModel.from(JSON.stringify({ name: 'Robert Downey Jr.', character: 'Tony Stark / Iron Man' })),
                CastModel.from(JSON.stringify({ name: 'Chris Hemsworth', character: 'Thor' })),
                CastModel.from(JSON.stringify({ name: 'Chris Evans', character: 'Steve Rogers / Captain America' })),
                CastModel.from(JSON.stringify({ name: 'Mark Ruffalo', character: 'Bruce Banner / The Hulk' })),
                CastModel.from(JSON.stringify({ name: 'Scarlett Johansson', character: 'Natasha Romanoff / Black Widow' })),
                CastModel.from(JSON.stringify({ name: 'Jeremy Renner', character: 'Clint Barton / Hawkeye' })),
                CastModel.from(JSON.stringify({ name: 'Gwyneth Paltrow', character: 'Pepper Potts' })),
                CastModel.from(JSON.stringify({ name: 'Samuel L. Jackson', character: 'Nick Fury' })),
                CastModel.from(JSON.stringify({ name: 'Paul Bettany', character: 'Jarvis' })),
                CastModel.from(JSON.stringify({ name: 'Tom Hiddleston', character: 'Loki' })),
                CastModel.from(JSON.stringify({ name: 'Clark Gregg', character: 'Agent Phil Coulson' })
            ]);
        });
    }
}