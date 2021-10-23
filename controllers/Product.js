const path = require("path");
const Product = require(path.join(__dirname, "../model/Products"));
const multer = require("multer");

const multerStorage = multer.diskStorage({
    destination : (req,file,cb) => {
        cb(null, path.join(__dirname, "../public/files"))
    },
    filename : (req,file,cb) => {
        const ext = file.mimetype.split("/")[1];
        console.log(file);
        cb(null, `admin-${file.fieldname}-${Date.now()}.${ext}`)
    }
});

const upload = multer({
    storage : multerStorage
})

module.exports.uploadImage = upload.single("file");

module.exports.createProduct = async (req,res) => {
    try {

        const newProduct = new Product(req.body);

        newProduct.imageUrl = req.file.path;

        await newProduct.save();

        res.json({data : newProduct, status : "success"});

    } catch (error) {
        res.json(error);
    }
}


module.exports.getProduct = async (req,res) => {
    try {
        const allProduct = await Product.find();

        console.log(allProduct);

        res.json({data : allProduct, status : "success"});
        
    } catch (error) {
        res.json(error);
    }
}

