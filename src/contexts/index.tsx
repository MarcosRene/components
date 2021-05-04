import { PropsWithChildren } from 'react';
import { ToastProviderProps } from './toast/types';

import { ToastProvider } from './toast';

const AppProvider = ({ children }: PropsWithChildren<ToastProviderProps>) => (
  <ToastProvider>{children}</ToastProvider>
);

export default AppProvider;
