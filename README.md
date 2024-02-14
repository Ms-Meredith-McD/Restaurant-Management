 # Gary's Gitpub Restaurant

## Description

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

Gary's Gitpub is a fully functional, interactive website designed for a fictional restaurant. This project was made to showcase our technical skills using various web technologies and coding languages. The website features both functionaility for a regular user, such as someone making an order, and additionally has a manager view page which allows the manager to make menu alterations/changes, and a few other features. 

## Features
Reservatons: Make a reservation to the restaurant using date, time, table size, and an additional field for notes/special requests. Upon submission, the reservation is then saved into the database which can be viewed by the manager.

Menu: View the full menu of Gary's Gitpub which features detailed descriptions of each item, and includes information such as if the meal is vegatarian, dairy free, and gluten free.

Cocktails: View the selection of cocktails that Gary's Gitpub has to offer.

Order: Place orders directly through the website, which then redirects the user to a thank you page

About Us: Learn more about Gary's Gitpub restaurant, and origin on the about us page.

Login/Logout: You are able to create an account and login to the site to place your order.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)
- [Questions](#questions)

## Installation

This project is running off of heroku and can be found at https://group-1-restaurant-manager-dc017dce6dee.herokuapp.com/

## Usage

Navigate to the link above to reach the homepage of the site.

![Example Image of the site](./public/images/README-Images/frontPage.png)

In order to use all features of the site, you will need to create an account. Simply navigate to login within the navbar, and fill out the signup form on the right hand side of the screen.

![Example Image of the site](./public/images/README-Images/loginPage.png)


Reservations
Make a reservation to the restaurant using date, time, table size, and an additional field for notes/special requests. Upon submission, the reservation is then saved into the database which can be viewed by the manager.

Menu
The menu populates using handlebars iteration from the database and lists all items on the menu. Each item features a name, price, description, and then optional columns of vegetarian, gluten free, and if the product contains dairy or not

Ordering
The order page allows the user to place a fictional order of anything on the menu. This page features everything the menu page has, except for item descriptions. The user can select the quantity they want of each item, and each time this is done the order's subtotal adds up at the bottom of the page. Additionally the tax is listed directly below the subtotal which automatically calculates. Once the user is done ordering, they can optionally add a tip which then produces the final total cost of the order. Upon placing the order, the user is redirected to a thank you page which describes the order, and 

## Credits



## License

This project is licensed under the MIT license. License link: https://opensource.org/license/mit/

## Questions


