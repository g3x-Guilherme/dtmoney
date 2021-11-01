import { useState } from 'react';
import Modal from 'react-modal'; // lib pra usar sempre q for fazer modal, trouxe ela pro app porque n nescessariamente ela pertence ao header e sim a aplicacao
import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { NewTransactionModal } from './components/NewTransactionModal';
import { TransactionsProvider } from './hooks/useTransactions';
import { GlobalStyle } from "./styles/global";

Modal.setAppElement('#root')

export function App() {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false)

  function handleOpenNewTransactionModal() {
    setIsNewTransactionModalOpen(true);
  }

  function handleCloseNewTransactionModal() {
    setIsNewTransactionModalOpen(false);
  }
  
  return (
    <TransactionsProvider>
     <Header onOpenNewTransactionModal={handleOpenNewTransactionModal} />

     <Dashboard />

     <NewTransactionModal 
      isOpen={isNewTransactionModalOpen} 
      onRequestClose={handleCloseNewTransactionModal}
    />

     <GlobalStyle />
    </TransactionsProvider>
  );
}


