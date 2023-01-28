import Currency from "./3-currency";

/**
 * Program for Currency
 */

class Pricing{
    constructor(amount, currency){
        this.amount = amount
        this.currency = currency
    }


    get amount(){
        return this.amount
    }
    set amount(value){
        if(typeof(value) !== 'number'){
            throw new TypeError("Must be a number")
        }
        return this._amount = value
    }

    get currency(){
        return this._currency
    }
    set currency(value){
        if(!value instanceof Currency){
            throw new TypeError('Value must be a Currency')
        }
        return this._currency = value;
    }

    displayFullPrice(){
        return `${this.amount} ${this.currency.code} (${this.currency.code})`
    }

    /**
     * 
     * @param {amount to convert} amount 
     * @param {*rate to convert the amount} conversionRate 
     * @returns 
     */

    static convertPrice(amount, conversionRate){
        if(typeof(amount) !== 'number'){
            throw new TypeError('amount must be a number')
        if(typeof(conversionRate) !== 'number'){
            throw new TypeError('conversionRate must be a number')
        }
        }
        return amount * conversionRate
    }
}
