const Event=require('../models/events')

const eventCltr={}

eventCltr.list=((req,res)=>{
    Event.find()
    .then((event)=>{
        res.json(event)
    })
    .catch((err)=>{
        res.json(err)
    })
})

eventCltr.add=((req,res)=>{
    const body=req.body
    const event=new Event(body)
    event.save()
    .then((event)=>{
        res.json(event)
    })
    .catch((err)=>{
        res.json(err)
    })
})

eventCltr.update=((req,res)=>{
    const body=req.body
    const id=req.params.id
    Event.findByIdAndUpdate(id,body,{new:true,runValidators:true})
    .then((event)=>{
        res.json(event)
    })
    .catch((err)=>{
        res.json(err)
    })
})

eventCltr.delete=((req,res)=>{
    const id=req.params.id
    Event.findByIdAndDelete(id)
    .then((evt)=>{
        res.json(evt)
    })
    .catch((err)=>{
        res.json(err)
    })
})

module.exports=eventCltr