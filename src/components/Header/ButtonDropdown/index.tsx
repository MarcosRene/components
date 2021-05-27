import { useCallback, useRef } from 'react';
import { MdKeyboardArrowDown as ArrowDown } from 'react-icons/md';
import { DropDownCard } from './DropDownCard';

import { useToggle } from '@hooks/useToggle';
import { useEventListener } from '@hooks/useEventListener';

import './styles.scss';

export const ButtonDropdown = () => {
  const [open, setOpen] = useToggle(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleCloseDropdown = useCallback(
    ({ target }: Event): void => {
      if (dropdownRef.current?.contains(target as Node)) {
        return;
      }

      setOpen();
    },
    [setOpen]
  );

  useEventListener('click', handleCloseDropdown, {
    enabled: open,
  });

  return (
    <div className="dropdown">
      <button className="arrow-down" onClick={setOpen}>
        <ArrowDown color="#ffffff" size={20} />
      </button>
      {open && <DropDownCard />}
    </div>
  );
};
