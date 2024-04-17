// SecondNavbar.js
import React from 'react';
import './SecondNavbar.css'; // Import the stylesheet
import { Link } from 'react-router-dom';

const SecondNavbar = () => {
  return (
    <div className="second-navbar">
      <ul>
        <li><Link to="/ManageAccount">Manage Account</Link></li>
        <li><Link to="/TransferFunds">Transfer Funds</Link></li>
        <li><Link to="/TransactionHistory">Transaction History</Link></li>
        <li><Link to="/ProfileForm">Profile</Link></li>
        <li><Link to="/ChangePasswordForm">Change Password</Link></li>
        <li><Link to="/DeleteAccountButton">Delete Account</Link></li>
        
      </ul>
    </div>
  );
};

export default SecondNavbar;
