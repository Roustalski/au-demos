
/**
 * This object contains spell vars data.
 *
 * @export
 * @class SpellVars
 */
export class SpellVars {

    public static fromJson(json) {
        let sv: SpellVars = new SpellVars();
        Object.assign(sv, json);
        return sv;
    }

    public coeff: number[];

    public dyn: string;

    public key: string;

    public link: string;

    public ranksWith: string;
}