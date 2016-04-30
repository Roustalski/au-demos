import {autoinject} from 'aurelia-framework';
import {HttpClient} from 'aurelia-fetch-client';
import 'fetch';

const API_KEY = "[TODO: Your key here.]";
const BASE_URL = "https://na.api.pvp.net/api/lol/na/v1.4/";

@autoinject
export class RiotApi {


    constructor(private http: HttpClient) {
        http.configure(config => {
            config.useStandardConfiguration()
            .withBaseUrl('');
        });
    }
}