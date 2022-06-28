import { useContext } from "react";
import cartContext from "../../CartContext.jsx";

const Checkout = () => {
  const { items } = useContext(cartContext);
  return (
    <div className="checkout">
      <h2>Checkouts:</h2>
      <div className="shopping-bag">
        {items.map((item, i) => (
          <div className="checkout-items" key={i}>
            <h2>{item.name}</h2>
            <h3>{item.price}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Checkout;
