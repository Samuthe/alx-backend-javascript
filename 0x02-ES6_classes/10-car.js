export default class Car{
    constructor(brand, motor, color){
        this.brand = brand
        this.motor = motor
        this.color = color
    }
    cloneCar() {
        return new this.constructor(this._brand, this._motor, this._color);
    }
}
