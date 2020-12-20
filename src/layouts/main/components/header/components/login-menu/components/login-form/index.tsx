import React from "react";
import {Button, Grid, TextField} from "@material-ui/core";
import {createStyles, makeStyles} from "@material-ui/core/styles";
import {useForm} from "react-hook-form";

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

export const LoginForm: React.FC = () => {
  const classes = useStyles();
  const {register, handleSubmit} = useForm();
  return (
      <form noValidate
            onSubmit={handleSubmit((data) => {alert(JSON.stringify(data))})}
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
