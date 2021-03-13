<h1 align="center">Funky <span>CSS</span></h1>

<p align="center">
    This project was bootstrapped with Create React App, Storybook and Typescript.
</p>

## Installing Funky CSS

To use Funky CSS components, all you need to do is install the @jeevanthedev/funky-css@<`version`> package and its peer dependencies:

```
npm install @jeevanthedev/funky-css@0.2.2 --registry=https://npm.pkg.github.com
```

## Usage

To start using the components, please follow these steps:

1. Create a theme.js file to create your theme.
   ```javascript
   export const theme = {
     fontSource: "https://fonts.googleapis.com/css?family=Poppins:400,600",
     fontFamily: "Poppins, sans-serif",
     palette: {
       common: {
         black: "#222831",
         white: "#fff",
       },
       primary: {
         main: "#19456b",
         contrastText: "#ffffff",
       },
       success: {
         main: "#27aa80",
         contrastText: "#ffffff",
       },
       danger: {
         main: "#ef4f4f",
         contrastText: "#ffffff",
       },
       warning: {
         main: "#f77f00",
         contrastText: "#ffffff",
       },
     },
   };
   ```
2. Import theme in App.js and wrap it with ThemeProvider.

   ```javascript
   import { ThemeProvider } from "styled-components";
   import { theme } from "./theme";

   function App() {
     return <ThemeProvider theme={theme}>...</ThemeProvider>;
   }
   ```

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
