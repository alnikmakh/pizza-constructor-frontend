import React from "react";
import {Button, Grid} from "@material-ui/core";
import {Header} from "./components/header";
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";
import {NavLink, useLocation} from "react-router-dom";
import {useUserStore} from "../../stores/useAllStores";

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
  const location = useLocation();
  const userStore = useUserStore();

  return (
    <Grid direction="column" className={classes.container} container>
      <Header/>
      {children}
      <Grid>
        {userStore.token && location.pathname !== "/list" ?
          <Button
            variant={"outlined"}
            color={"primary"}
            component={NavLink}
            to="/list"
          >
            Посмотреть все пиццы
          </Button> :
          null}
      </Grid>
    </Grid>
  );
}
