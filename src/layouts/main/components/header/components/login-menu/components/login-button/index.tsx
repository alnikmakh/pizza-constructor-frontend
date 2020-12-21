import React from "react";
import {ExitToApp, Person} from "@material-ui/icons";
import {IconButton} from "@material-ui/core";
import {useUserStore} from "../../../../../../../../stores/useAllStores";
import {observer} from "mobx-react";
import {useHistory, useLocation} from "react-router-dom";

export const LoginButton: React.FC = observer(({...rest}) => {
  const userStore = useUserStore();
  const history = useHistory();
  const location = useLocation();

  const handleQuit = () => {
    userStore.setToken("");
    history.push(location.pathname);
  }

  return (
    <>
      {userStore.token ?
        <IconButton  onClick={handleQuit}>
          <ExitToApp />
        </IconButton>
         :
        <IconButton {...rest}>
          <Person/>
        </IconButton>
      }

    </>
  );
})
