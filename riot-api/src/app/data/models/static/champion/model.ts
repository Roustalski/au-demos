import { Image } from '../common/image';
import { Info } from '../common/info';
import { Passive } from '../common/passive';
import { Recommended } from '../common/recommended';
import { Skin } from './skin';
import { Spell } from './spell';
import { Stats } from '../common/stats';

export class Champion {

    public static fromJson(json) {
        let c: Champion = new Champion();
        Object.assign(c, json);
        c.image = Image.fromJson(json.image);
        c.info = Info.fromJson(json.info);
        c.passive = Passive.fromJson(json.passive);
        if (Array.isArray(json.recommended)) {
            c.recommended = json.recommended.map(rJson => Recommended.fromJson(rJson));
        }
        if (Array.isArray(json.skins)) {
            c.skins = json.skins.map(sJson => Skin.fromJson(sJson));
        }
        if (Array.isArray(json.spells)) {
            c.spells = json.spells.map(sJson => Spell.fromJson(sJson));
        }
        c.stats = Stats.fromJson(json.stats);
        return c;
    }

    public allytips: string[];

    public blurb: string;

    public enemytips: string[];

    public id: number;

    public image: Image;

    public info: Info;

    public key: string;

    public lore: string;

    public name: string;

    public partype: string;

    public passive: Passive;

    public recommended: Recommended[];

    public skins: Skin[];

    public spells: Spell[];

    public stats: Stats;

    public tags: string[];

    public title: string;

}