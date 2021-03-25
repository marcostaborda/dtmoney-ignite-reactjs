import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { Container } from "./styles";

interface TransactionsData {
  id: number;
  title: string;
  value: number;
  category: string;
  type: string;
  createdAt: Date;
}

export function TransactionsTable() {
  const [transactions, setTransactions] = useState<TransactionsData[]>([]);

  useEffect(() => {
    api.get('transactions').then(res => {
      setTransactions(res.data.transactions);
    });
  }, [])

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>

        <tbody>
          {transactions.map(transaction => (
            <tr key={transaction.id}>
              <td className="title-table">{transaction.title}</td>
              <td className={transaction.type}>R$ {transaction.value}</td>
              <td>{transaction.category}</td>
              <td>{transaction.createdAt}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Container>
  )
}