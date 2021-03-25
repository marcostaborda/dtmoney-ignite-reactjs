import logo from '../../assets/logo.svg';
import { Container, Content } from './styles';


interface HeaderProps {
  onOpenModalNewTransactionModal: () => void;
}

export function Header({onOpenModalNewTransactionModal}:HeaderProps) {
  return (
    <Container>
      <Content>
        <img src={logo} alt="dt Money"/>
        <button type="button" onClick={onOpenModalNewTransactionModal}>
          Nova Transação
        </button>
      </Content>
    </Container>
  )
}