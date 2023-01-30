/**
 * import class Building
 */

import Building from "./5-building";
/**
 * create a new class that extends from Building
 */
export default class SkyHighBuilding extends Building{
    constructor(sqft, floors){
        //sqft inherits from super class
        super(sqft)
        this.floors = floors
    }

    /**
     * create get and set methods of attributes
     */

    get floors(){
        return this._floors
    }
    set floors(value){
        if(typeof(floors) !== 'number'){
            return this._floors
        }
        return this._floors = value
    }
    /**
     * 
     * @returns override evacuation method
     */
    evacuationWarningMessage(){
        return `Evacuate slowly the ${this.floors} floors`
    }
}