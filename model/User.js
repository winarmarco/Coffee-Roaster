const mongoose = require("mongoose");

const addressSchema = mongoose.Schema({
    country : {
        type : String,
        required : true,
    },
    province : {
        type : String,
        required : true,
    },
    town : {
        type : String,
        required : true,
    },
    postCode : {
        type : Number,
        required : true,
    },
    address : {
        type : String,
        required : true,
    }
})

const userSchema = mongoose.Schema({
    firstName : {
        type : String,
        required : true,
    },
    lastName : {
        type : String,
        required : true,
    },
    billingAddress : addressSchema,
    phoneNumber : {
        type : String,
        required : true,
    },
    emailAddress : {
        type : String,
        required : true,
    },
    orderHistory : [
        {
            type : mongoose.Schema.Types.ObjectId,
            ref : "Order",
        }
    ]
})

const User = mongoose.Model("User", userSchema);

module.exports = User;