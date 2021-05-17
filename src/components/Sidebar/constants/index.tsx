import { RiContactsLine, RiDashboardLine } from 'react-icons/ri';
import { MdHelpOutline } from 'react-icons/md';

export const GENERAL_MENU = {
  Dashboard: {
    path: '/dashboard',
    icon: RiDashboardLine,
  },
  Usuários: {
    path: '/user',
    icon: RiContactsLine,
  },
};

export const SETTINGS_MENU = {
  Ajuda: {
    path: '/help',
    icon: MdHelpOutline,
  },
};
