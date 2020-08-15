# Personal Cookbook

A Single-Page Application Project by Dajana Aghiarian (Back-end Repository)

Personal Cookbook is an application that allows users to sign up with an account and create recipes for their cookbook. Users can access their old recipes by clicking the "Get All Recipes" button. From there, users can delete or update their old recipes.

I usually use Pinterest to find new, interesting recipes. This gave me the idea for building an online cookbook. I thought that it would be cool to have my own place to store recipes and allow other users to do the same.

# Links
### Deployed Client Site
  <https://dajana8127.github.io/cookbook-client/>
### Back-End Repository
  <https://dajana8127.github.io/cookbook-client/>
### Deployed API
  <https://warm-woodland-06371.herokuapp.com>

# Technologies Used:

1. JavaScript
2. jQuery
3. Handlebars
4. CSS/SASS
5. Bootstrap
6. HTML
7. AJAX
8. GitHub
9. MongoDB
10. Mongoose
11. Express.js
12. Node.js
13. Heroku

# User Stories

- As a user, I want to be able to sign up.
- As a user, I want to be able to sign in with my credentials.
- As a user, I want to be able to change my password.
- As a user, I want to be able to sign out.
- As a user, I want to be able to create new recipes for my cookbook.
- As a user, I want to be able to see all of my old recipes.
- As a user, I want to be able to update those recipes.
- As a user, I want to be able to delete those recipes.

# Wireframes

![Wireframe 1](https://i.imgur.com/U7Xyhoa.jpg)
![Wireframe 2](https://i.imgur.com/gp7qsOa.jpg)

# Entity Relationship Diagram

![ERD](https://i.imgur.com/Y67zklL.jpg)

# Planning & Development

While creating and developing my application, I focused on following the steps below:

- Set up the back-end of the application, with the API requests (GET, POST, PATCH, DELETE) for recipes and user.
- Test out their functionality before deploying server application on Heroku.
- Begin the initial front-end design and functionality skeleton.
- Implement handlebars for displaying data.
- Test functionality of the authentication system and the connection between user authorization and the ability to create, update, and delete events.
- Add feedback messages for each action's success and failure.
- De-bug and refactor.

# Unsolved Problems / Future Development Plans

I would like to add an option for the user to see all recipes in the database and comment on other users' recipes. Users won't be able to delete or update any recipes that don't belong to them.
Make my code DRY. I think there is an opportunity to do that by removing some of the IDs from my HTML.
