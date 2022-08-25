const mongoose = require("mongoose");
const bcrypt = require('bcryptjs');

const UserSchema = new mongoose.Schema({
        firstName:{
        type:String 
        },

        lastName:{
            type:String 
        },

        age:{
            type:Date
        },

        email: {
            type:String,
            required:[true,"An email is required"],
            unique: true
        },

        password:{
            type:String,
            required:[true,"A password is required"],
        },


    }, {timestamps:true}
)

UserSchema.virtual('confirmPassword')
    .get(()=>this._confirmPassword)
    .set((value)=>this._confirmPassword=value);

UserSchema.pre('validate', function(next){
    if(this.password !== this.confirmPassword){
        this.invalidate('confirmPassword', 'Passwords did not match, Please try again');
    }
    next();
})

UserSchema.pre('save', function(next){
    bcrypt.hash(this.password, 10)
        .then((hashedPassword)=>{
            console.log('password:' +this.password);
            console.log('hashed: ' +hashedPassword);
            this.password=hashedPassword;
            next();
        })
});



module.exports = mongoose.model("User", UserSchema)