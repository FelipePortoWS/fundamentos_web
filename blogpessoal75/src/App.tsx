import React from 'react';
import './App.css';
import Home from './paginas/home/Home';
import Navbar from './paginas/components/navBar/NavBar';
import Footer from './paginas/components/footer/Footer';

function App() {
  return (
    <>
    <Navbar/>
    <Home/>
    <Footer/>
    </>
);
}
export default App;