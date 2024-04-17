// TransferFunds.js
import React, { useState } from 'react';
import './TransferFunds.css';

function TransferFunds() {
  const [formData, setFormData] = useState({
    recipient: '',
    amount: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleTransfer = (e) => {
    e.preventDefault();
    // Implement fund transfer logic here
    console.log('Transfer initiated:', formData);
    // You can make API requests here to complete the transfer
  };

  return (
    <div className="transfer-funds">
      <header>
      <h2>Transfer Funds</h2>
      </header>
      <form onSubmit={handleTransfer}>
        <div className="form-group">
          <label>Recipient:</label>
          <input
            type="text"
            name="recipient"
            value={formData.recipient}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label>Amount:</label>
          <input
            type="number"
            name="amount"
            value={formData.amount}
            onChange={handleInputChange}
          />
        </div>
        <button type="submit">Transfer</button>
      </form>
    </div>
  );
}

export default TransferFunds;
