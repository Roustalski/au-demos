export enum LANES {MID, MIDDLE, TOP, JUNGLE, BOT, BOTTOM};
export enum QUEUE {TEAM_BUILDER_DRAFT_RANKED_5X5, RANKED_SOLO_5X5, RANKED_TEAM_3X3, RANKED_TEAM_5X5};
export enum ROLE {DUO, NONE, SOLO, DUO_CARRY, DUO_SUPPORT};
export enum SEASON {PRESEASON3, SEASON3, PRESEASON2014, SEASON2014, PRESEASON2015, SEASON2015, PRESEASON2016, SEASON2016};

/**
 * This object contains match reference information
 *
 * @see https://developer.riotgames.com/api/methods#!/1069/3683
 * @export
 * @class MatchReference
 */
export class MatchReference {

    // ----------------------------------------
    //
    //  Static Members
    //
    // ----------------------------------------
    public static fromJson(json): MatchReference
    {
        let matchReference: MatchReference = new MatchReference();
        Object.assign(matchReference, json);
        return matchReference;
    }

    // ----------------------------------------
    //
    //  public Properties
    //
    // ----------------------------------------
    // ----------------------------------------
    //  Champion
    // ----------------------------------------
    public champion: number;

    // ----------------------------------------
    //  Lane
    // ----------------------------------------
    /**
     * One of the LANES enum values.
     *
     * @type {string}
     */
    public lane: string;

    // ----------------------------------------
    //  Match ID
    // ----------------------------------------
    public matchId: number;

    // ----------------------------------------
    //  Platform ID
    // ----------------------------------------
    public platformId: number;

    // ----------------------------------------
    //  Queue
    // ----------------------------------------
    /**
     * One of the QUEUE enum values.
     *
     * @type {string}
     */
    public queue: string;

    // ----------------------------------------
    //  Region
    // ----------------------------------------
    public region: string;

    // ----------------------------------------
    //  Role
    // ----------------------------------------
    /**
     * One of the ROLE enum values.
     *
     * @type {string}
     */
    public role: string;

    // ----------------------------------------
    //  Season
    // ----------------------------------------
    /**
     * One of the SEASON enum values.
     *
     * @type {string}
     */
    public season: string;

    // ----------------------------------------
    //  Timestamp
    // ----------------------------------------
    public timestamp: number;
}