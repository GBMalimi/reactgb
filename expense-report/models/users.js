// exports.create = function (fn,ln,email,pass,birthDay,telephone,country) {
//     this.firstname=fn;
//     this.lastname=ln;
//     this.email=email;
//     this.pass=pass;
//     this.birthDate=birthDay;
//     this.telephone=telephone;
//     this.country=country;
// }


const mongoose=require(`mongoose`);
const Schema=mongoose.Schema;

var usersSchema=new Schema({
    firstName:{type: String},
    lastName: {type: String},
    email: {type: String},
    password: {type: String},
    birthDate: {type: String},
    telephone: {type: String},
    country: {type: String},
    
    
});

var User=mongoose.model(`User`, usersSchema);

module.exports=User;