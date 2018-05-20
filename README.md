# User Search App
[Live Site](https://user-search.brittanyjat.com/)

## Business Requirements
1. The application accepts search input in a text box and then displays in a pleasing style a list of people where any part of their first or last name matches what was typed in the search box (displaying at least name, address, age, interests, and a picture). 

2. Solution should either seed data or provide a way to enter new users or both

3. Simulate search being slow and have the UI gracefully handle the delay
## Technical Requirements
1. A Web Application using WebAPI and a front-end JavaScript framework (e.g., Angular, AngularJS, React, Aurelia, etc.) 

2. Use an ORM framework to talk to the database

3. Unit Tests for appropriate parts of the application
## Tech Used
### Front-End
1. React - React is a JavaScript library for building user interfaces. 
2. Redux - JavaScript Library for managing application state
3. Sass - CSS preprocessor, which adds special features such as variables, nested rules and mixins (sometimes referred to as syntactic sugar) into regular CSS. 

** App is mobile responsive.

### Back-End
1. Node - JavaScript run-time environment that executes JavaScript code server-side.
2. Express - A web application framework for Node.js, designed for building web applications and APIs

### Database
1. Sequelize - Sequelize is a promise-based ORM for Node.js
2. PostgreSQL - An object-relational database management system with an emphasis on extensibility and standards compliance.

### Testing
1. Jest - JavaScript testing solution for any React project.
2. Postman - Used to test, develop and document APIs by allowing users to quickly put together both simple and complex HTTP requests.

## Instructions

### Searching
1. Type part or all of the user's name you are searching for. You can search for their first and/or last name.
2. Queries are not case sensitive. 

+ considering the sample data below: searching for 'Wi' would reult in 'Rilo Lewis' and 'Willy Wonka' as they both have 'wi' in their name.

#### Sample Data

```[
    {
        "id": 7,
        "lastName": "Jenkins",
        "firstName": "Greg",
    },
    {
        "id": 5,
        "lastName": "Lewis",
        "firstName": "Rilo",
    },
    {
        "id": 12,
        "lastName": "Wonka",
        "firstName": "Willy",
    },
    {
        "id": 13,
        "lastName": "Frehley",
        "firstName": "Ace",
    }
]
```

### Adding New Users
1. I implemented Cloudinary and React-Dropzone in order for the user's photo to be added to their profile in the database.
2. Once required fields are inputted (First Name, Last Name, Address, Age, and 4 Interests), Submit button will be enabled. 
3. After hosting this project, I decided to require an admin password on all submissions to avoid bad data ending up in my database. If you are intersted in using this functionality, please message me for the password.
