
/**
 * A base model type that provides serialization and deserialization to and from JSON and the sub-class.
 */
export class BaseModel {

    // ----------------------------------------
    //
    //  Static Members
    //
    // ----------------------------------------
    // ----------------------------------------
    //  from
    // ----------------------------------------
    /**
     * A static method that can be invoked on any subclass to return an instance of the subclass
     * constructed with the values of the provided JSON object.
     */
    static from(json): BaseModel {
        let parsed = JSON.parse(json);
        //Untype the generation so that we can use the ES6 spread operator without compile errors
        let untyped: any = <any>this;
        let dynamic = new untyped(...Object.keys(parsed).map(key => {return parsed[key]; }));
        return dynamic;
    }
}