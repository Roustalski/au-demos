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