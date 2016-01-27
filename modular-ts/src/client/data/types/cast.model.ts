import {BaseModel} from './base.model';

export class CastModel extends BaseModel {

    // ----------------------------------------
    //
    //  Public Properties
    //
    // ----------------------------------------
    // ----------------------------------------
    //  Character
    // ----------------------------------------
    /**
     * The name of the character played by the this cast member.
     */
    public character: string;

    // ----------------------------------------
    //  Name
    // ----------------------------------------
    /**
     * The name of the actor that portrays the character.
     */
    public name : string;


    // ----------------------------------------
    //
    //  Constructor
    //
    // ----------------------------------------
    constructor(name: string, character: string) {
        super();
        this.name = name;
        this.character = character;
    }
}