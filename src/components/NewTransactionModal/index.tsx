import Modal from 'react-modal';

interface NewTransactionModalProps {
  onCloseRequestModal : () => void;
  isOpenModal: boolean;
}

Modal.setAppElement("#root");

export function NewTransactionModal({ isOpenModal, onCloseRequestModal  }: NewTransactionModalProps) {
  return (
    <Modal isOpen={isOpenModal} onRequestClose={onCloseRequestModal}>
      
    </Modal>
  )
}