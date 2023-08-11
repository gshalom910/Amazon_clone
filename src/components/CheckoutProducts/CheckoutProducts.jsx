import StarRatings from "react-star-ratings";
import "./checkoutProducts.css";
import { useStateValue } from "../Provider/StateProvider";

function CheckoutProducts({ id, image, desc, price, rating, hideButton }) {
  const [{ basket }, dispatch] = useStateValue();
  const removeFromBasket = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  };
  return (
    <div className="checkoutProduct py-4">
      <img className="checkoutProduct__image" src={image} />
      <div className="checkoutProduct__info">
        <p className="checkoutProduct__title">{desc}</p>
        <p className="checkoutProduct__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="checkoutProduct__rating">
          <StarRatings
            rating={rating}
            starRatedColor="gold"
            starEmptyColor="lightgray"
            starDimension="20px"
            starSpacing="0.15px"
          />
        </div>
        {!hideButton && (
          <button onClick={removeFromBasket}>Remove from Basket</button>
        )}
      </div>
    </div>
  );
}

export default CheckoutProducts;
