
import './App.css';
import React from 'react';
import Login from './component/Login';
import Navbar from './component/Navbar';
import HomePage from './component/HomePage';
import './component/HomePage.css';
import RegistrationForm from './component/RegistrationForm';
import About from './component/About';
import Contact from './component/Contact';
import ServicePage from './component/ServicePage';
import Header from './component/Header';
import ProfileForm from './component/ProfileForm';
import ChangePasswordForm from './component/ChangePasswordForm';
import DeleteAccountButton from './component/DeleteAccountButton';
import TransactionHistory from './component/TransactionHistory';
import TransferFunds from './component/TransferFunds';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SecondNavbar from './component/SecondNavbar';
import ManageAccount from './component/ManageAccount';



function App() {
  return (
    <Router>
      
      <Navbar />
      <SecondNavbar />
      
      <Routes>
      <Route path="/" Component={HomePage} />   
      <Route path="/About" Component={About} />
      <Route path="/Contact" Component={Contact} />
      <Route path="/ServicePage" Component={ServicePage} />
      <Route path="/Login" Component={Login} /> 
      <Route path="/RegistrationForm" Component={RegistrationForm} />  
      <Route path="/ManageAccount" Component={ManageAccount} />  
      <Route path="/ChangePasswordForm" Component={ChangePasswordForm} /> 
      <Route path="/DeleteAccountButton" Component={DeleteAccountButton} /> 
      <Route path="/TransactionHistory" Component={TransactionHistory} />  
      <Route path="/TransferFunds" Component={TransferFunds} />  
      <Route path="/ProfileForm" Component={ProfileForm} />  
      </Routes>
    </Router>
     
      
  
  );
}
export default App;