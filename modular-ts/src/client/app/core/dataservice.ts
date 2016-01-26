import {autoinject} from 'aurelia-framework';
import {HttpClient} from 'aurelia-fetch-client';
import {CastModel} from '../../data/types/cast.model';

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
    // getAvengers():Promise<[]> {
    //     return this.http.fetch('api/maa/')
    //         .then(response => response.json())
    //         .then(json => C);
    // }
}