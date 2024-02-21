// frontend/src/App.jsx
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home.jsx";
import PageOne from "./pages/Pageone.jsx";
import ProductDetail from "./pages/ProductDetail.jsx";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pageone" element={<PageOne />} />
{/*         <Route path="/product/:id" element={<ProductDetail />} /> */}
      </Routes>
    </Router>
  );
}
