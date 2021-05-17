import { PropsWithChildren } from 'react';
import Header from '../Header';

import Sidebar from '../Sidebar';

import './styles.scss';

export const Layout = ({ children }: PropsWithChildren<any>) => {
  return (
    <div className="container">
      <Sidebar />
      <main>
        <Header />
        {children}
      </main>
    </div>
  );
};
