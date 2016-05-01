/**
 * This object contains summoner information.
 *
 * The response object contains the summoner objects mapped by the standardized summoner name, which is the summoner name in all lower case and with spaces removed. Use this version of the name when checking if the returned object contains the data for a given summoner. This API will also accept * * standardized summoner names as valid parameters, although they are not required.
 *
 * @see https://developer.riotgames.com/api/methods#!/1079/3722
 * @export
 * @class Summoner
 */
export class Summoner {

    // ----------------------------------------
    //
    //  Static Members
    //
    // ----------------------------------------
    public static fromService(json: Object): Summoner {
        let summoner: Summoner = new Summoner();
        Object.assign(summoner, json);
        return summoner;
    }

    // ----------------------------------------
    //
    //  Public Properties
    //
    // ----------------------------------------
    // ----------------------------------------
    //  ID
    // ----------------------------------------
    /**
     * Summoner ID.
     *
     * @type {string}
     */
    public id: string;

    // ----------------------------------------
    //  Name
    // ----------------------------------------
    /**
     * Summoner name.
     *
     * @type {string}
     */
    public name: string;

    // ----------------------------------------
    //  Profile Icon Id
    // ----------------------------------------
    /**
     * ID of the summoner icon associated with the summoner.
     *
     * @type {number}
     */
    public profileIconId: number;

    // ----------------------------------------
    //  Revision Date
    // ----------------------------------------
    /**
     * Date summoner was last modified specified as epoch milliseconds.
     * The following events will update this timestamp: profile icon change,
     * playing the tutorial or advanced tutorial, finishing a game, summoner name change.
     *
     * @type {number}
     */
    public revisionDate: number;

    // ----------------------------------------
    //  Summoner Level
    // ----------------------------------------
    /**
     * Summoner level associated with the summoner.
     *
     * @type {number}
     */
    public summonerLevel: number;
}