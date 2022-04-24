const express=require('express')

const router=express.Router()
const employeCltr=require('../app/controllers/employeCltr')
const userController=require('../app/controllers/usersCltr')
const {authenticateUser}=require('../app/middlewares/authentication')

    //Routes for employes
    //for get all employes
  router.get('/api/employes',employeCltr.list)
  
  //to create employes
  router.post('/api/employes',employeCltr.create)

  //to get single Employe
  router.get('/api/employes/:id',employeCltr.show)

  //update single employe
  router.put('/api/employes/:id',employeCltr.update)

  //delete single employes
  router.delete('/api/employes/:id',employeCltr.remove)


  //router for user registration
  router.post('/users/register',userController.register)

  //for get all users
  router.get('/users',userController.list)

  //login URL
  router.post('/users/login',userController.login)

  //get account info

  router.get('/users/account',authenticateUser,userController.account)

module.exports =router