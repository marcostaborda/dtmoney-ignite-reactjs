import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';
import totalImg from '../../assets/total.svg';
import { Container } from "./styles";

export function Summary() {
  return (
    <Container>
      <div>
        <header>
          <span>Entradas</span>
          <img src={incomeImg} alt="Income Icon" />
        </header>
        <strong>
          R$10000
        </strong>
      </div>
      <div>
        <header>
          <span>Saídas</span>
          <img src={outcomeImg} alt="Saída" />
        </header>
        <strong>
          - R$500,00
        </strong>
      </div>
      <div className="highlight-background">
        <header>
          <span>Total</span>
          <img src={totalImg} alt="Total Icon" />
        </header>
        <strong>
          R$500,00
        </strong>
      </div>
    </Container>
  )
}