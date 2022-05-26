# <30 Client View
### Welcome to the Repo! 

### Description
I designed <30 to be a creative writing app where users receive the same random 30 words for the day and write poems. In development I shifted the design to have 30 random words every time the word list is rendered. From the random list a user can add words to thier poem. 

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
|:--------------|:-------------|:-----------------|----------|
| GET           | /posts       | index or list    | `R`ead   |
| GET           | /posts/`:id` | show or retrieve | `R`ead   |
| POST          | /posts       | create           | `C`reate |
| PATCH         | /posts/`:id` | update           | `U`pdate |
| DELETE        | /posts/`:id` | destroy          | `D`elete |
| HTTP Method   | URL Path        | Action           | CRUD     |
|:--------------|:----------------|:-----------------|----------|
| POST          | /comments       | create           | `C`reate |
| PATCH         | /comments/`:id` | update           | `U`pdate |
| DELETE        | /comments/`:id` | destroy          | `D`elete |

### ERD
![ERD](https://i.imgur.com/BWAHtFn.png)

### Wireframe
![Wirframe User](https://i.imgur.com/rFnxJOv.png)
![Wireframe All](https://i.imgur.com/idePMTS.png)

### Links to Repository
[Front End Repo](https://github.com/christianheuchert/lessthan30_frontend) 
>
[Back End Repo](https://github.com/christianheuchert/lessthan30_backend)