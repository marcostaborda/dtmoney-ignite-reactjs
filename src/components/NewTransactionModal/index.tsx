import Modal from 'react-modal';
import { Container } from './styles';

interface NewTransactionModalProps {
  onCloseRequestModal : () => void;
  isOpenModal: boolean;
}

Modal.setAppElement("#root");

export function NewTransactionModal({ isOpenModal, onCloseRequestModal  }: NewTransactionModalProps) {
  return (
    <Modal 
      isOpen={isOpenModal} 
      onRequestClose={onCloseRequestModal}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <Container> 
        <h2>Cadastrar Transação</h2>
        <input type="text" placeholder="Título"/>
        <input type="text" placeholder="Valor"/>
        <input type="text" placeholder="Categoria"/>
        <button type="submit">
          Cadastrar
        </button>
      </Container>
    </Modal>
  )
}