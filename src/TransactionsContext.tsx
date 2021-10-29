import { createContext, useEffect, useState, ReactNode } from 'react';
import { api } from './services/api';


interface Transaction {
  id: number;
  title: string;
  amount: number;
  type: string;
  category: string;
  createdAt: string;
  
}

interface ResponseData {
  transactions: Transaction[]
}

interface TransactionsProviderProps {
  children: ReactNode
}

export const TransactionsContext = createContext<Transaction[]>([]);



export function TransactionsProvider({children}:TransactionsProviderProps) {
  const [transactions, setTransactions] = useState<Transaction[]>([])

  useEffect(() => {
    api.get('transactions').then(response => {
      const { transactions } = response.data as ResponseData;
      setTransactions(transactions)
    })
  }, []);

  return (
    <TransactionsContext.Provider value={transactions}>
        {children}
    </TransactionsContext.Provider>
  )
}

