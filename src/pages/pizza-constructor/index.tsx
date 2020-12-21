import React, {useEffect, useState} from "react";
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
import {PizzaAPI} from "../../API/PizzaAPI";
import {IIngredientDTO} from "../../API/DTO/ingredientDTO";
import {IPizzaDTO} from "../../API/DTO/pizzaDTO";
import {observer} from "mobx-react";

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
    radioContainer: {
      maxWidth: '15rem',
    },
  }),
);


export const PizzaConstructorPage: React.FC = observer((props) => {
  const classes = useStyles();
  const {register, handleSubmit, control, reset, getValues} = useForm({
    defaultValues: {
      dough: "thick",
      ingredients: [""],
    }
  });
  const [ingredients, setIngredients] = useState<IIngredientDTO[]>([]);

  useEffect(() => {
    if (ingredients.length === 0) {
      const fetchIngredients = async () => {
        const result = await PizzaAPI.getIngredients();
        setIngredients(result);
      }
      fetchIngredients();
    }
  }, []);

  const onSubmit = (data: IPizzaDTO) => {
    const checkedIngredients = data.ingredients.filter(el => !!el);
    PizzaAPI.createPizza({
      name: data.name,
      ingredients: checkedIngredients,
      dough: data.dough,
    });
    reset()
  }

  const handleCheck = (checkedId: string) => {
    const { ingredients: ids } = getValues();
    const newIds = ids?.includes(checkedId)
      ? ids?.filter((id) => id !== checkedId)
      : [...(ids ?? []), checkedId];
    return newIds;
  };

  return (
    <>
      <Typography variant="h5">
        Создайте новую пиццу:
      </Typography>
    <form noValidate
          onSubmit={handleSubmit(onSubmit)}
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
        <Grid item className={classes.radioContainer}>
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
              <Controller
                name="ingredients"
                control={control}
                render={(props) => (
                  <>
                  {ingredients && ingredients.map((item, i) => (
                    <FormControlLabel
                      key={item.name}
                      control={
                        <Checkbox
                          onChange={() => {
                            props.onChange(handleCheck(item.name))
                          }}
                          checked={props.value.includes(item.name)}
                        />
                      }
                      label={item.name}
                    />
                  ))}
                  </>
                )}
              />
            </div>
          </FormGroup>
        </Grid>
        <Grid item container direction="row">
          <Grid item>
            <Button type="submit"
                    variant={"contained"}
                    color={"primary"}
            >
              Создать
            </Button>
          </Grid>

        </Grid>
      </Grid>

    </form>

    </>
  );
})
