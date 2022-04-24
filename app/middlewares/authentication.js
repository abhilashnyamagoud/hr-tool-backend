const { redirect } = require('express/lib/response')
const jwt=require('jsonwebtoken')
const User=require('../models/user')

const authenticateUser=((req,res,next)=>{
    const token=req.header("Authorization").split(' ')[1]
    let tokenData
    try{
        tokenData=jwt.verify(token,'token')
        // console.log(tokenData._id)
        User.findById(tokenData._id)
        .then((user)=>{
            req.user=user
            next()
        })
        .catch((err)=>{
            res.json(err)
        })
    }
    catch(e){ 
         res.json(e.message)
    }

})

const authorizeUser=()=>{

}

module.exports={
authenticateUser
}