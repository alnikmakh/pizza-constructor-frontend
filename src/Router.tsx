import React from 'react';
import {Switch, withRouter} from 'react-router-dom';
import {RouteWithLayout} from './components/common/route-with-layout';
import {routes} from './routes';
import {useUserStore} from "./stores/useAllStores";


const _Router: React.FC = () => {
  const userStore = useUserStore();
  return (
    <Switch>
      {
        routes.map((route) => {
          return (
            <RouteWithLayout
              key={route.path}
              component={route.component}
              exact
              layout={route.layout}
              path={route.path}
              role={route.role}
              token={userStore.token}
            />
          );
        })
      }
    </Switch>
  );
};

export const Router = withRouter(_Router);
