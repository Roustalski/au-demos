
/**
 * This object contains champion skin data.
 *
 * @export
 * @class Skin
 */
export class Skin {

    public static fromJson(json) {
        let s: Skin = new Skin();
        Object.assign(s, json);
        return s;
    }

    public id: number;

    public name: string;

    public num: number;

}