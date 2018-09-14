class Shipping{
    constructor(){
        this.basePrice = 9000;
        this.populateProvider();
    }

    populateProvider(){
        this.provider = {
            Reguler : {
                name : 'Reguler',
                price : this.basePrice
            },
            Express : {
                name : 'Express',
                price : this.basePrice * 2
            },
            Instant : {
                name : 'Instant',
                price : this.basePrice * 5
            }
        }
    }

    getProvider(){
        return this.provider;
    }

    calculateTotal(weight,provider){
        var total = weight * this.provider[provider].price;
        return total;
    }
}
module.exports = Shipping;