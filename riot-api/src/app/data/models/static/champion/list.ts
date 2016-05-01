import { Champion } from './model';

/**
 * This object contains champion list data.
 *
 * @see https://developer.riotgames.com/api/methods#!/1055/3633
 * @export
 * @class ChampionList
 */
export class ChampionList {

    // ----------------------------------------
    //
    //  Static Members
    //
    // ----------------------------------------
    public static fromJson(json) {
        let cl: ChampionList = new ChampionList();
        //Cool, but need to use static from on champion for conversion
        //TODO: Use reflection for generic parser. This is tedious...
        //cl.data = new Map<string, Champion>(JSON.parse(JSON.stringify([...json.data])));
        cl.data = new Map<string, Champion>();
        cl.championsById = new Map<number, Champion>();
        Object.keys(json.data).forEach(key => {
            let champion: Champion = Champion.fromJson(json.data[key]);
            cl.data.set(key, champion);
            cl.championsById.set(champion.id, champion);
        });
        cl.format = json.format;
        cl.type = json.type;
        cl.version = json.version;
        return cl;
    }

    // ----------------------------------------
    //
    //  Public Properties
    //
    // ----------------------------------------
    public data: Map<string, Champion>;

    public championsById: Map<number, Champion>;

    public format: string;

    public keys: Map<string, string>;

    public type: string;

    public version: string;

    // ----------------------------------------
    //
    //  Public Methods
    //
    // ----------------------------------------
    getChamionBy(id: number): Champion {
        return this.championsById.get(id);
    }
}