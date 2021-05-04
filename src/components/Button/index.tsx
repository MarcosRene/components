import { ButtonHTMLAttributes, PropsWithChildren } from 'react';
import cx from 'classnames';

import styles from './styles.module.scss';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant: string;
  size: string;
  isLoading?: boolean;
};

export const Button = (props: PropsWithChildren<ButtonProps>) => {
  const { className, variant, size, isLoading, children, ...rest } = props;

  const _className = cx(className, styles.btn, styles[variant], styles[size]);

  return (
    <button className={_className} {...rest}>
      {children}
    </button>
  );
};

Button.defaultProps = {
  type: 'button',
  onClick: () => null,
  disabled: false,
  variant: 'basic',
  outline: 'border',
};
