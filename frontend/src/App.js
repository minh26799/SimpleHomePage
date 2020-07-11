import React from 'react';
import data from './data';
import {BrowserRouter, Route, Link} from 'react-router-dom'
import './App.css';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';

function App() {
  //const openMenu = () => {
    //document.querySelector(".sidebar").classList.add("open");
  //}
  //const closeMenu = () => {
   // document.querySelector(".sidebar").classList.remove("open")
  //}
  return (
    
    <BrowserRouter>
    <div className="grid-container">
    <header className="header">
      <div className="brand">
      
        <a href="index.html">iRestaurant</a>
      </div>
      <div className="header-links">
        <a href="cart.html">Shopping Cart</a>
        <a href="signin.html">Sign In</a>
      </div>
    </header>
    
    <main className="main">
      <div className="content">
        
        <Route path="/product/:id" component={ProductScreen}/> 
        <Route path="/" exact={true} component={HomeScreen}/>
        
      </div>

    </main>
    <footer className="footer">
      All right reserved.
    </footer>
  </div>
  </BrowserRouter>
  );
}

export default App;
