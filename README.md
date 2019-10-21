## The Cooper Challenge
### Author: Becca Burns & Alex Saxena

The Cooper Challenge project is a full stack application that allows users to check current and previous results of their aerobic fitness measured by the cooper test. To perform the test the athlete must run at high intensity for 12 minutes. Once completed, the user will inpu the distance, age and gender for the result.

The backend(API) was build on Ruby on Rails and the front-end was build on ReactJS. This project was bootstrapped with Create React App.

Users can visit the deployed app [here](cooperchallenge.netlify.com).
(Note: For the app to run properly accessing the API please fork the API repository [here](https://github.com/beccaburns/Cooper_App/tree/development/cooper_api) and run it with the rails s command.)

### Available Scripts:
In the project directory, you can run:

#### npm start
Runs the app in the development mode.
Open http://localhost:3001 to view it in the browser.

The page will reload if you make edits.
You will also see any lint errors in the console.

#### npm test
Launches the test runner in the interactive watch mode.

#### npm run features
Runs feature testing.

#### npm run build
Builds the app for production to the build folder.
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.
Your app is ready to be deployed!

### Craft Academy Challenge Question
In this project the calculation is performed on the client-side.

### Pros/Cons of client-side calculation
#### Pros
- Client-side allows easier scale due to lower computational load
- Lower (server) costs
#### Cons
- Security
- Client-side resources can cause issue
- Software can not be written in any language or framework without it affecting the client-side