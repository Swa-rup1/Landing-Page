import React from 'react';
import crtImage from '../source/crt.png';

function Home() {
  return (
    <section className="home" id="home">
      <div className="left">
        <h1>Experience the Freshness of Real Juice</h1>
        <h3>100% Natural Ingredients for a Healthier You</h3> 
        <button id="order-intro">Order Now</button>
      </div>

      <div className="right">
   
        <img src={crtImage} alt="Real-Canberry Product" className="canb" />
      </div>
    </section>
  );
}

export default Home;
