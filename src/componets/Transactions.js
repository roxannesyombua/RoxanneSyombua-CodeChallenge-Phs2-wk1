import React from 'react'
import TransactionItem from './TransactionItem'
import { bankTransactions } from './Data'

function Transactions({props}) {
    return (
        <div className='Transactions-container'>
           <TransactionItem props={bankTransactions}/>
        </div>
    )
}

export default Transactions