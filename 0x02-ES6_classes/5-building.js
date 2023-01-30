/**
 * Implementing an abstruct class
 */

export default class Building{
    constructor(sqft){
        if(this.constructor !== Building){
            if(typeof this.evacuationWarningMessage !== 'function'){
                throw new TypeError('Class extending Building must override evacuationWarningMessage')
            }
        }
        this.sqft = sqft
    }
    /**
     * 
     * implement get and set methods
     */

    get() {
        return this.sqft
    }
    set(sqft){
        if(typeof sqft !== 'number'){
            throw new TypeError('Must be a number');
        }
        return this._sqft
    }
}
