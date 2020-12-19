import React from "react";
import {IconButton, Toolbar, Typography} from "@material-ui/core";
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import {Person} from '@material-ui/icons';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    toolbarTitle: {
      flex: 1,
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
        <IconButton>
          <Person/>
        </IconButton>
      </Toolbar>
    </>
  );
}
