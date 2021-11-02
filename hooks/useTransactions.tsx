import { useContext ,createContext, useEffect, useState, ReactNode } from 'react';
import { api } from '../services/api';


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
  transactions: Transaction[];
  transaction: Transaction;
  
}



  


interface TransactionsProviderProps {
  children: ReactNode
}

interface TransactionsContextData {
 transactions: Transaction[];
  createTransaction: (transaction: TransactionInput) => Promise<void>;
}









const TransactionsContext = createContext<TransactionsContextData>(
  {} as TransactionsContextData
  );



export function TransactionsProvider({children}:TransactionsProviderProps) {
  const [transactions, setTransactions] = useState<Transaction[]>([])

  useEffect(() => {
    api.get<ResponseData>('transactions').then(response => {
      const { transactions } = response.data;
      setTransactions(transactions)
    })
  }, []);

  async function createTransaction(transactionInput: TransactionInput) {

    const response = await api.post<ResponseData>('/transactions', {
      ...transactionInput,
      createdAt: new Date(),
    })
    console.log(response.data)
    const { transaction } = response.data 
    setTransactions([...transactions, transaction,]);
   }


  return (
    <TransactionsContext.Provider
     value={{transactions, createTransaction}}>
        {children}
    </TransactionsContext.Provider>
  )
}

export function useTransactions() {
  const context = useContext(TransactionsContext)

  return context
}