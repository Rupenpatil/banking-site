import React from 'react';
import "./DeleteAccountButton.css"

const DeleteAccountButton = () => {
  // Add logic to handle the account deletion process
  const handleDeleteAccount = () => {
    // Implement the account deletion logic here
    alert('Account deleted!');
  };

  return (
    <div className="delete-account-button">
      <header>
      <h2>Delete Account</h2>
      </header>
      <p>Are you sure you want to delete your account?</p>
      <button onClick={handleDeleteAccount} className="delete-button">
        Delete My Account
      </button>
    </div>
  );
};

export default DeleteAccountButton;
