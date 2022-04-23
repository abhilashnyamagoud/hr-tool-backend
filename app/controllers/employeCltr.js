const Employe=require('../models/employes')

const employeCltr={}

employeCltr.list=((req,res)=>{
    Employe.find()
    .then((employes)=>{
        res.json(employes)
    })
    .catch((err)=>{
        res.json(err)
    })
})

employeCltr.create=((req,res)=>{
    const body=req.body
    const employes=new Employe(body)
    employes.save()
    .then((emp)=>{
        res.json(emp)
    })
    .catch((err)=>{
        res.json(err)
    })
})

employeCltr.show=((req,res)=>{
    const id=req.params.id
    Employe.findById(id)
    .then((emp)=>{
        res.json(emp)
    })
    .catch((err)=>{
        console.log('err')
        res.json(err)
    })
})

employeCltr.remove=((req,res)=>{
    const id=req.params.id
    Employe.findByIdAndDelete(id)
    .then((emp)=>{
        res.json(emp)
    })
    .catch((err)=>{
        res.json(err)
    })
})

employeCltr.update=((req,res)=>{
    const id=req.params.id
    const body=req.body
    Employe.findByIdAndUpdate(id,body,{new:true,runValidators:true})
    .then((emp)=>{
        res.json(emp)
    })
    .catch((err)=>{
        res.json(err)
    })

})


module.exports=employeCltr