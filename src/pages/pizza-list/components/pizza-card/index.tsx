import React from "react";
import {Card, CardContent, CardMedia, Typography} from "@material-ui/core";
import pizza from "../../assets/pizza-small.png";
import {makeStyles} from "@material-ui/core/styles";


export interface IPizzaResponseDTO {
  name: string;
  ingredients: {
    name: string;
  }[];
  thickDough: boolean;
}

export interface IPizzaCardProps {
  pizzaEl: IPizzaResponseDTO;
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
          {pizzaEl.ingredients.map((el) => el.name).join(", ")}
        </Typography>
        <Typography variant="body2" className={classes.mTop}>
          Тесто: {pizzaEl.thickDough ? "толстое" : "тонкое"}
        </Typography>
      </CardContent>
    </Card>
  );
}
