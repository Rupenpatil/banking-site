// src/components/RegistrationForm.js

import React, { useState } from 'react';
import './RegistrationForm.css'

function RegistrationForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    userName: '',
    email: '',
    age: '',
    address: '',
    phonenumber: '',
    pannumber: '',
    password: '',
    confirmpassword: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission, e.g., send data to a server
  };
  return (
   
    <div>
    <div className="registration-form">
      <h2>Registration</h2>
      <form onSubmit={handleSubmit}>
        <div>
        <input
           type="text"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          placeholder="First Name"
        />
        </div>
        <div>
        <input
          type="text"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          placeholder="Last Name"
        />
        </div>
        <div>
        <input
          type="userName"
          name="userName"
          value={formData.userName}
          onChange={handleChange}
          placeholder="UserName"
        />
        </div>
        <div>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
        />
        </div>
        <div>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Password"
        />
        </div>
        <div>
        <input
          type="confirmpassword"
          name="confirmpassword"
          value={formData.confirmpassword}
          onChange={handleChange}
          placeholder="Confirm Password"
        />
        </div>
        <div>
        <input
          type="age"
          name="age"
          value={formData.age}
          onChange={handleChange}
          placeholder="Age"
        />
        </div>
        <div>
        <input
          type="address"
          name="address"
          value={formData.address}
          onChange={handleChange}
          placeholder="Address"
        />
        </div>
        <div>
        <input
          type="phonenumber"
          name="phonenumber"
          value={formData.phonenumber}
          onChange={handleChange}
          placeholder="Phone Number"
        />
        </div>
        <div>
        <input
          type="pannumber"
          name="pannumber"
          value={formData.pannumber}
          onChange={handleChange}
          placeholder="PAN Number"
        />
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
    </div>
  
  );
}

export default RegistrationForm;
