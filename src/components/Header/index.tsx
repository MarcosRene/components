import { FiClock } from 'react-icons/fi';
import { ButtonDropdown } from '../ButtonDropdown';
import { Badge } from '../Badge';

import avatar from '@assets/avatar.jpg';
import './styles.scss';

const Header = () => {
  return (
    <div className="container-header">
      <Badge className="badge-header" border="rounded-pill">
        <FiClock size={20} color="#ffffff" />2 dias
      </Badge>
      <div className="profile">
        <img src={avatar} alt="Avatar" />
      </div>
      <ButtonDropdown />
    </div>
  );
};

export default Header;
