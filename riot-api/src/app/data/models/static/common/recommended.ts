import { Block } from './block';

/**
 * This object contains champion recommended data.
 *
 * @export
 * @class Recommended
 */
export class Recommended {

    public static fromJson(json) {
        let r: Recommended = new Recommended();
        Object.assign(r, json);
        r.blocks = json.blocks.map(bJson => Block.fromJson(bJson));
        return r;
    }

    public blocks: Block[];

    public champion: string;

    public map: string;

    public mode: string;

    public priority: boolean;

    public title: string;

    public type: string;

}