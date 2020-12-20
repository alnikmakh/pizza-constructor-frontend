import React from "react";
import {useForm, Controller} from "react-hook-form";
import {
  Button,
  Checkbox,
  FormControlLabel,
  FormGroup,
  FormLabel,
  Grid,
  Radio,
  RadioGroup,
  TextField, Typography
} from "@material-ui/core";
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";
import {toppings} from "./mock";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      padding: '1rem'
    },
    buttonContainer: {
      marginTop: '1rem',
    },
    button: {
      padding: '0.5rem 1rem',
    },
    checkboxesContainer: {
      display: 'flex',
      flexDirection: 'column',
      flexWrap: 'wrap',
      maxHeight: '8rem',
    },
  }),
);


export const PizzaConstructorPage: React.FC = (props) => {
  const classes = useStyles();
  const {register, handleSubmit, control} = useForm({
    defaultValues: {
      dough: "thick"
    }
  });

  return (
    <>
      <Typography variant="h5">
        Создайте новую пиццу:
      </Typography>
    <form noValidate
          onSubmit={handleSubmit((data) => {alert(JSON.stringify(data))})}
          className={classes.container}
    >
      <Grid direction="column" container spacing={4}>
        <Grid item>
          <TextField
            label="Название пиццы"
            margin="dense"
            name="name"
            required
            variant="outlined"
            inputRef={register}
          />
        </Grid>
        <Grid item>
          <FormLabel>
            Выберите тип теста
          </FormLabel>
          <Controller as={RadioGroup} control={control} name="dough" value="thick">
            <FormControlLabel value="thick" control={<Radio/>} label="Толстое" />
            <FormControlLabel value="thin" control={<Radio/>} label="Тонкое" />
          </Controller>
        </Grid>
        <Grid item>
          <FormGroup>
            <FormLabel>
              Выберите ингредиенты
            </FormLabel>
            <div className={classes.checkboxesContainer}>
              {toppings.map((el, i) => {
                return (
                  <FormControlLabel key={el}
                                    control={<Checkbox name={`ingredients[${i}]`}
                                                       inputRef={register}
                                                       value={el}/>}
                                    label={el}/>
                );
              })}
            </div>
          </FormGroup>
        </Grid>
        <Grid item>
          <Button type="submit"
                  variant={"contained"}
                  color={"primary"}
          >
            Создать
          </Button>
        </Grid>
      </Grid>

    </form>
    </>
  );
}
