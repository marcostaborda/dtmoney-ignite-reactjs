import { createContext, ReactNode, useEffect, useState } from 'react'
import { api } from '../services/api'
interface TransactionsData {
  id: number
  title: string
  value: number
  category: string
  type: string
  createdAt: string
}
// interface TransactionInput {
//   title: string;
//   amount: number;
//   type: string;
//   category: string;
// }
type TransactionInput = Omit<TransactionsData, 'id' | 'createdAt'>
interface TransactionsProviderProps {
  children: ReactNode
}
interface TransactionContextData {
  transactions: TransactionsData[],
  createTransaction: (transaction: TransactionInput) => void;
}

export const TransactionsContext = createContext<TransactionContextData>({} as TransactionContextData)

export function TransactionsProvider({ children }: TransactionsProviderProps) {
  const [transactions, setTransactions] = useState<TransactionsData[]>([])

  useEffect(() => {
    api.get('transactions').then(res => {
      setTransactions(res.data.transactions)
    })
  }, [])

  function createTransaction(transaction: TransactionInput) {

    api.post('/transactions', transaction);
  }

  return (
    <TransactionsContext.Provider value={{ transactions, createTransaction }}>{children}</TransactionsContext.Provider>
  )
}