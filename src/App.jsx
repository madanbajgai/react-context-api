import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Checkout from "./components/Checkout";
import Nav from "./components/Nav";
import Products from "./components/Products";
import { CartProvider } from "../CartContext";

function App() {
  return (
    <div className="App">
      <CartProvider>
        <BrowserRouter>
          <Nav />
          <Routes>
            <Route path="/" element={<Products />} />
            <Route path="/checkout" element={<Checkout />} />
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </div>
  );
}

export default App;
