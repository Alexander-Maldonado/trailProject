const mongoose = require("mongoose")

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
            // required:[true,"An email is required"]
        },

        password:{
            type:String,
            // required:[true,"A password is required"]
        },

        confirmPassword:{
            type:String,
            // required:[true, "Please re-enter password"]
        },

    }, {timestamps:true}
)




module.exports = mongoose.model("User", UserSchema)