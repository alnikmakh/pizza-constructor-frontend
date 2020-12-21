import React, {useEffect, useState} from "react";
import {Grid, Typography} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import {IPizzaResponseDTO, PizzaCard} from "./components/pizza-card";
import {PizzaAPI} from "../../API/PizzaAPI";

const useStyles = makeStyles({
  mTop: {
    marginTop: '1rem',
  }
});

export const PizzaListPage: React.FC = () => {
  const classes = useStyles();
  const [pizzas, setPizzas] = useState<IPizzaResponseDTO[]>([]);
  useEffect(() => {
    if (pizzas.length === 0) {
      const fetchPizzas = async () => {
        const result = await PizzaAPI.getPizzas();
        setPizzas(result);
        console.log(result);
      }

      fetchPizzas();
    }
  }, []);
  return (
    <>
      <Typography variant="h5">
        Список пицц
      </Typography>
      <Grid className={classes.mTop} container direction="row" spacing={3}>
        {pizzas && pizzas.map((el, i) => {
          return (
            <Grid xs={4} item>
              <PizzaCard pizzaEl={el} key={el.name + i}/>
            </Grid>
          );
        })}
      </Grid>
    </>
  );
}
