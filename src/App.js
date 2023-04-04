import "./App.css";
import NavBar from "./components/Home/NavBar";
import ContactUs from "./components/Home/ContactUs";
import React from "react";
import CategorySection from "./components/Home/CategorySection";
import { Route, Routes} from "react-router-dom";
import Products from "./components/Home/Products";
import Footer from "./components/Home/Footer";
import "/node_modules/flag-icons/css/flag-icons.min.css";

function App() {
  return (
    <div className="App">
        <NavBar />
         <Routes>
          <Route path="/" element={<CategorySection />} />
          <Route path="/3moHassan/category/:categoryId" element={<Products />} />
          <Route path="*" element={<CategorySection />} />
        </Routes> 
        <ContactUs />
        <Footer />
    </div>
  );
}

export default App;