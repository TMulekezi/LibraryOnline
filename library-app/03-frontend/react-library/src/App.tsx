import React from 'react';
import './App.css';
import { Navbar } from './layouts/NavBarAndFooter/Navbar';
import { HomePage } from './layouts/HomePage/Homepage';
import { Footer } from './layouts/NavBarAndFooter/Footer';

export const App = () => {
  return (
    <div>
      <Navbar />
      <HomePage />
      <Footer />
    </div>
  );
}

