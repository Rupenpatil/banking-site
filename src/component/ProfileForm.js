import React, { useState } from 'react';
import './ProfileForm.css';

const ProfileForm = () => {
  const [user, setUser] = useState({
    fullName: 'Rupen Patil',
    accountNumber: '1234567890',
    balance: 5000,
    lastLogin: '2023-11-22 10:30 AM', // Replace with the actual last login timestamp
    accounttype: 'Saving',
    profilePic: 'https://placekitten.com/200/200',
    username: ''
  });

  return (
    <div className="banking-profile-container">
      <div className="profile-info">
        <img src={user.profilePic} alt="Profile" className="profile-pic" />
        <h2>{user.username}</h2>
      </div>
      <div className="banking-profile-header">
        <h2>{user.fullName}</h2>
        <p>Account Number: {user.accountNumber}</p>
      </div>
      <div className="banking-profile-body">
        <div className="balance-info">
          <h3>Account Balance</h3>
          <p>&#8377;{user.balance.toFixed(2)}</p>
        </div>
        <div className="last-login-info">
          <h3>Last Login</h3>
          <p>{user.lastLogin}</p>
        </div>
        <br />
      <div className="banking-profile-footer">
        <h3>Account Type</h3>
        <p>{user.accounttype}</p>
      </div>
      </div>
    </div>
  );
};

export default ProfileForm;
