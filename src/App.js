import React from 'react';
import Header from "./component/Header/Header";
import Footer from "./component/Footer/Footer";
import { Outlet } from "react-router-dom"; // 🔥 Must import Outlet
import './app.css';
import './style.css';

const App = () => {
  return (
    <div className="App">

      <Header />

      <Outlet /> {/* This renders the route's page component */}

      <Footer />

    </div>
  );
};

export default App;