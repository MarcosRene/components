/* eslint-disable react-hooks/exhaustive-deps */
import { GiHamburgerMenu as Hamburger } from 'react-icons/gi';
import { RiCloseFill as Close } from 'react-icons/ri';

import { useToggle } from '@hooks/useToggle';

import { GENERAL_MENU, SETTINGS_MENU } from './constants';
import MenuEntry from './MenuEntry';

import './styles.scss';

const Sidebar = () => {
  const [isShowSidebar, setIsShowSidebar] = useToggle(false);

  return (
    <>
      <button type="button" className="hamburger" onClick={setIsShowSidebar}>
        <Hamburger size={20} color="#ffffff" />
      </button>
      <div className={`${isShowSidebar && 'sidebar-overlay'}`}>
        <aside
          className={`${isShowSidebar ? 'sibebar-hidden' : 'sidebar-active'}`}
        >
          <button
            type="button"
            className="hamburger-sidebar"
            onClick={setIsShowSidebar}
          >
            <Close size={24} color="#ffffff" />
          </button>
          <div className="box__menu">
            <span className="box__menu-title">Geral</span>
            <div className="box__menu-list">
              {Object.entries(GENERAL_MENU).map(([title, { path, icon }]) => (
                <MenuEntry key={title} title={title} path={path} icon={icon} />
              ))}
            </div>
            <span className="box__menu-title">Sobre</span>
            <div className="box__menu-list">
              {Object.entries(SETTINGS_MENU).map(([title, { path, icon }]) => (
                <MenuEntry key={title} title={title} path={path} icon={icon} />
              ))}
            </div>
          </div>
        </aside>
      </div>
    </>
  );
};

export default Sidebar;
