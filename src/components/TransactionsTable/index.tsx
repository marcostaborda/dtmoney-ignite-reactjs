import { Container } from "./styles";

export function TransactionsTable() {
  return ( 
    <Container>
      <table>
        <thead>
            <th>Título</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
        </thead>

        <tbody>
          <tr>
            <td className="title-table">Desenvolvimento de WebSite</td>
            <td className="deposit">R$ 12.000</td>
            <td>Desenvolvimento</td>
            <td>10/02/2021</td>
          </tr>

          <tr>
            <td className="title-table">Aluguel</td>
            <td className="with-draw"> - R$ 12.000</td>
            <td>Casa</td>
            <td>10/02/2021</td>
          </tr>

          <tr>
            <td className="title-table">Desenvolvimento de WebSite</td>
            <td className="deposit">R$ 12.000</td>
            <td>Desenvolvimento</td>
            <td>10/02/2021</td>
          </tr>
        </tbody>
      </table>
    </Container>
  )
}