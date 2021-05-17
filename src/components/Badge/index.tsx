import { HTMLAttributes, PropsWithChildren } from 'react';
import cx from 'classnames';

import styles from './styles.module.scss';

type BadgeProps = HTMLAttributes<HTMLDivElement> & {
  border: 'rounded-semi' | 'rounded-pill';
  type: 'success' | 'error' | 'warning' | 'dark';
};

export const Badge = (props: PropsWithChildren<BadgeProps>) => {
  const { children, className, border, type } = props;

  const _className = cx(className, styles.badge, styles[border], styles[type]);

  return <div className={_className}>{children}</div>;
};

Badge.defaultProps = {
  border: 'rounded-semi',
  type: '',
};
