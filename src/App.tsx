import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import {CssBaseline} from "@material-ui/core";
import {StoreProvider} from './stores/AllStoresProvider';
import {Router} from "./Router";
import {ThemeProvider} from "@material-ui/styles";
import {theme} from "./theme";

export const App = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline/>
        <BrowserRouter>
          <StoreProvider>
            <Router/>
          </StoreProvider>
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
}
