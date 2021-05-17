import { useEffect, PropsWithChildren } from 'react';
import cx from 'classnames';
import { motion } from 'framer-motion';

import {
  FiAlertTriangle,
  FiCheckCircle,
  FiInfo,
  FiXCircle,
} from 'react-icons/fi';

import { useToast } from '../../../contexts/toast';
import { ToastProps } from '../../../contexts/toast/types';

import styles from './styles.module.scss';

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
    const timer = setTimeout(() => removeToast(id), 3800);

    return () => clearTimeout(timer);
  }, [removeToast, id]);

  const _className = cx(styles.toast, styles[type]);

  return (
    <motion.div
      className={_className}
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
      {icons[type]}
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

Toast.defaultProps = {
  type: 'info',
};

export default Toast;
