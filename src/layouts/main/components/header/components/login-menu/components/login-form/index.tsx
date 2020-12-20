import React from "react";
import {Button, Grid, TextField} from "@material-ui/core";
import {createStyles, makeStyles} from "@material-ui/core/styles";
import {useForm} from "react-hook-form";
import {useUserStore} from "../../../../../../../../stores/useAllStores";
import {PizzaAPI} from "../../../../../../../../API/PizzaAPI";

const useStyles = makeStyles(() =>
  createStyles({
    container: {
      padding: '1rem'
    },
    buttonContainer: {
      marginTop: '1rem',
    },
    button: {
      padding: '0.5rem 1rem',
    }
  }),
);

export interface ILoginFormProps {
  handleClose: () => void;
}

export const LoginForm: React.FC<ILoginFormProps> = ({handleClose}) => {
  const classes = useStyles();
  const {register, handleSubmit} = useForm();
  const userStore = useUserStore();

  const onSubmit = async (data: any) => {
    const token = await PizzaAPI.login(data);
    userStore.setToken(token);
    handleClose();
  };
  return (
      <form noValidate
            onSubmit={handleSubmit(onSubmit)}
            className={classes.container}
      >
        <Grid direction="column" container >
          <TextField
            label="Логин"
            margin="dense"
            name="username"
            required
            variant="outlined"
            inputRef={register}
          />
          <TextField
            type="password"
            label="Пароль"
            margin="dense"
            name="password"
            required
            variant="outlined"
            inputRef={register}
          />
          <Grid className={classes.buttonContainer}>
            <Button type="submit"
                    className={classes.button}
                    variant={"contained"}
                    color={"primary"}
            >
              Войти
            </Button>
          </Grid>
        </Grid>
      </form>


  );
}
