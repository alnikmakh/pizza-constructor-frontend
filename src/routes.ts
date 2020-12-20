import React from "react";
import {ROLES} from "./constants";
import {Main} from "./layouts/main";
import {PizzaConstructorPage} from "./pages/pizza-constructor";
import {PizzaListPage} from "./pages/pizza-list";

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
    path: '/',
    role: ROLES.user,
  }

]
