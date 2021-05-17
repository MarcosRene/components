import React from 'react';
import { Route as ReactRoute, Redirect, RouteProps } from 'react-router-dom';

import { DefaultLayout } from '@pages/_layouts/default';
import { Auth } from '@pages/_layouts/auth';

interface RoutesProps extends RouteProps {
  component: React.ComponentType;
  isPrivate?: boolean;
}

function Route({ isPrivate, component: Component, ...res }: RoutesProps) {
  if (isPrivate) {
    <Redirect to="/dashboard" />;
  }

  if (!isPrivate) {
    <Redirect to="/" />;
  }

  const Layout = isPrivate ? DefaultLayout : Auth;

  return (
    <ReactRoute
      {...res}
      render={() => {
        return (
          <Layout>
            <Component />
          </Layout>
        );
      }}
    />
  );
}

export default Route;
