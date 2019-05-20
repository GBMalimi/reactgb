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
    productName:{type: String},
    productDescription: {type: String},
    productType: {type: String},
    productDate: {type: String},
    productPrice: {type: String},
    userId: {type: String},
});

var Product=mongoose.model(`Product`, productSchema);

module.exports=Product;