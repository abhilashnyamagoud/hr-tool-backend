const User=require('../models/user')
const bcryptjs=require('bcryptjs')
const jwt=require('jsonwebtoken')

const userController={}

//User Registration
userController.register=((req,res)=>{
    const body=req.body
    const user=new User(body)
    bcryptjs.genSalt()
        .then((salt)=>{
            bcryptjs.hash(user.password,salt)
            .then((encrypted)=>{
                user.password=encrypted
                user.save()
                .then((user)=>{
                    res.json(user)
                })
                .catch((err)=>{
                    res.json(err)
                })
            })
        })
    // user.save()
    // .then((user)=>{
    //     res.json(user)
    // })
    // .catch((err)=>{
    //     res.json(err)
    // })
})

userController.list=((req,res)=>{
    User.find()
    .then((users)=>{
        res.json(users)
    })
    .catch((err)=>{
        res.json(err)
    })
})

userController.login=((req,res)=>{
    const body=req.body
    User.findOne({email:body.email})
    .then((user)=>{
        if(!user){
            res.json({
                errors:'invalid Email or password'
            })

        }
        bcryptjs.compare(body.password,user.password) 
        .then((match)=>{
            if(match){
                const tokenData={
                    _id:user._id,
                    email:user.email,
                    userName:user.userName
                }
               const token= jwt.sign(tokenData,'token',{expiresIn:'1d'})

                res.json({
                    token:`Bearer ${token}`
                })
            }else{
                res.json({errors:'invalid email or password'})
            }
        })       

    })
})

userController.account=((req,res)=>{
        res.json(req.user)
})


module.exports=userController