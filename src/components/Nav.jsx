import { Link } from "react-router-dom";
import { AiFillShopping } from "react-icons/ai";
import { useContext } from "react";
import cartContext from "../../CartContext.jsx";
const Nav = () => {
  const { items } = useContext(cartContext);
  return (
    <div className="nav">
      <div className="nav-div">
        <Link to={"/"}>
          <h1 className="nav-heading">Wear</h1>
        </Link>
        <Link to={"/checkout"}>
          <div className="cart">
            <AiFillShopping />
            <span>{items.length}</span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Nav;
