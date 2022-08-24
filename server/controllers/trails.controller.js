const trails =  require("../models/trailsInfo.model")


module.exports = {

    getTrails:(req,res)=>{
        trails.find({})
        .then((allTrails) =>{res.json(allTrails)})
        .catch((err)=>{console.log("Error in finding all inputs")
        res.status(400).json({message:"Something went wrong in finding all trail information", err})
    })
    },

    createTrails:(req,res)=>{
        trails.create(req.body)
        .then((createTrails)=>{res.status(201).json(createTrails)})
        .catch((err)=>{console.log("error in creating all trail info", err)
        res.status(400).json({message:"Something went wrong in creating trail info"})
    })
    },

    getTrailsById:(req,res)=>{
        trails.findOne({_id:req.params.id})
        .then((trail)=>{res.json(trail)})
        .catch((err)=>{console.log("error in getting this id")
        res.status(400).json({message:"Something went wrong in finding this id"})})
    },

    updateTrails:(req,res)=>{
        trails.findOneAndUpdate({id:req.params.id}, req.body, {new:true, runValidators:true})
        .then((updateTrails)=>res.json(updateTrails))
        .catch((err)=>{console.log("error in updating values", err)})
    },

    deleteTrails:(req,res)=>{
        trails.findByIdAndDelete({_id:req.params.id})
        .then((deleteTrails)=>res.json(deleteTrails))
        .catch((err)=>res.status(400).json(err));
    },

}