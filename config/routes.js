const express=require('express')

const router=express.Router()
const employeCltr=require('../app/controllers/employeCltr')
const userController=require('../app/controllers/usersCltr')
const {authenticateUser}=require('../app/middlewares/authentication')
const taskCltr=require('../app/controllers/taskCltr')
const todoCltr=require('../app/controllers/todoCltr')
const leaveCltr=require('../app/controllers/leaveCltr')
const projectCltr=require('../app/controllers/projectCltr')
const holidayCltr=require('../app/controllers/holidayCltr')
const eventCltr=require('../app/controllers/eventCltr')

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

  //routes for project management

  router.get('/projects/all',projectCltr.list)

  router.post('/projects/create',projectCltr.create)

  router.get('/projects/:id',projectCltr.show)

  router.put('/projects/:id',projectCltr.update)

  router.delete('/projects/:id',projectCltr.remove)


  //Holiday routes

  router.get('/holidays/all',holidayCltr.list)

  router.post('/holidays/add',holidayCltr.create)

  router.get('/holidays/:id',holidayCltr.show)

  router.put('/holidays/:id',holidayCltr.update)

  router.delete('/holidays/:id',holidayCltr.delete)

  router.get('/events/all',eventCltr.list)

  router.post('/events/add',eventCltr.add)

  router.put('/events/:id',eventCltr.update)

  router.delete('/events/:id',eventCltr.delete)

module.exports =router