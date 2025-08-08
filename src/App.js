import React from 'react';
import Header from "./component/Header/Header";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import Products from "./pages/Products.jsx";
import Process from "./pages/Process.jsx";
import Nutrients from "./pages/Nutrients.jsx";
import Footer from "./component/Footer/Footer";
import Whatsapp from './component/Whatsapp/Whatsapp';
import './app.css';  // app css is globle css
import './style.css';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <div className="App">

      <Header />

      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/contact' element={<Contact />}/>
        <Route path='/products' element={<Products />}/>
        <Route path='/process' element={<Process />}/>
        <Route path='/nutrients' element={<Nutrients />}/>
      </Routes>

      <Footer />

      <Whatsapp />

    </div>
  );
};

export default App;