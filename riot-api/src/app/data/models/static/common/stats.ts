
/**
 * This object contains champion stats data.
 *
 * @export
 * @class Stats
 */
export class Stats {

    public static fromJson(json) {
        let s: Stats = new Stats();
        Object.assign(s, json);
        return s;
    }

    public armor: number;

    public armorperlevel: number;

    public attackdamage: number;

    public attackdamageperlevel: number;

    public attackrange: number;

    public attackspeedoffset: number;

    public attackspeedperlevel: number;

    public crit: number;

    public critperlevel: number;

    public hp: number;

    public hpperlevel: number;

    public hpregen: number;

    public hpregenperlevel: number;

    public movespeed: number;

    public mp: number;

    public mpperlevel: number;

    public mpregen: number;

    public mpregenperlevel: number;

    public spellblock: number;

    public spellblockperlevel: number;

}