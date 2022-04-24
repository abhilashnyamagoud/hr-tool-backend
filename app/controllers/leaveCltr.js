const Leave=require('../models/leaveManagement')

const leaveCltr={}

leaveCltr.list=((req,res)=>{
    Leave.find()
    .then((leaves)=>{
        res.json(leaves)
    })
    .catch((err)=>{
        res.json(err)
    })
})

leaveCltr.create=((req,res)=>{
    const body=req.body
    const leave=new Leave(body)
    leave.save()
    .then((lev)=>{
        res.json(lev)
    })
    .catch((err)=>{
        res.json(err)
    })
})

leaveCltr.update=((req,res)=>{
    const id=req.params.id
    const body=req.body
    Leave.findByIdAndUpdate(id,body,{new:true,runValidators:true})
    .then((leave)=>{
        res.json(leave)
    })
    .catch((err)=>{
        res.json(err)
    })
})

leaveCltr.delete=((req,res)=>{
    const id=req.params.id
    Leave.findByIdAndDelete(id)
    .then((leave)=>{
        res.json(leave)
    })
    .then((err)=>{
        res.json(err)
    })
})


module.exports=leaveCltr