const express = require("express");
const path = require("path");
const controllers = require(path.join(__dirname , "../controllers/Product"));

const router = express.Router();

const multer = require("multer");

const upload = multer({
    dest : path.join(__dirname, "../public/files"),
});

router.route("/")
    .post(controllers.uploadImage, controllers.createProduct);


module.exports = router;

