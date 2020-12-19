import React from 'react';
import {Route, RouteProps} from 'react-router-dom';
import {ROLES} from "../../../constants";
import {Login} from "../../../pages/login";

interface Props extends RouteProps {
  layout: React.FC;
  component: React.FC;
  role: string;
  token: string | undefined;
}

export const RouteWithLayout: React.FC<Props> = ({
                                                   layout: Layout,
                                                   component: Component,
                                                   role,
                                                   token,
                                                   ...rest
                                                 }: Props) => {

  return (
    <Route
      {...rest}
      render={() => {
        switch (role) {

          case ROLES.admin:
            if (token) {
              return (
                <Layout>
                  <Component/>
                </Layout>
              );
            } else {
              return (
                <>
                  <Layout>
                    <Login/>
                  </Layout>

                </>
              );
            }

          case ROLES.user:
            return (
              <Layout>
                <Component/>
              </Layout>
            );
        }
      }}
    />
  );
};
