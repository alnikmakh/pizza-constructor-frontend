import React from "react";
import {Paper, Toolbar, Typography} from "@material-ui/core";
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import pizza from "../../assets/pizza.jpg";
import {LoginMenu} from "./components/login-menu";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    toolbarTitle: {
      flex: 1,
    },
    mainImg: {
      position: 'relative',
      height: '30rem',
      backgroundColor: theme.palette.grey[800],
      color: theme.palette.common.white,
      marginBottom: theme.spacing(4),
      backgroundImage: `url(${pizza})`,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
    },
  }),
);

export const Header: React.FC = (props) => {
  const classes = useStyles();

  return (
    <>
      <Toolbar>
        <Typography
          component="h2"
          variant="h5"
          color="inherit"
          align="center"
          noWrap
          className={classes.toolbarTitle}
        >
          Pizza's Constructor
        </Typography>
        <LoginMenu/>
      </Toolbar>
      <Paper className={classes.mainImg}>
        {<img style={{ display: 'none' }} src={pizza} alt="Pizza"/> }
      </Paper>
    </>
  );
}
