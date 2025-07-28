import Header from "./component/Header/Header";
import './app.css'
import './style.css'
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import Process from "./pages/Process";
import Nutrition from "./pages/Nutrition";
import Contact from "./pages/Contact";
import Footer from "./component/Footer/Footer";

function App() {
  return (
    <div className="App">

      <Header />

      {/* Routes start  */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/process" element={<Process />} />
        <Route path="/nutrition" element={<Nutrition />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      {/* Routes end  */}

      <Footer />

    </div>
  );
}

export default App;
