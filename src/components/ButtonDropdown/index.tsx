import { MdKeyboardArrowDown as ArrowDown } from 'react-icons/md';
import { DropDownCard } from './DropDownCard';

import { useToggle } from '@hooks/useToggle';

import './styles.scss';

export const ButtonDropdown = () => {
  const [open, setOpen] = useToggle(false);

  return (
    <div className="dropdown">
      <button className="arrow-down" onClick={setOpen}>
        <ArrowDown color="#ffffff" size={20} />
      </button>
      {open && <DropDownCard />}
    </div>
  );
};
