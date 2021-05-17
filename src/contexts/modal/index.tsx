import {
  useState,
  useEffect,
  useRef,
  useCallback,
  createContext,
  useContext,
} from 'react';

import { ModalProps, ModalContextData } from './types';

const ModalContext = createContext({} as ModalContextData);

export function ModalProvider({ children }: ModalProps) {
  const modal = useRef<HTMLDivElement>(null);
  const [showModal, setShowModal] = useState(false);

  const addModal = () => setShowModal(true);
  const removeModal = () => setShowModal(false);

  const handleKeyUp = useCallback((event) => {
    if (event.keyCode === 27) {
      removeModal();
      window.removeEventListener('keyup', handleKeyUp, false);
    }
  }, []);

  const handleOutsideClick = useCallback((event) => {
    if (modal.current === event.target) {
      removeModal();
      document.removeEventListener('click', handleOutsideClick, false);
    }
  }, []);

  useEffect(() => {
    window.addEventListener('keyup', handleKeyUp, false);
    document.addEventListener('click', handleOutsideClick, false);

    return () => {
      window.removeEventListener('keyup', handleKeyUp, false);
      document.removeEventListener('click', handleOutsideClick, false);
    };
  }, [handleKeyUp, handleOutsideClick, showModal]);

  return (
    <ModalContext.Provider value={{ showModal, addModal, removeModal, modal }}>
      {children}
    </ModalContext.Provider>
  );
}

export function useModal() {
  const context = useContext(ModalContext);

  if (!context) {
    throw new Error('useModal must be used within a ModalProvider');
  }

  return context;
}
