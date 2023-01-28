class HolbertonCourse{
    constructor(name, length, students){
        this._name = name
        this._length = length
        this._students = students
    }
}

const student1 = new HolbertonCourse('fullstack', 1, ['Samue', 'Marvin'])
console.log(student1.name);
