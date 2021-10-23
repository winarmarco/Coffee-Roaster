const mongoose = require("mongoose");

const orderSchema = mongoose.Schema({
    product : {
        type : mongoose.Schema.Types.ObjectId,
        red : "Product",
    },
    quantity : {
        type : Number,
        required : true,
    }
})

const orderSchema = mongoose.Schema({
    dateOrdered : {
        type : Date,
        default: Date.now(),
    },
    dateCompleted : {
        type : Date,
    },
    completed : {
        type : Boolean,
        default : 0,
    },
    author : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "User"
    },
    orders : [
        orderSchema,
    ],
    total : {
        type : Number,
        default : 0,
    }
})

const Order = mongoose.Model("Order", orderSchema);

module.exports = Order;