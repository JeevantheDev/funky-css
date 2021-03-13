<h1 align="center">Funky <span>CSS</span></h1>

> This project was bootstrapped with
> Create React App
> <img align="center" src="assets/cra.png" width="30">,
> Storybook
> <img align="center" src="assets/storybook.png" width="30">,
> Typescript <img align="center" src="assets/typescript.png" width="30">
> and
> Styled-Components <img align="center" src="assets/styled-components.png" width="30">.

## Installing Funky CSS

To use Funky CSS components, all you need to do is install the @jeevanthedev/funky-css@<`version`> package and its peer dependencies:

```
$ npm install @jeevanthedev/funky-css@<version> --registry=https://npm.pkg.github.com
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

3. Now you can start using components like so!:

   ```javascript
   import { Button } from "@jeevanthedev/funky-css";

   function Example() {
     return <Button color="primary" text="Submit" />;
   }
   ```

## Components

1.  ### Button

    - ### Example

      ```javascript
      import { Button } from "@jeevanthedev/funky-css";

      function Example() {
        return (
          <Button
            color="primary"
            text="Submit"
            onClick={() => {
              alert("Button clicked");
            }}
          />
        );
      }
      ```

    - ### Props

      | Name    | Type           | Description                                                           | Optional |
      | ------- | -------------- | --------------------------------------------------------------------- | -------- |
      | color   | string         | `primary`, `success`, `warning`, `danger`                             | `false`  |
      | text    | string         | `any text value to show eg. <Button color="primary" text="Submit" />` | `false`  |
      | onClick | function       | `define your own function`                                            | `true`   |
      | style   | CSS Properties | `CSS Properties`                                                      | `true`   |

2.  ### Alert

    - ### Example

      ```javascript
      import { Alert } from "@jeevanthedev/funky-css";

      function Example() {
        return <Alert type="primary" text="Submit" />;
      }
      ```

    - ### Props

      | Name  | Type           | Description                               | Optional |
      | ----- | -------------- | ----------------------------------------- | -------- |
      | type  | string         | `primary`, `success`, `warning`, `danger` | `false`  |
      | text  | string         | `any text value to show`                  | `false`  |
      | style | CSS Properties | `CSS Properties`                          | `true`   |

3.  ### Box

    - ### Example

      ```javascript
      import { Box } from "@jeevanthedev/funky-css";

      function Example() {
        return (
          <Box color="primary" h="20%" w="10%">
            <React.Fragment>
              <h3>Hello Primary Box</h3>
            </React.Fragment>
          </Box>
        );
      }
      ```

    - ### Props

      | Name      | Type           | Description                                                                                                                  | Optional |
      | --------- | -------------- | ---------------------------------------------------------------------------------------------------------------------------- | -------- |
      | color     | string         | `primary`, `success`, `warning`, `danger`                                                                                    | `false`  |
      | w         | string         | `Give the Box Width eg. 10%`                                                                                                 | `false`  |
      | h         | string         | `Give the box height eg. 10%`                                                                                                | `false`  |
      | m         | number         | `Give margin value`                                                                                                          | `true`   |
      | mt        | number         | `Give margin top value`                                                                                                      | `true`   |
      | mb        | number         | `Give margin bottom value`                                                                                                   | `true`   |
      | ml        | number         | `Give margin left value`                                                                                                     | `true`   |
      | mr        | number         | `Give margin right value`                                                                                                    | `true`   |
      | p         | number         | `Give padding value`                                                                                                         | `true`   |
      | pt        | number         | `Give padding top value`                                                                                                     | `true`   |
      | pb        | number         | `Give padding bottom value`                                                                                                  | `true`   |
      | pl        | number         | `Give padding left value`                                                                                                    | `true`   |
      | pr        | number         | `Give padding right value`                                                                                                   | `true`   |
      | flex      | number         | `Give Flex value when using in Flex Component eg. <Box flex={1}>...</Box>`                                                   | `true`   |
      | alignSelf | string         | `Give align property when using in Flex Component eg. auto, center,stretch,flex-start, flex-end, baseline, initiall,inherit` | `true`   |
      | start     | number         | `Give row or column start value when using in Gridcomponent`                                                                 | `true`   |
      | rowEnd    | number         | `Give row end value when using in Grid component`                                                                            | `true`   |
      | colEnd    | number         | `Give column end value when using in Grid component`                                                                         | `true`   |
      | style     | CSS Properties | `CSS Properties`                                                                                                             | `true`   |

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
