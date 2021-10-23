const path = require("path");
const Coupon = require(path.join(__dirname, "../model/Coupon"));

module.exports.createCoupon = async (req,res) => {
    try {
        const newCoupon = new Coupon(req.body);

        await newCoupon.save();

        res.json({data : newCoupon, status : "success"});
    } catch (error) {
        res.json({error});
    }
}

module.exports.deleteCoupon = async (req,res) => {
    try {
        const deletedCoupon = await Coupon.findAndDelete({_id : req.body.couponId});

        res.json({data : deletedCoupon, status : "success"});
    } catch (error) {
        res.json(error);
    }
}


module.exports.applyCoupon = async (req,res) => {
    try {
        const user = req.body.user;
        const coupon = await Coupon.find({couponCode : req.body.couponCode});

        if (coupon) {
            
            const canApply = coupon.users.map((elem) => {
                if (elem.user._id === user._id) {
                    return (elem.counter < coupon.maxUsage);
                }
            })

            if (canApply) {          
                coupon.users.map((elem) => {
                    if (elem.user._id === user._id) {
                        elem.counter += 1;
                    }
                });

                console.log(coupon);
                
                await coupon.save();

                res.json({data : {}, status : "Success"});
            } else {
                res.json({data : {}, message : "Sorry "});
            }

        } else {
            res.json({message : "No coupon with that code"});
        }
        
    } catch (error) {
        res.json({error});
    }
}
