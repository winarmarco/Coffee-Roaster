const mongoose = require("mongoose");

const couponSchema = mongoose.Schema({
    couponCode : {
        type : String,
        required : true,
    },
    minSpend : {
        type : Number,
    },
    maxDiscount : {
        type : Number,
    },
    discountRate : {
        type : Number,
    },
    maxUsage : {
        type : Number,
        default : 1,
    },
    users : [
        {
            user : {
                type : mongoose.Schema.Types.ObjectId,
                ref : "User",
            },
            counter : {
                type : Number,
                defauult : 1,
            }
            
        }
    ],
})

const Coupon = mongoose.model("Coupon", couponSchema);

module.exports = Coupon;