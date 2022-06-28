import { createContext, useState } from "react";

const cartContext = createContext();

export function CartProvider({ children }) {
  const [items, setItems] = useState([]);

  const addToCart = (name, price) => {
    console.log(name, price);
    setItems((prevState) => [...prevState, { name, price }]);
    // setItems([...items, { name, price }]);
  };
  return <cartContext.Provider value={{ items, addToCart }}>{children}</cartContext.Provider>;
}

export default cartContext;
