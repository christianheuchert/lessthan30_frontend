# <30 Client View
### Welcome to the Repo! 

### Description
I designed <30 to be a creative writing app where users receive the same random 30 words for the day and write poems. In development I shifted the design to have 30 random words every time the word list is rendered. From the random list, a user can add words to thier poem. 

### Use
A user must first sign up to sign in. After that the user navigates to create poem to add a new title! The user is directed to view thier poems and when they click "view poem" they can edit the poem! On the poem view there is access to a word panel on the right hand side. The words on the panel can be clicked to add them to the poem! Words in the poem can be hovered to show a delete button for the specified word. 

### Screen Shot of App
![<30 Example Screen](https://i.imgur.com/PrMUNmK.png)


### User Stories
- Sign up with email, password, and password confirmation
- Login with email and password
- Logout when logged in
- Change password with current and new password
- See the daily 30 words
- Put words together in a poem format
- Update the poem
- Delete the poem
- See others users poems
- See all your own poems

### Stretch goals
- drag and drop poem words

### API Routes
| HTTP Method   | URL Path     | Action           | CRUD     |
|---------------|--------------|------------------|----------|
| POST           | /sign-up/      | create user      | `C`reate |
| POST           | /sign-in/      | start session    | `C`reate |
| DELETE         | /sign-out/     | end session      | `D`elete |
| PATCH          | /change-pw/    | edit user        | `U`pdate |
|---------------|-----------------|------------------|----------|
| POST          | /poems/         | create poem      | `C`reate |
| GET           | /poems/         | get user poems   | `R`ead   |
| DELETE        | /poems/`:id`/   | delete poem      | `D`elete |
| GET           | /poems/`:id`/   | show Poem        | `R`ead   |
| PATCH         | /poems/`:id`/   | update Poem      | `U`pdate |
|---------------|-----------------|------------------|----------|
| POST          | /poems/`:id`/words/           | create word   | `C`reate |
| DELETE        | /poems/`:id`/words/`:id2`/    | delete word   | `D`elete |
| GET           | /poems/`:id`/words/           | get poem words| `R`ead   |
|---------------|-----------------|------------------|----------|
| GET           | /wordlist/      | get random words | `R`ead   |
| GET           | /publicpoems/   | get all peoms    | `R`ead   |
| GET           | /publicwords/  s  | get all words    | `R`ead   |

### ERD
![ERD](https://i.imgur.com/BWAHtFn.png)

### Wireframe
![Wirframe User](https://i.imgur.com/rFnxJOv.png)
![Wireframe All](https://i.imgur.com/idePMTS.png)

### Links to Repositories, Server, Client
[Client](https://christianheuchert.github.io/lessthan30_frontend/poems) 
>
[Server](https://lessthan30.herokuapp.com) 
>
To Install: [Front End Repo](https://github.com/christianheuchert/lessthan30_frontend)
- Fork and clone repo
- Run `npm install` to install dependencies
- Start server with `npm start`
>
To Install: [Back End Repo](https://github.com/christianheuchert/lessthan30_backend) 
- Create a folder called django-env, run `install pipenv`
- Inside django-env run `pipenv install django-rest-auth django-cors-headers python-dotenv dj-database-url`
- create psql db with `createdb "lessthan30"`
- Inside django-env, fork and clone the back end repo
- Run `pipenv shell` to start up your virtual environment in a django-env folder
- cd into the lessthan30 backend repo, run `python3 manage.py runserver` to start backend server


### Technologies User:
Front End: 
- Javascript
- CSS
- HTML
- SASS
- Visual Studio Code
- AXIOS
- React
- React-Bootstrap
- React-Router-DOM

Back End: 
- Django
- Psql

### Development
I began the process with a brainstorm session. I had the idea for a poem writing space. To make it interesting I thought to use the fridge magnetic poetry mechanics. Random words to limit and guide creativity. From there I designed the Wireframes and later the Entity Relationship Diagrams for how the data would look. I decided to use Django PostgreSQL on the backend and React on the front end. First, I coded the database, then confirmed functionality using curl scripts, and finally moved to the front end. 

### Unsolved Problems
- Poems do not have an Author associated with them!
- Originally I wanted the list of 30 words to be the same for the entire day for all user but did not complete this goal. 
- I also wanted poems to only be editable on the day they were created. This would ensure all users poems revolved around the same set of words. 
- Drag and Drop to rearrange the words. Words have an x and y coordniate but I did not have the time to implement this. Currently, the words cannot be arranged to have a certain number of words on a given line. 