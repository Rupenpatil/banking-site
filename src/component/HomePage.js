import React from 'react';
import './HomePage.css'


const HomePage = () => {
  return (
    <div className="home-page">
      <header>
        <h1>Welcome To  PATIL BANK</h1>
        <p>Keep your money safe </p>
      </header>
      <button className="get-started-button">Get Started</button>
    <main>
      <section>
        <div className="card">
          <img
          className="card-image"
          />
          <div className="card-content">
            <h2>Make your dream home a reality with Patil Bank Home Loan</h2>
            <p>Flexible repayment tenure. Zero prepayment charges on home loan. *T&C apply</p>
            <button className="card-button">Read More</button>
          </div>
        </div>
       </section>
       <section>
        <div className="card" >
          <img
            
            className="card-image-1"
          />
          <div className="card-content">
            <h2>Enjoy 7.50% p.a.* on NRI Fixed Deposits</h2>
            <p>Choose from a range of deposits with Patil Bank NRI Banking deposit services.*T&C Apply</p>
            <button className="card-button">Read More</button>
          </div>
        </div>
       </section>
       <section>
        <div className="card">
          <img
             // Replace with your image URL
            
            className="card-image-2"
          />
          <div className="card-content">
            <h2>Business Instalment Loan</h2>
            <p>Get Collateral free loan upto Rs. 100 lakhs with flexible loan tenure</p>
            <button className="card-button">Read More</button>
          </div>
        </div>
       </section>
      </main>
      <main>
        <section>
          <a href="/About">About Us</a>
          <p> We build our products and services around our clients and have a commitment to help ensure that our clients have the best possible experience with us..</p>
        </section>
        <section>
          <a href="/ServicePage">Services</a>
          <p>We offer a wide range of services to meet your needs...</p>
        </section>
        <section>
          <a href="/Contact">Help center</a>
          <p>We can help. Select a topic. Select the topic that best describes your issue, then you'll fill out a form with your specific details.
</p>
        </section>
      </main>
      <footer>
        <p>&copy; 2023 PATIL BANK</p>
      </footer>
    </div>
  );
}

export default HomePage;
