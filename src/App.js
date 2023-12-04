import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Features from './components/Features';
import Review from './components/Review';
import Contact from './components/Contact';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import styles from './global.module.css';
import './index.css'; 


function App() {
  return (
    <div  className='   container-xl  main-container {styles.body}' >
      <Navbar />
      <main  className=" mainbody-container " >
        <Home />
        <Features />
        <Review />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}

export default App;
