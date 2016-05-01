
/**
 * This object contains champion information.
 *
 * @see https://developer.riotgames.com/api/methods#!/1055
 * @export
 * @class Info
 */
export class Info {

    public static fromJson(json) {
        let i: Info = new Info();
        Object.assign(i, json);
        return i;
    }

    public attack: number;

    public defense: number;

    public difficulty: number;

    public magic: number;

}