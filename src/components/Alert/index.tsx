import { HTMLAttributes, PropsWithChildren } from 'react';
import cx from 'classnames';

import styles from './styles.module.scss';

type AlertProps = HTMLAttributes<HTMLDivElement> & {
  alert: 'success' | 'error';
};

export const Alert = (props: PropsWithChildren<AlertProps>) => {
  const { className, alert, children } = props;

  const _className = cx(className, styles.alert, styles[alert]);
  return <div className={_className}>{children}</div>;
};

Alert.defaultProps = {
  alert: '',
};
