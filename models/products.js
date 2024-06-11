const mongoose=require("mongoose")
const schema=mongoose.Schema(
    {
        "productname":String,
        "productbrand":String,
        "rating":String
        
       
    }
)
let productsmodel = mongoose.Model("products",schema);
module.exports={productsmodel}
