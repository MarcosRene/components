import { PropsWithChildren } from 'react';

import Sidebar from '../Sidebar';

import './styles.scss';

export const Layout = ({ children }: PropsWithChildren<any>) => {
  return (
    <div className="container">
      <Sidebar />
      <main>{children}</main>
    </div>
  );
};
