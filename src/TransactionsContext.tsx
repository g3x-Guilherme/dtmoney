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

//interface TransactionInput {
// title: string;
// amount: number;
// type: string;
// category: string;
//} ou

type TransactionInput = Omit<Transaction, "id" | "createdAt">; 

//type TransactionInput = Pick<Transaction, 'title' | 'amount' | 'id' | 'category'>; ou

interface ResponseData {
  transactions: Transaction[]
}

interface TransactionsProviderProps {
  children: ReactNode
}

interface TransactionsContextData {
 transactions: Transaction[];
  createTransaction: (transaction: TransactionInput) => void;
}

export const TransactionsContext = createContext<TransactionsContextData>(
  {} as TransactionsContextData
  );



export function TransactionsProvider({children}:TransactionsProviderProps) {
  const [transactions, setTransactions] = useState<Transaction[]>([])

  useEffect(() => {
    api.get('transactions').then(response => {
      const { transactions } = response.data as ResponseData;
      setTransactions(transactions)
    })
  }, []);

  function createTransaction(transaction: TransactionInput) {
  
  api.post('/transactions', transaction)
}


  return (
    <TransactionsContext.Provider
     value={{transactions, createTransaction}}>
        {children}
    </TransactionsContext.Provider>
  )
}

