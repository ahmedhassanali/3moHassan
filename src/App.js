import "./App.css";
import React from "react";
import CategorySection from "./components/Pages/CategorySection";
import { Route, Routes} from "react-router-dom";
import ProductsSection from "./components/Pages/ProductsSection";
import "/node_modules/flag-icons/css/flag-icons.min.css";

function App() {
  return (
    <div className="App">
         <Routes>
          <Route path="/" element={<CategorySection />} />
          <Route path="/3moHassan/category/:categoryId" element={<ProductsSection />} />
          <Route path="*" element={<CategorySection />} />
        </Routes> 
    </div>
  );
}

export default App;