// ManageAccount.js
import React, { useState } from 'react';
import './ManageAccount.css'

function ManageAccount() {
  const [isEditing, setIsEditing] = useState(false);
  const [accountInfo, setAccountInfo] = useState({
    username: 'patilbank',
    email: 'patil@bank.com',
    age: '21',
    address: 'Royal Arcade Malad West , Mumbai ',
    phonenumber: '7894561234',
    pannumber: 'APM4578D'
    // Add other account information fields
  });

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    // Perform account information update logic here (e.g., make an API request)
    setIsEditing(false);
  };

  const handleCancelClick = () => {
    setIsEditing(false);
  };

  return (
    <div className='manage-account'>
      
      <header>
      <h1>Manage Account</h1>
      </header>
      {isEditing ? (
        <div>
          <label>Username: </label>
          <input
            type="text"
            name="username"
            value={accountInfo.username}
            onChange={(e) =>
              setAccountInfo({ ...accountInfo, username: e.target.value })
            }
          />
          <br />
          <label>Email: </label>
          <input
            type="email"
            name="email"
            value={accountInfo.email}
            onChange={(e) =>
              setAccountInfo({ ...accountInfo, email: e.target.value })
            }
          />
          <br />
          <label>Age: </label>
          <input
            type="number"
            name="age"
            value={accountInfo.age}
            onChange={(e) =>
              setAccountInfo({ ...accountInfo, age: e.target.value })
            }
          />
          <br />
          <label>Address: </label>
          <input
            type="string"
            name="address"
            value={accountInfo.address}
            onChange={(e) =>
              setAccountInfo({ ...accountInfo, address: e.target.value })
            }
          />
          <br />
          <label>Phone Number: </label>
          <input
            type="number"
            name="phonenumber"
            value={accountInfo.phonenumber}
            onChange={(e) =>
              setAccountInfo({ ...accountInfo, phonenumber: e.target.value })
            }
          />
          <br />
          <label>PAN Number: </label>
          <input
            type="string"
            name="pannumber"
            value={accountInfo.pannumber}
            onChange={(e) =>
              setAccountInfo({ ...accountInfo, pannumber: e.target.value })
            }
          />
          <br />
          {/* Add other account information fields */}
          <button onClick={handleSaveClick}>Save</button>
          <button onClick={handleCancelClick}>Cancel</button>
        </div>
      ) : (
        <div>
          <p>Username: {accountInfo.username}</p>
          <p>Email: {accountInfo.email}</p>
          {/* Display other account information */}
          <button onClick={handleEditClick}>Edit</button>
        </div>
      )}
    </div>
  );
}

export default ManageAccount;
