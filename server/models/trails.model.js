const mongoose = require("mongoose")

const TrailsSchema = new mongoose.Schema(
    {
        personName:{
            type:String,
            required:[true,"A name is required"]
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
    }, {timestamps:true}
)




module.exports = mongoose.model("Trails", TrailsSchema)