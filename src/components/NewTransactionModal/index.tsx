import { FormEvent, useState } from 'react';
import Modal from 'react-modal';
import {
  Container,
  ButtonCloseModal,
  TransactionTypeContainer,
  RadioBox
} from './styles';

import closeImg from '../../assets/close.svg';
import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';
import { useTransactions } from '../../hooks/useTransactions';

interface NewTransactionModalProps {
  onCloseRequestModal: () => void;
  isOpenModal: boolean;
}

Modal.setAppElement("#root");

export function NewTransactionModal({ isOpenModal, onCloseRequestModal }: NewTransactionModalProps) {
  const { createTransaction } = useTransactions()

  const [type, setType] = useState('deposit')
  const [title, setTitle] = useState('')
  const [category, setCategory] = useState('')
  const [amount, setAmount] = useState(0)

  async function handleCreateNewTransaction(event: FormEvent) {
    event.preventDefault()

    await createTransaction({
      title,
      category,
      amount,
      type
    })

    setTitle('')
    setCategory('')
    setAmount(0)
    setType('deposit')

    onCloseRequestModal()
  }

  return (
    <Modal
      isOpen={isOpenModal}
      onRequestClose={onCloseRequestModal}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <ButtonCloseModal type="button" onClick={onCloseRequestModal} className="button-close-react-modal">
        <img src={closeImg} alt="Sair do modal" />
      </ButtonCloseModal>
      <Container onSubmit={handleCreateNewTransaction}>
        <h2>Cadastrar Transação</h2>
        <input
          type="text"
          placeholder="Título"
          value={title}
          onChange={event => setTitle(event.target.value)}
        />
        <input
          type="number"
          placeholder="Valor"
          value={amount}
          onChange={event => setAmount(Number(event.target.value))}
        />

        <TransactionTypeContainer>
          <RadioBox
            type="button"
            onClick={() => setType('deposit')}
            isActive={type === 'deposit'}
            activeColor="green"
          >
            <img src={incomeImg} alt="Entrada" />
            <span>Entrada</span>
          </RadioBox>
          <RadioBox
            type="button"
            onClick={() => setType('withdraw')}
            isActive={type === 'withdraw'}
            activeColor="red"
          >
            <img src={outcomeImg} alt="Saída" />
            <span>Saída</span>
          </RadioBox>
        </TransactionTypeContainer>

        <input
          type="text"
          placeholder="Categoria"
          value={category}
          onChange={event => setCategory(event.target.value)}
        />
        <button type="submit">
          Cadastrar
        </button>
      </Container>
    </Modal>
  )
}