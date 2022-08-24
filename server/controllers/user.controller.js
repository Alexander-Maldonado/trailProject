const users =  require("../models/user.model")

module.exports = {

    getUsers:(req,res)=>{
        users.find({})
        .then((allUsers) =>{res.json(allUsers)})
        .catch((err)=>{console.log("Error in finding all users")
        res.status(400).json({message:"Something went wrong in finding all users information", err})
    })
    },
    
    createUsers:(req,res)=>{
        users.create(req.body)
        .then((createUsers)=>{res.status(201).json(createUsers)})
        .catch((err)=>{console.log("error in creating a user", err)
        res.status(400).json({message:"Something went wrong in creating user"})
    })
    },
    
    getUserById:(req,res)=>{
        users.findOne({_id:req.params.id})
        .then((user)=>{res.json(user)})
        .catch((err)=>{console.log("error in getting this id")
        res.status(400).json({message:"Something went wrong in finding this id"},err)
        })
    },
    
    updateUserById:(req,res)=>{
        users.findOneAndUpdate({id:req.params.id}, req.body, {new:true, runValidators:true})
        .then((updateUser)=>res.json(updateUser))
        .catch((err)=>{console.log("error in updating values", err)
        })
    },
    
    deleteUser:(req,res)=>{
        users.findByIdAndDelete({_id:req.params.id})
        .then((deleteUser)=>res.json(deleteUser))
        .catch((err)=>res.status(400).json(err));
    },
}