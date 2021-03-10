import React from "react";
import Button from "components/Button/Button";
import Alert from "components/Alert/Alert";
import Box from "components/Box/Box";
import Flex from "components/Flex/Flex";
import { Grid } from "components/Grid/Grid";
import { ThemeProvider } from "styled-components";
import { defaultTheme } from "theme";
import "./App.css";

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <div className="App">
        <Grid
          templateRows="repeat(3, 1fr)"
          templateColumns="repeat(5, 1fr)"
          gap={5}
          style={{ backgroundColor: "cyan" }}
          w={100}
          h={100}
        >
          <>
            <Box start={1} colEnd={6} color="warning">
              <h3>Hello Warning Box</h3>
            </Box>
            <Box start={2} rowEnd={4} colEnd={1} color="primary">
              <h3>Hello Primary Box</h3>
            </Box>
            <Box start={2} colEnd={4} color="success">
              <h3>Hello Success Box</h3>
            </Box>
            <Box start={4} colEnd={6} color="primary">
              <h3>Hello Random Box</h3>
            </Box>
            <Box start={2} colEnd={6} color="danger">
              <h3>Hello Danger Box</h3>
            </Box>
          </>
        </Grid>
        <Flex w={100} h={100} justifyContent="space-evenly" alignItems="center">
          <>
            <Box m={5} flex={1} w={50} h={20} color="primary">
              <h3>Hello Primary Box</h3>
            </Box>
            <Box m={5} flex={2} w={50} h={20} color="success">
              <h3>Hello Success Box</h3>
            </Box>
            <Box m={5} flex={1} w={50} h={20}>
              <h3>Hello Random Box</h3>
            </Box>
            <Box m={5} flex={2} w={50} h={20} color="danger">
              <h3>Hello Danger Box</h3>
            </Box>
            <Box m={5} flex={1} w={50} h={20} color="warning">
              <h3>Hello Warning Box</h3>
            </Box>
          </>
        </Flex>
        <div className="box-container">
          <Box w={15} h={25} color="primary">
            <Flex
              w={100}
              h={100}
              flexDirection="column"
              justifyContent="space-evenly"
              alignItems="center"
            >
              <>
                <h3>Hello Primary Box</h3>
                <Button color="warning" text="Warning" />
              </>
            </Flex>
          </Box>
          <Box w={10} h={20} color="success">
            <h3>Hello Success Box</h3>
          </Box>
          <Box w={10} h={20}>
            <h3>Hello Random Box</h3>
          </Box>
          <Box w={10} h={20} color="danger">
            <h3>Hello Danger Box</h3>
          </Box>
          <Box w={10} h={20} color="warning">
            <h3>Hello Warning Box</h3>
          </Box>
        </div>
        <div className="alert-container">
          <Alert
            type="primary"
            text="This is a primary alert — check it out!"
          />
          <Alert
            type="success"
            text="This is a success alert — check it out!"
          />
          <Alert type="danger" text="This is a danger alert — check it out!" />
          <Alert
            type="warning"
            text="This is a warning alert — check it out!"
          />
        </div>
        <div className="button-container">
          <Button
            style={{ backgroundColor: "cyan" }}
            text="Primary"
            onClick={() => alert("button clicked")}
          />
          <Button color="success" text="Success" />
          <Button color="danger" text="Danger" />
          <Button color="warning" text="Warning" />
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
