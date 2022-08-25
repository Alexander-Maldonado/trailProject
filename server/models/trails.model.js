const mongoose = require("mongoose")

const TrailsSchema = new mongoose.Schema(
    {
        trailUser:{
            type:String,
            // required:[true,"A name is required"]
        },

        trailName:{
            type:String,
            required:[true,"A trail is required"]
        },
        numOfTrails:{
            type:Number
        },
        state:{
            type:String
        },
        city:{
            type:String
        },
        zipCode:{
            type:Number
        },

        complete:{
            type:String
        },

        date:{
            type:Date
        },
        
    }, {timestamps:true}
)




module.exports = mongoose.model("Trails", TrailsSchema)