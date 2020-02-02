# Eriks Digital Tech Challenge

## Basic Info

- Tori Holmes-Kirk
- https://supertor.io

## Architecture Decisions

**Framework**  
React with Redux, Thunk (For asyncronous action creators), and immutable (for pure function data manipulation in the store). This is the configuration I am most familiar with.

**Design**  
For styling, I choose to use Styled Components. I had never used it before and wanted to give it a go. I implmented global styles and a theme to keep things standardized; thinking towards a bigger app. Font-Awesome was used for icons. Only loaded the necessary icons into the app library for reusability.

**Component Layout**  
Components are organized into primary functions: Pages, Layout, User Interaction, and Module (in this case - product comparison)

**Scaffolding**  
Project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app). Takes care of the babel/webpack setup and config - allowing me to focus on the app logic.

**Running**  
First, for setup, run `yarn install` or `npm install`

To start the development server, run `yarn start` or `npm start`

To build a production deploy of the project, run `yarn build` or `npm build`

**FOR IE 11**  
The development server is not supported in IE11, so you'll need to build the client to view it in browser. You can optionally use the serve package ```npm i serve -g``` to server the client locally: ```serve -s ./build/```

