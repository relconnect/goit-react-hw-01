import React from "react";
import Transaction from '../Transaction/Transaction';


const TransactionHistory = ({items}) => (
  <table className="transaction-history">
    <thead>
      <tr>
        <th>Type</th>
        <th>Amount</th>
        <th>Currency</th>
      </tr>
    </thead>
    <tbody>
        
    {items.map(item => (
      <Transaction transaction = {item}/>
    ))}
      
    </tbody>
  </table>
);

export default TransactionHistory;
