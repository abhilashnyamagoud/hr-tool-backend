const express=require('express')

const router=express.Router()
const employeCltr=require('../app/controllers/employeCltr')
const userController=require('../app/controllers/usersCltr')
const {authenticateUser}=require('../app/middlewares/authentication')
const taskCltr=require('../app/controllers/taskCltr')
const todoCltr=require('../app/controllers/todoCltr')
const leaveCltr=require('../app/controllers/leaveCltr')

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


  //routes for Task

  router.get('/tasks/all',taskCltr.list)

  router.post('/tasks/add',taskCltr.create)

  router.put('/tasks/:id',taskCltr.update)

  router.delete('/tasks/:id',taskCltr.delete)

  router.get('/tasks/:id',taskCltr.show)

  //routes for todo

  router.get('/todo/all',todoCltr.list)

  router.post('/todo/add',todoCltr.create)

  router.delete('/todo/:id',todoCltr.delete)


  //routes for leave management

  router.get('/leaveManagement/leaves',leaveCltr.list)

  router.post('/leaveManagement/add',leaveCltr.create)

  router.put('/leaveManagement/:id',leaveCltr.update)

  router.delete('/leaveManagement/:id',leaveCltr.delete)

module.exports =router