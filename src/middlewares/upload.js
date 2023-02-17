const multer = require ("multer");
const path = require("path");

const storeImageP = multer.diskStorage({
    destination:(req,file,callback)=>{
        callback(null,"public/images/products")
    },
    filename: (req,file,callback)=>{
        callback(null,`${Date.now()}_products_${path.extname(file.originalname)}`)
    }
});


const uploadImageP = multer ({
    storage: storeImageP

})

module.exports = {uploadImageP}