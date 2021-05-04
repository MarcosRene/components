import { useEffect, PropsWithChildren } from 'react';
import { motion } from 'framer-motion';

import {
  FiAlertTriangle,
  FiCheckCircle,
  FiInfo,
  FiXCircle,
} from 'react-icons/fi';

import { useToast } from '../../../contexts/toast';
import { ToastProps } from '../../../contexts/toast/types';

import './styles.scss';

type ToastMessages = {
  message: ToastProps;
};

const icons = {
  info: <FiInfo size={24} />,
  error: <FiAlertTriangle size={24} />,
  success: <FiCheckCircle size={24} />,
};

const Toast = (props: PropsWithChildren<ToastMessages>) => {
  const { id, type, title, description } = props.message;

  const { removeToast } = useToast();

  useEffect(() => {
    const timer = setTimeout(() => removeToast(id), 4000);

    return () => clearTimeout(timer);
  }, [removeToast, id]);

  return (
    <motion.div
      className="toast"
      style={{
        ...((type === 'error' && { background: '#F83C31' }) ||
          (type === 'success' && { background: '#5CD85A' }) ||
          (type === 'info' && { background: '#2E8BC0' })),
      }}
      key={id}
      layout="position"
      initial={{ x: 364, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{
        x: 364,
        opacity: 0,
        transition: { type: 'spring', duration: 0.45 },
      }}
      transition={{ type: 'spring', duration: 0.6 }}
    >
      {icons[type || 'info']}
      <div>
        <strong>{title}</strong>
        <p>{description}</p>
      </div>
      <button type="button" onClick={() => removeToast(id)}>
        <FiXCircle size={18} />
      </button>
    </motion.div>
  );
};

export default Toast;
