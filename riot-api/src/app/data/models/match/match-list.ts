import { MatchReference } from './match-reference';

export class MatchList {
    // ----------------------------------------
    //
    //  Static Members
    //
    // ----------------------------------------
    public static fromJson(json): MatchList {
        let matchList = new MatchList();
        matchList.endIndex = json.endIndex;
        matchList.matches = json.matches.map(matchReference => MatchReference.fromJson(matchReference));
        matchList.startIndex = json.startIndex;
        matchList.totalGames = json.totalGames;
        return matchList;
    }


    // ----------------------------------------
    //
    //  Public Properties
    //
    // ----------------------------------------
    public endIndex: number;

    // ----------------------------------------
    //  Match List
    // ----------------------------------------
    public matches: MatchReference[];

    // ----------------------------------------
    //  Start Index
    // ----------------------------------------
    public startIndex: number;

    // ----------------------------------------
    //  Total Games
    // ----------------------------------------
    public totalGames: number;
}