import { createContext, ReactNode, useContext, useEffect, useState } from 'react'
import { api } from '../services/api'
interface TransactionsData {
  id: number
  title: string
  amount: number
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
  createTransaction: (transaction: TransactionInput) => Promise<void>;
}

const TransactionsContext = createContext<TransactionContextData>({} as TransactionContextData)

export function TransactionsProvider({ children }: TransactionsProviderProps) {
  const [transactions, setTransactions] = useState<TransactionsData[]>([])

  useEffect(() => {
    api.get('transactions').then(res => {
      setTransactions(res.data.transactions)
    })
  }, [])

  async function createTransaction(transactionInput: TransactionInput) {
    const response = await api.post('transactions', {
      ...transactionInput, createdAt: new Date()
    })

    const { transaction } = response.data

    setTransactions([...transactions, transaction])
  }

  return (
    <TransactionsContext.Provider value={{ transactions, createTransaction }}>{children}</TransactionsContext.Provider>
  )
}

export function useTransactions() {
  const context = useContext(TransactionsContext)

  return context
}