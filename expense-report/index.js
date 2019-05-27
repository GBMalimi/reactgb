const products = require(`./models/products`);
const users = require(`./models/users`);
const express = require(`express`);
var app = express();
const db = require("./connection");
const User = require("./models/users");
const Product = require("./models/products");
const myParser = require("body-parser");
const session = require(`express-session`);
// app.use(session({ secret: "test2" }));
// app.use(myParser.urlencoded({ extended: true }));
// var app = express();

app.listen(3000)

// app.get("/", (req, res) => {
//     res.send("hello");
// });
app.use(myParser.json({extended:true}));

let allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Headers', "*");
    next();
  }
  app.use(allowCrossDomain);

app.post(`/register`, (req, res, next) => {
    var firstName = req.body.firstName;
    var lastName = req.body.lastName;
    var email = req.body.email;
    var birthDate = req.body.birthDate;
    var telephone = req.body.telephone;
    var country = req.body.country;
    var password = req.body.password;

    let user = new User({
        firstName: firstName,
        lastName: lastName,
        email: email,
        birthDate: birthDate,
        telephone: telephone,
        country: country,
        password: password
    });

    user.save(function (err) {
        if (err) {
            return next(err);
        }
        else {
            res.send("User saved")
        }
    })
});

app.post(`/newProduct`, (req, res, next) => {
    var productName = req.body.productName;
    var productDescription = req.body.productDescription;
    var productType = req.body.productType;
    var productDate = req.body.productDate;
    var productPrice = req.body.productPrice;

    let product = new Product({
        productName: productName,
        productDescription: productDescription,
        productType: productType,
        productDate: productDate,
        productPrice: productPrice
    });

    product.save(function (err) {
        if (err) {
            return next(err);
        }
        else {
            res.send("New Product Added")
        }
    })
});

// app.get("/users", (req, res, next) => {
//     users.find({}, function (err, users) {
//         if (err) {
//             return next(err);
//         }
//         res.send(users);
//     })
// });

app.get("/products", (req, res, next) => {
    products.find({}, function (err, products) {
        if (err) {
            return next(err);
        }
        res.send(products);
    })
});

app.get("/expenses", (req, res, next) => {
    Product.find({}, function(err, products) {
        if(err){
            return next(err)
        }

        res.send(products)
    })
})

app.delete("/products/:id", (req, res, next) => {
    Product.deleteOne({_id:req.params.id}, function(err){
        if(err){
            return next(err)
        }
        res.send("Product Deleted");
    })
});


app.patch("/products/:id", (req, res, next) => {
    Product.findByIdAndUpdate({_id:req.params.id}, req.body, (err) => {
        if(err){
            return next(err)
        }
        res.send("Product Update");
    })
});

app.put("/products", (req, res, next) => {
    var newValues = { $set: { productName: "gazoza" } };
    products.updateOne({ _id: "5ce0845471c37c1fa4084483" }, newValues, function (err, products) {
        if (err) {
            return next(err);
        }
        res.send("Product Updated");
    })
});



app.post("/", (req, res) => {
    var email = req.body.email;
    var password = req.body.password;

    req.session.user = email;

    res.send("Succesfully Logged In")

});

// app.post(`./login`, (req, res) => {
//     var email = req.body.emailLogin;
//     var password = req.body.passwordLogin;
//     let user = new User({
//         email: email,
//         password: password
//     });
//     user.findOne(function (err) {
//         if (err) {
//             return next(err);
//         }
//         else {
//             res.send("user find")
//         }
//     })
// });

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






