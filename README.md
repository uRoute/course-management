# Taskly

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 19.2.20.
and used Bootstrap as UI Framework.
## Development server
To start a local development server and it will open directly to your default browser and will navigate to `http://localhost:4200/` , run:
```bash
ng serve -o
```
The application will automatically reload whenever you modify any of the source files.
---------------------------------------------------------------------------------------------------------------------------------------------------------
## Back-end Mock API

in this task i used open source MockApi to create and end point of 2 schemas
<img width="1917" height="612" alt="Screenshot 2026-06-24 003259" src="https://github.com/user-attachments/assets/6aaa9540-0a5f-4077-9558-f3b8e9fa5da1" />
<img width="1918" height="563" alt="Screenshot 2026-06-24 003311" src="https://github.com/user-attachments/assets/21624a76-1254-4a54-8b77-045109191987" />

first schema is for users 
<img width="952" height="826" alt="Screenshot 2026-06-24 003322" src="https://github.com/user-attachments/assets/064b56ce-043b-4942-830a-55dd4b133892" />
<img width="931" height="598" alt="Screenshot 2026-06-24 003332" src="https://github.com/user-attachments/assets/3cb42713-5c58-4cd3-aee3-5ebde2a6f08d" />

second schema is for courses
<img width="942" height="692" alt="Screenshot 2026-06-24 003351" src="https://github.com/user-attachments/assets/4277333f-964c-4c08-9775-3a3f4365c046" />
<img width="892" height="737" alt="Screenshot 2026-06-24 003342" src="https://github.com/user-attachments/assets/0afb7504-cc6f-467e-bba4-f69224beea58" />

each schema is designed like requirement and followed the roles of datatypes
the end point is https://6a3a9205917c7b14c74dc8a6.mockapi.io/api/v1/:endpoint
you can replace "endpoint" with "users" or "courses"
---------------------------------------------------------------------------------------------------------------------------------------------------------------
## Login and Signup
Taskly have it is own Route protection using can activate Guard by checking if the user is logged in or not.
<img width="1918" height="862" alt="Screenshot 2026-06-23 232552" src="https://github.com/user-attachments/assets/f212902c-d04b-4dcb-b542-76f85ed8f3b7" />
<img width="1918" height="865" alt="Screenshot 2026-06-23 232532" src="https://github.com/user-attachments/assets/86da8aae-8b39-425e-b519-e6b2c103a757" />
<img width="1917" height="867" alt="Screenshot 2026-06-23 232521" src="https://github.com/user-attachments/assets/97a4bd57-78d3-4a9e-ad13-3856e6293b50" />

You need first to sign up with new email ( just type an email type ) example: example@email.com
and password start with Uppercase letter and from 5 to 9 letters or number example: Example

you can use this email and password 
email : youssef@email.com
pass : Youssef

then you can easly log in

note: there is no endpoint check if the email and password are correct or not so i handle it in front end side so you need to make sure that the email and password are correct.
-------------------------------------------------------------------------------------------------------------------------------------------------------------

## Home

After login Succefully you will see all available courses with input on the top for searching among all the courses and filter courses by course ID 
- each course has unique ID
- each course has coursename 
- each course has instructor 
- each course has duration 
- each course has creation date 
- each course has description (optional) 
- each course has price
- each course has status  

by clicking on any course you will directly go to course details page
- you can remove or update any course 
- you can add course with all information by clicking on add new course button in home screen


<img width="1918" height="868" alt="Screenshot 2026-06-24 000320" src="https://github.com/user-attachments/assets/61ab85dd-33f1-458f-b4da-e8c9b3f45ed6" />
<img width="1918" height="867" alt="Screenshot 2026-06-23 232644" src="https://github.com/user-attachments/assets/5a52b4ce-bc5b-4a8f-be27-b86b51b95d6a" />
<img width="1918" height="862" alt="Screenshot 2026-06-23 232633" src="https://github.com/user-attachments/assets/563cef49-6ef9-41d1-bb5f-a6de7340ef8b" />
<img width="1913" height="856" alt="Screenshot 2026-06-23 232618" src="https://github.com/user-attachments/assets/4d6f323d-987c-4544-972c-6477ab7570e9" />
<img width="1918" height="871" alt="Screenshot 2026-06-23 232605" src="https://github.com/user-attachments/assets/21e8763c-5876-4cde-8477-448ccba70e7e" />



- each form has it is own error handlaing and each input has error message explain the error and you can not submit any form ( add new course , sign up ... etc) without fixing all the errors
- you can paginate among courses pages
- after every action there is a toast notifaction
----------------------------------------------------------------------------------------------------------------------------------------------------------------

Things Taskly has:

- Angular 19
- lazy-loaded components
- clean folder structure
- easy to update
- bootstrap
- CRUD operations on every course
- pagination
- Routing
- authentcation
- Guard on Routing
- Routing with smooth trasnition
- Toast notification
- Clean UI and mobile friendly

