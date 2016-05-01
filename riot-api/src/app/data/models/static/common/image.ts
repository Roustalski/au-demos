
/**
 * This object contains image data.
 *
 * @see https://developer.riotgames.com/api/methods#!/1055
 * @export
 * @class Image
 */
export class Image {

    public static fromJson(json) {
        let i: Image = new Image();
        Object.assign(i, json);
        return i;
    }

    public full: string;

    public group: string;

    public h: number;

    public sprite: string;

    public w: number;

    public x: number;

    public y: number;

}