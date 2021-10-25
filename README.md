# Rancid Tomatillos


## Project Repo
[Rancid Tomatillos](https://github.com/lokiandfengshui/rancid-tomatillos)


## Deployable link
N/A


## Contributors

- [Bei Zhang](https://github.com/lokiandfengshui)
- [Logan Vincent](https://github.com/Logandv3)


## Technologies Used

* Created with [Create React App](https://github.com/facebook/create-react-app)
* Code: HTML, SCSS, JavaScript
* TDD: Cypress
* Compiler: Webpack
* Linter: eslint
* Debugging: Chrome Dev Tools
* Version Control/Management: Git/Github/Github Projects


## Setup

- Fork this web app to your own Github account
- Clone the repository to your local machine
- `cd` into the file
- run `npm install`.
- Run `npm start` and visit `localhost:3000`


## Project Overview

- Rancid Tomatillos is an app that allows users to view all movies as well as their individual details.


## Learning Goals

- Gain competency with React fundamentals
- Learn how to test React components & asynchronous JS
- Practice refactoring
- Create a multi-page UX using Router


## How to Use

- When the user loads the page they will see a header with navigation links, a section where a featured movie would populate and a list of all available movies.
![Rancid Tomatillos- Main Page](https://user-images.githubusercontent.com/81990507/138781042-78712c2b-3920-4e4e-aa74-b755f6c18034.png)

- If the user wants to know more details about a particular movie they can click directly on the movie they want the app will render a movie detail page. 
- The detail page has an image, rating and various other items describing the movie.  When the user wishes to return to the main page they can click the back       button or go back in their browser.
![Rancid Tomatillos -Detail Page](https://user-images.githubusercontent.com/81990507/138781078-3a1765ff-04f7-46b3-9d43-b1c2ee1574a4.png)


- If the user wishes to log in to their account they can click the login link at the top and be taken to a login page.
![Rancid Tomatillos- Login Page](https://user-images.githubusercontent.com/81990507/138781118-ed6a7cfd-6327-4adc-bd5a-dc19a9c72e4a.png)



## Wins

- Even though this was our first React project we were able to successfully use fetch calls and error messages.
- React made it much easier to keep our UI in sync with the scripts.
- We were able to do more complete testing with Cypress even though it was a challenge.
- We can now render certain components as pages instead of using hide and show functions.

## Challenges

- Cypress was hard to get used to.  We specifically had a hard time with the fetch call stubbing and it took a while to figure out.
- React Router was tricky to use for some elements.
- React has different error types and more going on under the hood, so it was sometimes difficult to determine where a bug was happening.

## Reflections

- React makes a lot of things easier like the UI and can be nice for organizing data and managing state.  This was a good first project and we look forward to       doing more projects with React.


## Future Plans

- Finish the login page so the user has more options.
- Implement Express.js server functionality to allow the user to search, rate and save movies.
- We would like to allow the user to view a movies trailer video on the movie detail page.
- We would like to implement functionality allowing the user to view a sneak peek at the movie details when they hover over the movie.

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
