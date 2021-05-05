/* eslint-disable jsx-a11y/anchor-is-valid */
import { NavLink } from 'react-router-dom';
import { IconType } from 'react-icons/lib';

import './styles.scss';

type MenuEntryProps = {
  title: string;
  icon: IconType;
};

const MenuEntry = ({ title, icon: Icon }: MenuEntryProps) => {
  return (
    <div className="list__item">
      <NavLink
        to="/dashboard"
        exact
        activeClassName="active"
        className="list__item-link"
      >
        <Icon size={20} color="#fff" />
        <span className="list__item-title">{title}</span>
      </NavLink>
    </div>
  );
};

export default MenuEntry;
