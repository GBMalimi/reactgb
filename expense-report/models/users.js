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

var userSchema=new Schema({
    firstName:{type: String},
    lastName: {type: String},
    email: {ttype: String},
    birthDate: {type: String},
    telephone: {type: String},
    country: {type: String},
    password: {type: String}
});

var User=mongoose.model(`User`, userSchema);

module.exports=User;