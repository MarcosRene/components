import { FiClock } from 'react-icons/fi';
import { ButtonDropdown } from './ButtonDropdown';
import { Badge } from '../Badge';

import avatar from '@assets/avatar.jpg';
import './styles.scss';
import { Button } from '@components/Button';

const Header = () => {
  return (
    <div className="container-header">
      <Badge className="badge-header" border="rounded-pill">
        <FiClock size={20} color="#ffffff" />2 dias
        <div className="test__days">
          <div className="test__days-notifications">
            <div className="notification-header">
              <span>Seu teste expira em 10 dias</span>
            </div>
            <Button variant="primary">Ativar assinatura</Button>
          </div>
        </div>
      </Badge>

      <div className="profile">
        <img src={avatar} alt="Avatar" />
      </div>
      <ButtonDropdown />
    </div>
  );
};

export default Header;
