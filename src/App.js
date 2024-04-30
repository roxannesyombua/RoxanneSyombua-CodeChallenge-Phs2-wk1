
import { useState } from 'react';
import './App.css';
import Inputform from './componets/Inputform';
import Navbar from './componets/Navbar';
import Transactions from './componets/Transactions';
import Searchbar from './componets/Searchbar';

function App() {

  function handleUpdateOnSubmission(newTransaction) {
  // setTransactions(transactions=>[...transactions,newTransaction]) 
  }
  return (
    <div className="App">
      <Navbar/>
      <Searchbar />
      <Inputform onSubmission={handleUpdateOnSubmission}/>
      <Transactions/>
    </div>
  );
}

export default App;
