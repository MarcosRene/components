import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

import { DROP_DOWN_ANIMATION } from './animations';
import './styles.scss';

import { GENERAL_PROFILE } from '../constants';

export const DropDownCard = () => {
  const dropdownRef = useRef<HTMLDivElement>(null);

  return (
    <motion.div
      variants={DROP_DOWN_ANIMATION}
      initial="hidden"
      animate="visible"
      exit="hidden"
      ref={dropdownRef}
      className="dropdowncard"
    >
      {Object.entries(GENERAL_PROFILE).map(([title, { path, icon: Icon }]) => (
        <div className="dropdowncard-content">
          <Link to={path}>
            <span>{title}</span>
            <Icon size={20} />
          </Link>
        </div>
      ))}
    </motion.div>
  );
};
