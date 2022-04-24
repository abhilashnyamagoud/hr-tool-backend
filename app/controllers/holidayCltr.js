const Holiday=require('../models/holiday')

const holidayCltr={}

holidayCltr.list=((req,res)=>{
    Holiday.find()
    .then((val)=>{
        res.json(val)
    })
    .catch((err)=>{
        res.json(err)
    })
})

holidayCltr.create=((req,res)=>{
    const body=req.body
    const holiday=new Holiday(body)
    holiday.save()
    .then((val)=>{
        res.json(val)
    })
    .catch((err)=>{
        res.json(err)
    })
})

holidayCltr.show=((req,res)=>{
    const id=req.params.id
    Holiday.findById(id)
    .then((val)=>{
        res.json(val)
    })
    .catch((err)=>{
        res.json(err)
    })
})

holidayCltr.update=((req,res)=>{
    const id=req.params.id
    const body=req.body
    Holiday.findByIdAndUpdate(id,body,{new:true,runValidators:true})
    .then((val)=>{
        res.json(val)
    })
    .catch((err)=>[
        res.json(err)
    ])
})

holidayCltr.delete=((req,res)=>{
    const id=req.params.id
    Holiday.findByIdAndDelete(id)
    .then((val)=>{
        res.json(val)
    })
    .catch((err)=>{
        res.json(err)
    })
})

module.exports=holidayCltr