/* eslint-disable jsx-a11y/anchor-is-valid */

import { IconType } from 'react-icons/lib';

import './styles.scss';

type MenuEntryProps = {
  title: string;
  icon: IconType;
};

const MenuEntry = ({ title, icon: Icon }: MenuEntryProps) => (
  <div className="list__item">
    <a href="#" className="list__item-link">
      <Icon size={20} color="#fff" />
      <span className="list__item-title">{title}</span>
    </a>
  </div>
);

export default MenuEntry;
