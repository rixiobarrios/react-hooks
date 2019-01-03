[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly/education/web-development-immersive)

# React CRUD

## Prerequisites

-   [react](https://git.generalassemb.ly/ga-wdi-boston/react)
-   [react-components-props](https://git.generalassemb.ly/ga-wdi-boston/react-components-props)
-   [react-components-state](https://git.generalassemb.ly/ga-wdi-boston/react-components-state)
-   [react-router](https://git.generalassemb.ly/ga-wdi-boston/react-router)

## Objectives

By the end of this, developers should be able to:

- Make HTTP requests to an API from within a React app using [axios](https://github.com/axios/axios):
  -  (R)EAD resource collection.
  -  (R)EAD specific resource.
  -  (D)ELETE specific resource.
  -  (U)PDATE specific resource.
  -  (C)REATE new resource.

## Preparation

1.  Fork and clone this repository.
 [FAQ](https://github.com/ga-wdi-boston/meta/wiki/ForkAndClone)

## Movie API

This project is meant to work along side https://git.generalassemb.ly/ga-wdi-boston/movie-api#movies to demonstrate creating a basic single page application in React that talks to a Rails API.

## Lab: Movie Application
Create a new folder in `temp` named `movie-application`.  In this folder, we will clone our rails api and will create a react client application to communicate with it.

### Lab: Setup Rails API
In your `temp/movie-application` folder, fork, clone and follow the set up instructionsfor the rails api https://git.generalassemb.ly/ga-wdi-boston/movie-api.

### Code along: Setup React App
In your `temp/movie-application` folder, review [react](https://git.generalassemb.ly/ga-wdi-boston/react) to set up a new react app named `movie-client`.

#### Code along: Add React Router
Review [react-router](https://git.generalassemb.ly/ga-wdi-boston/react-router) to add react router.

#### Code along: Add Axios
Include axios library using npm https://www.npmjs.com/package/axios.

## CRUD a Movie

### Methodical Approach
1.  Test API in browser (if possible)
1.  Test API with curl script
1.  Add feature to react application
    1.  Add route to `src/components/App.js`
    1.  Create component to render for route
      1.  Add component constructor
      1.  Add component render
      1.  Add component event
      1.  Add component axios call

### Code along: (R)EAD movies collection
- browser
- curl
- react

### Code along: (R)EAD specific movie
- browser
- curl
- react

### Lab: (D)ELETE specific movie
- curl
- react

### Code along: (U)PDATE specific movie
- curl
- AJAX

### Lab: (C)REATE new movie
- curl
- react

## Advanced React

### Demo
- Refactor forms into shared component
- Add footer using component composition

## Additional Resources
-   [React FAQ AJAX](https://reactjs.org/docs/faq-ajax.html)
-   [Axios and React](https://alligator.io/react/axios-react/)

## [License](LICENSE)

1.  All content is licensed under a CC­BY­NC­SA 4.0 license.
1.  All software code is licensed under GNU GPLv3. For commercial use or
    alternative licensing, please contact legal@ga.co.
