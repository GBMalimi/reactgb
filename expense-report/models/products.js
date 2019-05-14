// exports.create=function(pn,pd,type,purchaseDate,price,userEmail){
//     this.productName=pn;
//     this.productDescription=pd;
//     this.productType=type;
//     this.purchaseDate=purchaseDate;
//     this.price=price;
//     this.userId=userEmail;
// }


const mongoose=require(`mongoose`);
const Schema=mongoose.Schema;

var productSchema=new Schema({
    productName:{type: String, require: true},
    productDescription: {type: String},
    productType: {type: String},
    purchaseDate: {type: Date, required: true},
    price: {type: Number, required:true},
    userId: {type: String, required:true}
});

var Product=mongoose.model(`Product`, productSchema);

module.exports=Product;