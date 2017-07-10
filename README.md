# Random-Acts-of-Kindess
A project created and developed by [Meagan Gallagher](https://github.com/mgallagher06), [Tiffany Hyatt](https://github.com/trenette12), [Alex Vohs](https://github.com/avohs24) and [Jane Claire Remick](https://github.com/pixiephreak)

## Overview and Purpose of Application
[**Random-Acts-of-Kindess**](https://heroku-link-here/) is a single-page app built using React. The Node.js server routes are handled with the Express Framework. Sequelize is used to retrieve data in the routes from user data stored in the MySql database. The charity data is provided by the [Org Hunter](https://orghunter.3scale.net/) API, while payment is managed using the [Stripe](https://stripe.com/) API.

We find, as users, that we want to contribute financially to causes and organizations we care about, but sometimes feel overwhelmed by the plethora of worthy organizations out there and deciding the amount each deserves to receive. Furthermore, we often find ourselves donating to the larger national organizations, while remaining ignorant of smaller causes in our communities that might benefit even more from a small donation. Random-Acts-of-Kindess invites the user to enter ANY dollar amount and whatever filtering criteria she wishes (by location, cause, etc). Then, she is matched with an organization and can choose to donate or see another option. The app saves donation history, tax deductible receipts, and visualizes donation data for the user.

![wireframe](/public/assets/imgs/rak_wireframes.jpg)

## Technologies Used

- Data/Database
  -Sql
  -Sequelize ORM
  -Express.js
  -Redux
- APIs
  - Stripe
  - Org Hunter
- Front End Development
  - React
  - Sass
  - HTML5
  - Materialize
- Deployment
  - Heroku
  - Webpack

## Installation Instructions
*For Users*
- Visit the application at [**# Random-Acts-of-Kindess**](heroku link).

*For Developers*
- Make sure you have NPM and Node.js installed. If you don't, follow [these instructions](http://blog.npmjs.org/post/85484771375/how-to-install-npm).
- After forking and cloning this repo, be sure to run the following commands in your terminal:
  -webpack
  -npm start
- Then, navigate to the localhost:5000 in your browser
- Keys have been hidden, so enter your own API keys (available on their sites)

## Unsolved Problems
- The code could be audited to meet 508 accessibility standards.
- Payment


## Future Plans
