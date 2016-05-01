
/**
 * This object contains champion level tip data.
 *
 * @export
 * @class LevelTip
 */
export class LevelTip {

    public static fromJson(json) {
        let lt: LevelTip = new LevelTip();
        Object.assign(lt);
        return lt;
    }

    public effect: string[];

    public label: string[];
}