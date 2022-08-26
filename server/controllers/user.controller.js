const Users =  require("../models/user.model");
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

module.exports = {

    getUsers:(req,res)=>{
        Users.find({})
        .then((allUsers) =>{res.json(allUsers)})
        .catch((err)=>{res.status(400).json({message:"Something went wrong in finding all users information", err})
    })
    },
    
    // getUserById:(req,res)=>{
    //     console.log('looking for id: '+req.params.id);
    //     Users.findOne({_id:req.params.id})
    //     .then((oneUser)=>res.json(oneUser))
    //     .catch((err)=>{console.log("error in getting this id")
    //     res.status(400).json({message:"Something went wrong in finding this id"},err)
    //     })
    // },
    
    updateUserById:(req,res)=>{
        Users.findOneAndUpdate({id:req.params.id}, req.body, {new:true, runValidators:true})
        .then((updateUser)=>res.json(updateUser))
        .catch((err)=>{console.log("error in updating values", err)
        })
    },
    
    deleteUser:(req,res)=>{
        Users.findByIdAndDelete({_id:req.params.id})
        .then((deleteUser)=>res.json(deleteUser))
        .catch((err)=>res.status(400).json(err));
    },

    registerUser: (req, res)=>{
        const newUser = new Users(req.body);
        console.log(newUser);

        newUser.save()
            .then(()=>{
                // console.log('successful registration'),
                res.json({
                    message: 'Successfully Registered',
                    user: newUser,
                })
            }).catch((err)=>res.status(400).json(err))
    },

    authUser: (req, res)=> {
        Users.findOne({email: req.body.email})
        .then((user)=>{
            if(user === null){
                res.status(400).json({message:'Please Provide All Credentials'})
            } else{
                bcrypt.compare(req.body.password, user.password)
                    .then((isPasswordValid)=>{
                        if(isPasswordValid === true) {
                            console.log('Password Matches');
                            res.cookie('usertoken', 
                            jwt.sign({
                                _id: user._id,
                            },
                            process.env.JWT_SECRET),
                            {
                                httpOnly: true,
                                expires: new Date(Date.now() + 90000000000)
                            })
                            .json({
                                message: 'Successful Log in',
                                userLoggedIn: {
                                    username: `${user.firstName} ${user.lastName}`,
                                }
                            })

                        }else{
                            res.status(400).json({message:"Invalid Login"})
                        }
                    })
                    .catch((err)=>{
                        res.status(400).json({message:"Invalid Login"})
                    })
            }
        })
        .catch((err)=>{
            res.status(400).json({message:"Invalid Login"})
        })
    },


    logout: (req, res)=>{
        console.log('logging out!');
        res.clearCookie('usertoken');
        res.json({message:'Successful Log Out!'});
    },

    getLoggedInUser(req,res){
        const decodedJWT= jwt.decode(req.cookies.usertoken, {complete:true});

        Users.findById(decodedJWT.payload._id)
        .then(user=>res.json(user))
        .catch(err=>res.json(err));
    }

}