const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const path = require("path");


const productRoute = require(path.join(__dirname, "./routes/Product"));

const app = express();
const port = process.env.PORT || 3000;
const databaseUrl = process.env.DATABASE_URL || "mongodb://localhost:27017/coffeeRoaster";

// Connect to Database
mongoose.connect(databaseUrl);
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error"));
db.once("open", () => {console.log("Database connected")});

app.set("view engine", "ejs");

app.use(express.static(path.join(__dirname , "./public/files")));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true}));


// Routes
app.use("/products", productRoute);


app.get("/", (req,res) => {
    res.send("hello");
});


// EDIT PRODUCTS
app.put("/products", (req,res) => {

})

// GET USER'S SHOPPING CART
app.get("/cart" , (req,res) => {

})

// POST USER'S SHOPPING CART
app.post("/cart", (req,res) => {

})

// REMOVE FROM USER'S SHOPPING CART
app.delete("/cart", (req,res) => {

})

// RENDER CHECKOUT
app.get("/payment" , (req,res) => {

})

// PAY
app.post("/payment", (req,res) => {

})

// GET COUPON LIST
app.get("/coupon", (req,res) => {

})

// ADD NEW COUPON
app.post("/coupon", (req,res) => {

})

// GET ORDER HISTORY
app.get("/orderHistory", (req,res) => {

})

// GET ORDER LIST
app.get("/order", (req,res) => {

})

app.listen(port, (req,res) => {
    console.log(`Connected to port ${port}`);
})
