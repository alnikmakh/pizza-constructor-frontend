import React from "react";
import {pizzas} from "./mock";
import {Grid, Typography} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import {PizzaCard} from "./components/pizza-card";

const useStyles = makeStyles({
  mTop: {
    marginTop: '1rem',
  },
});

export const PizzaListPage: React.FC = () => {
  const classes = useStyles();
  return (
    <>
      <Typography variant="h5">
        Список пицц
      </Typography>
      <Grid xs={3} className={classes.mTop}>
        {pizzas.map((el, i) => {
          return (
            <PizzaCard pizzaEl={el} key={el.name + i}/>
          );
        })}
      </Grid>
    </>
  );
}
