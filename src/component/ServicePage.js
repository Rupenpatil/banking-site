// ServicePage.js
import React from 'react';
import './ServicePage.css'; // Import the CSS file for styling

const ServicePage = () => {
  return (
    <div className="service-container">
      <header>
      <h1 className="service-heading">Bank Services</h1>
      </header>
      <p className="service-description">
        Welcome to our bank services page. Choose from the following services:
      </p>
      <ul className="service-list">
        <li>
          <div className="service-card">
            <h2>Account Management</h2>
            <p>
              View your account details, check balance, and manage your
              transactions.
            </p>
            <button className="service-button">Explore</button>
          </div>
        </li>
        <li>
          <div className="service-card">
            <h2>Loans</h2>
            <p>Explore our loan options and apply online.</p>
            <button className="service-button">Apply Now</button>
          </div>
        </li>
        <li>
          <div className="service-card">
            <h2>Online Banking</h2>
            <p>Access your accounts online, anytime, anywhere.</p>
            <button className="service-button">Login</button>
            
      
          </div>
        </li>
        {/* Add more services as needed */}
      </ul>
    </div>
  );
};


export default ServicePage;
