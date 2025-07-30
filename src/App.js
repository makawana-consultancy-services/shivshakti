import React from 'react';
import Header from "./component/Header/Header";
import Footer from "./component/Footer/Footer";
import Whatsapp from './component/Whatsapp/Whatsapp';
import { Outlet } from "react-router-dom"; // Must import Outlet
import './app.css';  // app css is globle css
import './style.css';

const App = () => {
  return (
    <div className="App">

      <Header />

      <Outlet /> {/* This renders the route's page component */}

      <Footer />

      <Whatsapp />

    </div>
  );
};

export default App;