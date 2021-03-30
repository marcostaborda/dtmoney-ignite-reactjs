import { useState } from "react";
import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { NewTransactionModal } from "./components/NewTransactionModal";
import { TransactionsTable } from "./components/TransactionsTable";
import { TransactionsProvider } from "./contexts/TransactionsContext";
import { GlobalStyles } from "./styles/global";


function App() {
  const [isNewTransactionModalOpen, setIsNewTransactionModal] = useState(false);

  function handleOpenNewTransactionModal() {
    setIsNewTransactionModal(true);
  }

  function handleCloseNewTransactionModal() {
    setIsNewTransactionModal(false);
  }

  return (
    <>
      <TransactionsProvider>
        <Header onOpenModalNewTransactionModal={handleOpenNewTransactionModal} />
        <Dashboard />
        <TransactionsTable />
        <NewTransactionModal
          isOpenModal={isNewTransactionModalOpen}
          onCloseRequestModal={handleCloseNewTransactionModal}
        />
        <GlobalStyles />
      </TransactionsProvider>
    </>
  );
}

export default App;
