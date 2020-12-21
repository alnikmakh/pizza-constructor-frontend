import React from "react";
import {Typography} from "@material-ui/core";

export const Forbidden: React.FC = (props) => {
  return (
    <>
      <Typography variant="h5">
        Доступ запрещен. Пожалуйста, авторизуйтесь.
      </Typography>
    </>
  );
}
