import React, {useContext} from 'react'
import { GlobalContext } from '../Context/GlobalState'
import Transaction from './transaction';

const TransactionList = () => {
  const {transactions}=useContext(GlobalContext);
  console.log({transactions})
  return (
    <>
      <h3>History</h3>
      <b><ul className='list'>
          {transactions.map(transaction => (<Transaction key={transaction.id} transaction={transaction}/>))}
      </ul></b>
    </>
  )
}

export default TransactionList
