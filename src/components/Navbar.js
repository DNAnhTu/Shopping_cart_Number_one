import React ,{useState }from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import "../components/Navbar.css";
import Modal from "./ModalProfile";

const Navbar = ({ cart }) => {
  const[openModal, setOpenModal] = useState(false);
  return (
    <div className="navbar">
      <nav className="nav">
        <div className="link-navigation">
          <ul className="links-nav">
            <li>
              <Link to="/">
                <span>Shopping Cart</span>
              </Link>
            </li>
          </ul>
        </div>
        <div className="link-navigation">
          <ul className="links-nav">
            <li>
            <div className="PopUp">
              <button className="check-btn-profile" onClick={() =>{setOpenModal(true);}}>
              Number_One</button>
              {openModal && <Modal closeModal={setOpenModal}/>}
            </div>
            </li>
          </ul>
        </div>
        <Link to="/cart">
          <div className="div-icon">
            <span className="titleCart">Giỏ hàng</span>
            <div className="cart-icon">
              <div className="cart">
                <div className="cart-count">{cart.length}</div>
              </div>
            </div>
          </div>
        </Link>
      </nav>
    </div>
  );
};

const mapStateProps = (state) => {
  return {
    cart: state.productsAll.cart,
  };
};

export default connect(mapStateProps)(Navbar);
