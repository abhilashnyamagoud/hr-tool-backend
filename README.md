# hr-tool-backend

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

for Task-{
    "title":"String",
    "description":"String",
    "dueDate":"yyyy-mm-dd",
    "completed":boolen 
}

for Todo-{
    "todo":"String"
}

for LeaveManagement-{
    "firstName":"String",
    "lastName":"String",
    "employeeId":number,
    "leaveType":"String",
    "fromDate":"yyyy-mm-dd",
    "toDate":"yyyy-mm-dd",
    "remarks":"String"
}

for projects-{
    "projectName":"String",
    "clientName":"String",
    "deadLine":"yyyy-mm-dd",
    "status":"string",
    "teamMembers":Array
}

for holiday-{
    "title":"String",
    "type":"String",
    "date":"yyyy-mm-dd",
    "details":"string"
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

10. Get all the tasks - localhost:3088/tasks/all    ,Method- Get 

11. create new Task -localhost:3088/tasks/add    ,method -post

12. update single task - localhost:3088/tasks/id    ,method - put

13. delete single task - localhost:3088/tasks/id  , method -delete

14. get single task - localhost:3088/tasks/id   ,method - get

15. get all todo list- localhost:3088/todo/all  ,method - get

16. create todo - localhost:3088/todo/add  ,method-post

17. delete todo - localhost:3088/todo/id  ,method-delete

18. get all leaves- localhost:3088/leaveManagement/leaves  , method-get

19. add leave request - localhost:3088/leaveManagement/add , method-post

20. update leave - localhost:3088/leaveManagement/id , method-put

21. delete leave request- localhost:3088/leaveManagement/id , method-delete

22. Get all the projects - localhost:3088/projects/all ,method- get

23. create new project- localhost:3088/projects/create ,method-post

24. get single project localhost:3088/projects/id ,method-get

25. update single project localhost:3088/projects/id , method-put

26. delete single project localhost:3088/projects/id , method-delete

27. get all holidays- localhost:3088/holidays/all ,method-get

28. create new holiday - localhost:3088/holidays/add ,method- post

29. get single holiday - localhost:3088/holidays/id ,methos-get

30. update holiday - localhost:3088/holidays/id , method - put

31. delete holiday - localhost:3088/holidays/id , method - delete
 
