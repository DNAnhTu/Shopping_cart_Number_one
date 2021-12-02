import React from "react";
import { useParams, Link } from "react-router-dom";
import { connect } from "react-redux";
import { addToCart } from "../redux/actions/actionProducts";
import { productReducer } from "../redux/reducers/productReducer";
import "../components/Detail.css";


const Details = ({ productsAll, addToCart }) => {
  const { id } = useParams();
  let productDetails = productsAll.find(
    (item) => parseInt(item.id) === parseInt(id)
  );
  const { img, name, brand, Memory, price, ram, chip, OSystem, Pin} = productDetails;

  return (
    <div className="details">
      <div className="inside-container">
        <div className="details-center">
          <div className="details-img">
            <img src={img} alt="product" />
          </div>
          <div className="details-info">
            <h2 className="details-title">
              {name}
            </h2>
            <div className="detail-phone">
              <div>
                <strong>Thương hiệu:</strong> 
                <span>{brand}</span>
              </div>

              <div>
                <strong>Bộ nhớ trong:</strong>
                <span>{Memory}</span>{" "}
              </div>
              <div>
                <strong>Ram:</strong>
                <span>{ram}</span>
              </div>
              <div>
                <strong>Chip:</strong> 
                <span>{chip}</span>
              </div>
              <div>
                <strong>Hệ điều hành:</strong> 
                <span>{OSystem}</span>
              </div>
              <div>
                <strong>Dung lượng pin:</strong> 
                <span>{Pin}</span>
              </div>
              <div>
                <strong>Giá:</strong> <span>{price.toLocaleString()} USD</span>
              </div>
            </div>
            <div className="details-btn">
              <Link to="/">
                <button className="backproduct">Quay lại sản phẩm</button>
              </Link>
              <button onClick={() => addToCart(id)} className="addproduct">Thêm vào giỏ</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateProps = (state) => {
  return {
    productsAll: state.productsAll.products,
  };
};

export default connect(mapStateProps, { productReducer, addToCart })(Details);
