import { Link as Anchor, LinkProps as AnchoProps } from 'react-router-dom';

import { PropsWithChildren } from 'react';
import cx from 'classnames';

import styles from './styles.module.scss';

type LinkProps = AnchoProps & {
  to: string;
  variant: 'primary' | 'secondary' | 'outline' | 'underline';
  size: 'small' | 'medium' | 'large';
};

export const Link = (props: PropsWithChildren<LinkProps>) => {
  const { to, variant, size, children, className, ...rest } = props;

  const _className = cx(className, styles.link, styles[variant], styles[size]);

  return (
    <Anchor to={to} className={_className} {...rest}>
      {children}
    </Anchor>
  );
};

Link.defaultProps = {
  variant: 'basic',
  size: 'medium',
};
