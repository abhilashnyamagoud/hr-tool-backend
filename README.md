﻿# hr-tool-backend

Backend for employee management tool

Base URl- localhost:3088/

Rest Apis

 Employee Data format-{
   {
    "fullName":"String",
    "employesId":"number",
    "orgEmail":"String",
    "designation":"String",
    "department":"String",
    "manager":"String",
    "location":"String",
    "joinedDate":"yyyy-mm-dd",
    "dob":"yyyy-mm-dd",
    "education":"String",
    "mobile":"Number"
}

User Data format 
for Register- {
    "email":"String",
    "firstName":"String",
    "lastName":"String",
    "mobileNumber":"String",
    "password":"String",
    "userName":"aString"

}
for Login-{
    "email":"String",
    "password":"String"
}



 1. Registration user for the software - localhost:3088/users/register   ,Method- Post
 
 2. Login User- localhost:3088/users/login    ,Method - Post

  3. Get All Users - localhost:3088/users    ,Method - Get

4.  Get all the Employes - localhost:3088/api/employes    ,Method -Get

5. Create New employes - localhost:3088/api/employes    ,Method - Post

6. Get single Employe- localhost:3088/api/employes/id     ,method -Get

7. Update single employe- localhost:3088/api/employes/id    ,Method - Put

8. Delete single User - localhost:3088/api/employes/id      ,Method -Delete

9. Get Account info after login - localhost:3088/users/account    ,Method -get need to provide Bearer token in header while request.
 
