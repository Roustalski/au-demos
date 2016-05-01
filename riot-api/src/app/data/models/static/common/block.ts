import { BlockItem } from './block-item';

/**
 * This object contains champion recommended block data.
 *
 * @export
 * @class Block
 */
export class Block {

    public static fromJson(json) {
        let b: Block = new Block();
        Object.assign(b, json);
        b.items = json.items.map(bJson => BlockItem.fromJson(bJson));
        return b;
    }

    public items: BlockItem[];

    public recMath: boolean;

    public type: string;
}