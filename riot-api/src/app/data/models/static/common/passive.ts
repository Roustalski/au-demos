import { Image } from './image';

/**
 * This object contains champion passive data.
 *
 * @export
 * @class Passive
 */
export class Passive {

    public static fromJson(json) {
        let p: Passive = new Passive();
        Object.assign(p, json);
        if (json !== undefined) {
            p.image = Image.fromJson(json.image);
        }
        return p;
    }

    public description: string;

    public image: Image;

    public name: string;

    public sanitizedDescription: string;

}