import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Nav from "./components/Nav";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ProductProvider } from "./context/ProductProvider";
import Shop from "./pages/Shop";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Pages from "./pages/Pages";
import Details from "./pages/Details";

const App = () => {
  return (
    <BrowserRouter>
      <ProductProvider>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/shop" element={<Shop />}></Route>
          <Route path="/shop/:url" element={<Details />}></Route>
          <Route path="/pages" element={<Pages />}></Route>
        </Routes>
        <Footer />
      </ProductProvider>
    </BrowserRouter>
  );
};

export default App;
