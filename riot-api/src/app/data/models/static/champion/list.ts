import { Champion } from './model';

/**
 * This object contains champion list data.
 *
 * @see https://developer.riotgames.com/api/methods#!/1055/3633
 * @export
 * @class ChampionList
 */
export class ChampionList {

    public static fromJson(json) {
        let cl: ChampionList = new ChampionList();
        //Cool, but need to use static from on champion for conversion
        //TODO: Use reflection for generic parser. This is tedious...
        //cl.data = new Map<string, Champion>(JSON.parse(JSON.stringify([...json.data])));
        cl.data = new Map<string, Champion>();
        Object.keys(json.data).forEach(key => {
            cl.data.set(key, Champion.fromJson(json.data[key]));
        });
        cl.format = json.format;
        cl.type = json.type;
        cl.version = json.version;
        return cl;
    }

    public data: Map<string, Champion>;

    public format: string;

    public keys: Map<string, string>;

    public type: string;

    public version: string;
}