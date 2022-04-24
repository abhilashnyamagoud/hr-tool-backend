const Todo=require('../models/todo')

const todoCltr={}

todoCltr.list=((req,res)=>{
    Todo.find()
    .then((todo)=>{
        res.json(todo)
    })
    .catch((err)=>{
        res.json(err)
    })
})

todoCltr.create=((req,res)=>{
    const body=req.body
    const todo=new Todo(body)
    todo.save()
    .then((todo)=>{
        res.json(todo)
    })
    .catch((err)=>{
        res.json(err)
    })
})

todoCltr.delete=((req,res)=>{
    const id=req.params.id
    Todo.findByIdAndDelete(id)
    .then((todo)=>{
        res.json(todo)
    })
    .catch((err)=>{
        res.json(err)
    })
})

module.exports=todoCltr