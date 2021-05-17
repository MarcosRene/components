import { RefObject } from 'react';

export type ModalProps = {
  children: React.ReactNode;
};

export type ModalContextData = {
  showModal: boolean;
  addModal: () => void;
  removeModal: () => void;
  modal: RefObject<HTMLDivElement>;
};
