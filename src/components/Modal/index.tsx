import { HTMLAttributes, PropsWithChildren } from 'react';
import { FiX } from 'react-icons/fi';

import { useModal } from '../../contexts/modal';

import './styles.scss';

type ModalProps = HTMLAttributes<HTMLDivElement> & {
  show?: boolean;
};

function Modal(props: PropsWithChildren<ModalProps>) {
  const { show, children } = props;
  const { modal } = useModal();

  return (
    <div ref={modal} className={`modal-overlay ${show ? 'show' : 'hidden'}`}>
      <div className="modal-content">{children}</div>
    </div>
  );
}

Modal.ModalHeader = function ModalHeader(props: PropsWithChildren<ModalProps>) {
  const { show, children } = props;

  const { removeModal } = useModal();

  return (
    <div className="modal-header">
      <span className="modal-title">{!show && children}</span>
      <button className="modal-button" type="button" onClick={removeModal}>
        <FiX size={20} color="#202123" />
      </button>
    </div>
  );
};

Modal.ModalBody = function ModalBody({
  children,
}: PropsWithChildren<ModalProps>) {
  return <div className="modal-body">{children}</div>;
};

Modal.ModalFooter = function ModalFooter({
  children,
}: PropsWithChildren<ModalProps>) {
  return <div className="modal-footer">{children}</div>;
};

export { Modal };
