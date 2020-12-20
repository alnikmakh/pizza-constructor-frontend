import React from "react";
import {Popover} from "@material-ui/core";
import {LoginButton} from "./components/login-button";
import {bindPopover, bindTrigger, usePopupState} from "material-ui-popup-state/hooks";
import {LoginForm} from "./components/login-form";

export interface ILoginMenuProps {

}

export const LoginMenu: React.FC<ILoginMenuProps> = (props) => {
  const popupState = usePopupState({
    variant: 'popover',
    popupId: 'loginPopover',
  });
  return (
    <>
      <LoginButton {...bindTrigger(popupState)}/>
      <Popover
        {...bindPopover(popupState)}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <LoginForm handleClose={popupState.close}/>
      </Popover>
    </>
  );
}
