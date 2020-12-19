import React from "react";
import {Grid} from "@material-ui/core";
import {Header} from "./components/header";
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      maxWidth: '1280px',
      margin: '0 auto',
    }
  }),
);

export const Main: React.FC = (props) => {
  const {children} = props;
  const classes = useStyles();
  return (
    <Grid direction="column" className={classes.container}>
      <Header/>
      {children}
    </Grid>
  );
}
