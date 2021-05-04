import { PropsWithChildren } from 'react';
import { AnimatePresence } from 'framer-motion';

import { ToastProps } from '../../contexts/toast/types';

import Toast from './Toast';

import './styles.scss';

type ToastContainerProps = {
  messages: ToastProps[];
};

export const ToastContainer = (
  props: PropsWithChildren<ToastContainerProps>
) => {
  const { messages } = props;

  return (
    <div className="toast-container">
      <AnimatePresence>
        {messages.map((message) => (
          <Toast key={message.id} message={message} />
        ))}
      </AnimatePresence>
    </div>
  );
};
