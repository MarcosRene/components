import React from 'react';
import { Route as ReactRoute, RouteProps } from 'react-router-dom';

import { DefaultLayout as Layout } from '../pages/_layouts/default';

interface RoutesProps extends RouteProps {
  component: React.ComponentType;
  isPrivate?: boolean;
}

function Route({ isPrivate, component: Component, ...res }: RoutesProps) {
  return (
    <ReactRoute
      {...res}
      render={() => {
        return (
          isPrivate === true && (
            <Layout>
              <Component />
            </Layout>
          )
        );
      }}
    />
  );
}

export default Route;
