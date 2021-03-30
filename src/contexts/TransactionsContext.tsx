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

export const TransactionsContext = createContext<TransactionsData[]>([])

interface TransactionsProviderProps {
  children: ReactNode
}

export function TransactionsProvider({ children }: TransactionsProviderProps) {
  const [transactions, setTransactions] = useState<TransactionsData[]>([])

  useEffect(() => {
    api.get('transactions').then(res => {
      setTransactions(res.data.transactions)
    })
  }, [])

  return (
    <TransactionsContext.Provider value={transactions}>{children}</TransactionsContext.Provider>
  )
}