const Project=require('../models/projects')

const projectCltr={}

projectCltr.list=((req,res)=>{
    Project.find()
    .then((proj)=>{
        res.json(proj)
    })
    .catch((err)=>{
        res.json(err)
    })
})

projectCltr.create=((req,res)=>{
    const body=req.body
    const project=new Project(body)
    project.save()
    .then((val)=>{
        res.json(val)
    })
    .catch((err)=>{
        res.json(err)
    })
})

projectCltr.show=((req,res)=>{
    const id=req.params.id
    Project.findById(id)
    .then((project)=>{
        res.json(project)
    })
    .catch((err)=>{
        res.json(err)
    })
})

projectCltr.update=((req,res)=>{
    const id=req.params.id
    const body=req.body
    Project.findByIdAndUpdate(id,body,{new:true,runValidators:true})
    .then((val)=>{
        res.json(val)
    })
    .catch((err)=>{
        res.json(err)
    })
})

projectCltr.remove=((req,res)=>{
    const id=req.params.id
    Project.findByIdAndDelete(id)
    .then((val)=>[
        res.json(val)
    ])
    .catch((err)=>{
        res.json(err)
    })
})

module.exports=projectCltr