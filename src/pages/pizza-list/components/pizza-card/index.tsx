import React from "react";
import {Card, CardContent, CardMedia, Typography} from "@material-ui/core";
import pizza from "../../assets/pizza-small.png";
import {makeStyles} from "@material-ui/core/styles";
import {IPizzaDTO} from "../../../../API/DTO/pizzaDTO";

interface IPizzaCardProps {
  pizzaEl: IPizzaDTO;
}

const useStyles = makeStyles({
  mTop: {
    marginTop: '1rem',
  },
  media: {
    height: 140,
  },
});

export const PizzaCard: React.FC<IPizzaCardProps> = ({pizzaEl}) => {
  const classes = useStyles();

  return (
    <Card>
      <CardMedia image={pizza}
                 className={classes.media}
      />
      <CardContent>
        <Typography variant="h6">
          {pizzaEl.name}
        </Typography>
        <Typography variant="body2" className={classes.mTop}>
          {pizzaEl.ingredients.join(", ")}
        </Typography>
      </CardContent>
    </Card>
  );
}
