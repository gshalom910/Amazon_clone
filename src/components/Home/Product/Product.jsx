import "./product.css";
import { products } from "../../../data/product.json";
import { Link } from "react-router-dom";
function Product() {
  return (
    <div className="container-fluid">
      <div className="row">
        {products?.map((product, i) => {
          return (
            <div className="col-md-3" key={i}>
              <div className="product">
                <div className="product__info">
                  <h2>{product.title}</h2>
                </div>
                <Link to="/shop" state={product.title}>
                  <img src={product.image} alt={product.title} />
                </Link>
                <Link to={"/shop"} state={product.title}>
                  <small>{product.shop}</small>
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Product;
