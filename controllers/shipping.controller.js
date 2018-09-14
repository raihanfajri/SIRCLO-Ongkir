var Shipping = require('../models/shipping.model');
var shipping = new Shipping;

class ShippingController{
    constructor(){}

    renderIndexView(res){
        var provider = shipping.getProvider();
        res.render('index',{title: 'Shipping', provider: provider});
    }

    calculateTotalPrice(req,res){
        let weight = req.params.weight;
        let provider = req.params.provider;
        var total = shipping.calculateTotal(weight, provider);
        res.status(200).json({data:total});
    }
}

module.exports = ShippingController;