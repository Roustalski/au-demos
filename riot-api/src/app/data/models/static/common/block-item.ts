
/**
 * This object contains champion recommended block item data.
 *
 * @export
 * @class BlockItem
 */
export class BlockItem {

    public static fromJson(json) {
        let bi: BlockItem = new BlockItem();
        Object.assign(bi, json);
        return bi;
    }

    public count: number;

    public id: number;
}