import { LevelTip } from '../common/level-tip';
import { Image } from '../common/image';
import { SpellVars } from './spell-vars';

/**
 * This object contains champion spell data.
 *
 * @export
 * @class Spell
 */
export class Spell {

    public static fromJson(json) {
        let s: Spell = new Spell();
        Object.assign(s, json);
        if (Array.isArray(json.altimages)) {
            s.altimages = json.altimages.map(iJson => Image.fromJson(iJson));
        }
        s.image = Image.fromJson(json.image);
        s.leveltip = LevelTip.fromJson(json.leveltip);
        if (Array.isArray(json.vars)) {
            s.vars = json.vars.map(sJson => SpellVars.fromJson(sJson));
        }
        return s;
    }

    public altimages: Image[];
    public cooldown: number[];
    public cooldownBurn: string;
    public cost: number[];
    public costBurn: string;
    public costType: string;
    public description: string;
    /**
     * This field is a List of List of Double.
     *
     * @type {}
     */
    public effect: number[][];
    public effectBurn: string[];
    public image: Image;
    public key: string;
    public leveltip: LevelTip;
    public maxrank: number;
    public name: string;
    /**
     * This field is either a List of Integer or the String 'self' for spells that target one's own champion.
     *
     * @type {object}
     */
    public range: number[] | string = "self";
    public rangeBurn: string;
    public resource: string;
    public sanitizedDescription: string;
    public sanitizedTooltip: string;
    public tooltip: string;
    public vars: SpellVars[];
}