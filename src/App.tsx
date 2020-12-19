import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import {CssBaseline} from "@material-ui/core";
import {StoreProvider} from './stores/AllStoresProvider';
import {Router} from "./Router";

export const App = () => {
  return (
    <>
      <CssBaseline/>
      <BrowserRouter>
        <StoreProvider>
          <Router/>
        </StoreProvider>
      </BrowserRouter>
    </>
  );
}
