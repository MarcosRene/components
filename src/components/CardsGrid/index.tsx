import { HTMLAttributes, PropsWithChildren } from 'react';

import './styles.scss';

type CardsGridProps = HTMLAttributes<HTMLElement> & {};

export const CardsGrid = ({ children }: PropsWithChildren<CardsGridProps>) => {
  return <ul className="grid">{children}</ul>;
};
