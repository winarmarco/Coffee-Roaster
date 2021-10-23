const path = require("path");
const User = require("../model/User");
const Order = require(path.join(__dirname, "../model/Order"));

module.exports.getCompletedOrder = async (req,res) => {
    try {
        const completedOrder = await Order.find({completed : 1});

        res.json({data : completedOrder, status : "success"})
    } catch (error) {
        res.json({error});
    }
}

module.exports.getUncompletedOrder = async (req,res) => {
    try {
        const uncompletedOrder = await Order.find({completed : 0});
        
        res.json({data : uncompletedOrder, status : "success"});
    } catch (error) {
        res.json({error});
    }
}

module.exports.completeOrder = async (req,res) => {
    try {
        const order = await Order.findById(req.body.orderId);

        order.completed = 1;
        order.dateCompleted = Date.now();

        await order.save();

        res.json({data : order, status : "success"});
    } catch (error) {
        res.json({order});
    }
}

module.exports.placeOrder = async (req,res) => {
    try {
        const isGuest = (req.user == undefined);
        var user;
        
        if (isGuest) {
            const createUser = (req.body.createUser);

            if (createUser) {
                const newUser = new User(req.body);

                await newUser.save();

                user = newUser;
            }

        } else {
            user = await User.findById(req.user._id);
        }

        const cart = req.session.shoppingCart;
        var total = 0;
        cart.map((e) => {
            const product = e.populate("product");
            total += (product.price * e.quantity);
        })

        const newOrder = new Order({
            author : user,
            orders : cart,
            total : total,
        })

        req.session.shoppingCart = [];

        res.json({data : {}, status : "success", message : "Order has successfuly been placed"})
    } catch (error) {
        res.json({error});
    }
}