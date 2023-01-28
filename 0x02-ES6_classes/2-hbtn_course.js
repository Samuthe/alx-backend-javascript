export default class HolbertonCourse{
    constructor(name, length, students){
        this.name = name
        this.length = length
        this.students = students
    }

    get name(){
        return this._name
    }
    set name(value){
        if(typeof(value !== 'string')){
        throw new typeError('Name must be a string');
    }
        return this._name = value
}

    get length(){
        return this.length
    }
    set length(value){
        if(typeof(value !== 'number')){
            throw new typeError('Length must be a number')
        }
        return this._length = value

    }

    get students(){
        return this._students
    }
    set students(value){
        if(!(value instanceof Array)){
        throw new typeError('Students must be an array of strings')
        }
        if(!value.every((student) => typeof(student) === 'string')){
            throw new typeError('Students must be an array of strings')

        }
        return this.students
    }
        
}
