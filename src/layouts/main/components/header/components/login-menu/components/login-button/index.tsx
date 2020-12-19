import React from "react";
import {ExitToApp, Person} from "@material-ui/icons";
import {IconButton} from "@material-ui/core";
import {useUserStore} from "../../../../../../../../stores/useAllStores";

export const LoginButton: React.FC = ({...rest}) => {
  const userStore = useUserStore();

  return (
    <>
      <IconButton {...rest}>
        {userStore.token ?
          <ExitToApp/> :
          <Person/>
        }
      </IconButton>
    </>
  );
}
