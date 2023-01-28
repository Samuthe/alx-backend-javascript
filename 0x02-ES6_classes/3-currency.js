export default class Currency{
    constructor(code, name){
        this.code = code
        this.name = name
    }

    get code(){
        return this._code
    }
    set code(value){
        return this._code = value
    }

    get name(){
        return this._name
    }
    set name(value){
        return this._name = value
    }

    displayFullCurrenct() {
        return `${this._code} ${this._name}`                
    }
}
