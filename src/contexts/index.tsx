import { PropsWithChildren } from 'react';
import { ToastProviderProps } from './toast/types';

import { ToastProvider } from './toast';
import { ModalProvider } from './modal';

const AppProvider = ({ children }: PropsWithChildren<ToastProviderProps>) => (
  <ToastProvider>
    <ModalProvider>{children}</ModalProvider>
  </ToastProvider>
);

export default AppProvider;
