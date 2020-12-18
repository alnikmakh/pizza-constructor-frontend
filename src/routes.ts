import React from "react";
import {ROLES} from "./constants";

export interface IRoute {
  component: React.FC,
  layout: React.FC,
  path: string,
  role: string,
}

export const routes: IRoute[] = [
  {
    component: PizzaListPage,
    layout: Main,
    path: '/list',
    role: ROLES.admin,
  },
  {
    component: PizzaConstructorPage,
    layout: Main,
    path: '/constructor',
    role: ROLES.user,
  }

]
