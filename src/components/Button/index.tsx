import {
  useState,
  useEffect,
  useRef,
  ButtonHTMLAttributes,
  PropsWithChildren,
} from 'react';
import cx from 'classnames';

import { Spinner } from './Spinner';

import styles from './styles.module.scss';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant: 'primary' | 'secondary' | 'outline' | 'link';
  size: 'small' | 'medium' | 'large';
  isLoading?: boolean;
};

export const Button = (props: PropsWithChildren<ButtonProps>) => {
  const refButton = useRef<HTMLButtonElement>(null);

  const { className, variant, size, isLoading, children, ...rest } = props;

  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (refButton.current && refButton.current.getBoundingClientRect().width) {
      setWidth(refButton.current.getBoundingClientRect().width);
    }
    if (refButton.current && refButton.current.getBoundingClientRect().height) {
      setHeight(refButton.current.getBoundingClientRect().height);
    }
  }, [children]);

  const _className = cx(
    styles.btn,
    styles[variant],
    styles[size],
    `${isLoading}` ? { width, height } : {}
  );

  return (
    <button
      {...rest}
      ref={refButton}
      className={_className}
      style={
        isLoading
          ? {
              width,
              height,
            }
          : {}
      }
    >
      {isLoading ? <Spinner /> : children}
    </button>
  );
};

Button.defaultProps = {
  type: 'button',
  onClick: () => null,
  disabled: false,
  variant: 'basic',
  size: 'medium',
  isLoading: false,
};
