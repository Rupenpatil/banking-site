// TransactionHistory.js
import React, { useState } from 'react';
import './TransactionHistory.css'

const transactionsData = [
  { id: 1, description: 'Deposit', amount: 1000 },
  { id: 2, description: 'Withdrawal', amount: -500 },
  // Add more transaction entries as needed
];

function TransactionHistory() {
  return (
    <div className="transaction-history">
      <header>
      <h2>Transaction History</h2>
      </header>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Description</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {transactionsData.map((transaction) => (
            <tr key={transaction.id}>
              <td>{transaction.id}</td>
              <td>{transaction.description}</td>
              <td className={transaction.amount > 0 ? 'deposit' : 'withdrawal'}>
                {transaction.amount}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TransactionHistory;
