const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    productTitle: {
        type: String,
        required: true,
    },
    productPrice: {
        type: Number,
        required: true,
    },
    productImageLink: {
        type: String,
        required: true,
    },
    productDiscription: {
        type: String,
    },

});

const productModel = mongoose.model("productDetails", productSchema);
module.exports = productModel;