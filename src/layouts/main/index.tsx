import React from "react";
import {Grid} from "@material-ui/core";
import {Header} from "./components/header";

export const Main: React.FC = (props) => {
  const {children} = props;
  return (
    <Grid direction="column">
      <Header/>
      {children}
    </Grid>
  );
}
