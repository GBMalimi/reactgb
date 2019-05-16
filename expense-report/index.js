const products = require(`./models/products`);
const express = require(`express`);
var app = express();
const dba=require("./connection");
const User=require("./models/users")
const myParser = require("body-parser");
const session = require(`express-session`);
app.use(session({ secret: "test" }));

app.listen(8005)

app.get ("/", (req,res)=>{
    res.send("hello");
})

app.use(myParser.urlencoded({ extended: true }));



app.post(`/register`, (req, res, next) => {
    var firstname = req.body.firstname;
    var lastname = req.body.lastname;
    var email = req.body.email;
    var password = req.body.pass;
    var birthDate = req.body.birthDate;
    var telephone = req.body.telephone;
    var country = req.body.country;

    let user=new User({
        firstName: firstname,
        lastName: lastname,
        email: email,
        password: password,
        birthDate: birthDate,
        telephone: telephone,
        country: country
                
    })

    user.save(function(err){
        if(err){
            return next(err);
        }
        else{
            res.send("User saved")
        }
    })
});

app.post(`/newproduct`, (req,res, next)=>{
    var productName=req.body.productname;
    var productDescription=req.body.productdescription;
    var productType=req.body.producttype;
    var prooductDate=req.body.prooductdate;
    var productPrice=req.body.productprice;

    let product=new Product({
        productName: productname,
        productDescription: productdescription,
        productType: producttype,
        prooductDate: prooductdate,
        productPrice: productprice
    })

    user.save(function(err){
        if(err){
            return next(err);
        }
        else{
            res.send("User saved")
        }
    })
})

// app.post(`./login`, (req, res) => {
//     var email = req.body.emailLogin;
//     var password = req.body.passwordLogin;

//     // database checks

//     req.session.user = email;
//     // return response to Frontend
// })

// app.post(`./addProduct`, (req,res)=>{
//     if(req.session.email){
//         var productName=req.body.productName;
//         var productDescription=re.body.productDescription;
//         var productType=req.body.productType;
//         var purchaseDate=req.body.purchaseDate;
//         var price=req.body.price;
//         var userEmail=req.session.email;

//         var p = new products.create(productName,productDescription,productType,purchaseDate,price,userEmail);
//         // send response to FE
//     }
//     else {
//         res.status(403).send("Access denied");
//     }

// })

// console.log(ul);



app.get("/products", (req, res, next)=>{
    products.find({},function(err, products){
        if(err) {
            return next(err);
        }
        res.send(products);
    })
})
