import { useState, createContext, useCallback, useContext } from 'react';
import { nanoid } from 'nanoid';
import { ToastContainer } from '../../components';

import { ToastContextData, ToastProps, ToastProviderProps } from './types';

const ToastContext = createContext<ToastContextData>({} as ToastContextData);

export const ToastProvider = ({ children }: ToastProviderProps) => {
  const [messages, setMessages] = useState<ToastProps[]>([]);

  const addToast = useCallback(
    ({ type, title, description }: Omit<ToastProps, 'id'>) => {
      const id = nanoid();

      const toast = {
        id,
        type,
        title,
        description,
      };

      setMessages((state) => [...state, toast]);
    },
    []
  );

  const removeToast = useCallback((id: string) => {
    setMessages((state) => state.filter((message) => message.id !== id));
  }, []);

  return (
    <ToastContext.Provider value={{ addToast, removeToast }}>
      {children}
      <ToastContainer messages={messages} />
    </ToastContext.Provider>
  );
};

export function useToast() {
  const context = useContext(ToastContext);

  if (!context) {
    throw new Error('useToast must be used within a ToastProvider');
  }

  return context;
}
