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

4.  ### Flex

    - ### Example

      ```javascript
      import { Box, Flex } from "@jeevanthedev/funky-css";

      function Example() {
        return (
          <Flex
            alignItems="center"
            h={100}
            justifyContent="space-evenly"
            w={100}
          >
            <React.Fragment key=".0">
              <Box color="primary" flex={1} h={20} m={5} w={50}>
                <h3>Hello Primary Box</h3>
              </Box>
              <Box color="success" flex={2} h={20} m={5} w={50}>
                <h3>Hello Success Box</h3>
              </Box>
              <Box
                flex={1}
                h={20}
                m={5}
                style={{
                  backgroundColor: "cyan",
                  color: "white",
                }}
                w={50}
              >
                <h3>Hello Random Box</h3>
              </Box>
              <Box color="danger" flex={2} h={20} m={5} w={50}>
                <h3>Hello Danger Box</h3>
              </Box>
              <Box color="warning" flex={1} h={20} m={5} w={50}>
                <h3>Hello Warning Box</h3>
              </Box>
            </React.Fragment>
          </Flex>
        );
      }
      ```

    - ### Props

      | Name          | Type           | Description                                                                                                                            | Optional |
      | ------------- | -------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------- |
      | w             | string         | `Give the Box Width eg. 100%`                                                                                                          | `false`  |
      | h             | string         | `Give the box height eg. 100%`                                                                                                         | `false`  |
      | m             | number         | `Give margin value`                                                                                                                    | `true`   |
      | mt            | number         | `Give margin top value`                                                                                                                | `true`   |
      | mb            | number         | `Give margin bottom value`                                                                                                             | `true`   |
      | ml            | number         | `Give margin left value`                                                                                                               | `true`   |
      | mr            | number         | `Give margin right value`                                                                                                              | `true`   |
      | p             | number         | `Give padding value`                                                                                                                   | `true`   |
      | pt            | number         | `Give padding top value`                                                                                                               | `true`   |
      | pb            | number         | `Give padding bottom value`                                                                                                            | `true`   |
      | pl            | number         | `Give padding left value`                                                                                                              | `true`   |
      | pr            | number         | `Give padding right value`                                                                                                             | `true`   |
      | flexDirection | string         | `Give the flex direction property eg. row, row-reverse, column, column-reverse`                                                        | `true`   |
      | jutifyContent | string         | `Give the flex justify content Property eg. flex-start, flex-end, center, space-between, space-around, space-evenly, initial, inherit` | `true`   |
      | style         | CSS Properties | `CSS Properties`                                                                                                                       | `true`   |
      | alignItems    | string         | `Give the flex align items Property eg. stretch, flex-start, flex-end, center, baseline, initial, inherit`                             | `true`   |
      | alignContent  | string         | `Give the flex align content Property eg. stretch, flex-start, flex-end, center, baseline, initial, inherit`                           | `true`   |
      | flexWrap      | string         | `Give the flex wrap Property eg. wrap, no-wrap, wrap-reverse, initial, inherit`                                                        | `true`   |
      | style         | CSS Properties | `CSS Properties`                                                                                                                       | `true`   |

5.  ### Grid

    - ### Example

      ```javascript
      import { Box, Grid } from "@jeevanthedev/funky-css";

      function Example() {
        return (
          <Grid
            gap={5}
            h="100vh"
            style={{
              backgroundColor: "cyan",
            }}
            templateColumns="repeat(5, 1fr)"
            templateRows="repeat(3, 1fr)"
            w="100%"
          >
            <React.Fragment key=".0">
              <Box colEnd={6} color="warning" start={1}>
                <h3>Hello Warning Box</h3>
              </Box>
              <Box colEnd={1} color="primary" rowEnd={4} start={2}>
                <h3>Hello Primary Box</h3>
              </Box>
              <Box colEnd={4} color="success" start={2}>
                <h3>Hello Success Box</h3>
              </Box>
              <Box colEnd={6} color="primary" start={4}>
                <h3>Hello Random Box</h3>
              </Box>
              <Box colEnd={6} color="danger" start={2}>
                <h3>Hello Danger Box</h3>
              </Box>
            </React.Fragment>
          </Grid>
        );
      }
      ```

    - ### Props

      | Name            | Type           | Description                                                   | Optional |
      | --------------- | -------------- | ------------------------------------------------------------- | -------- |
      | w               | string         | `Give the Box Width eg. 100%`                                 | `false`  |
      | h               | string         | `Give the box height eg. 100vh`                               | `false`  |
      | templateRows    | string         | `Give template rows value for a grid eg. "repeat(3, 1fr)"`    | `false`  |
      | templateColumns | string         | `Give template columns value for a grid eg. "repeat(5, 1fr)"` | `false`  |
      | gap             | number         | `Give gap value for a grid.`                                  | `false`  |
      | bg              | string         | `Give any background color`                                   | `true`   |
      | style           | CSS Properties | `CSS Properties`                                              | `true`   |

> ### To run the project in development mode :-
## Available Scripts

In the project directory, you can run:

### `npm install` to install the required packages.

### Run `npm run storybook` to run the storybook development server.

