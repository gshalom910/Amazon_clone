import CheckoutProducts from "../CheckoutProducts/CheckoutProducts";
import { useStateValue } from "../Provider/StateProvider";
import Subtotal from "./Subtotal/Subtotal";
import "./checkout.css";

function Checkout() {
  const [{ basket, user }, dispatch] = useStateValue();
  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__ad"
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
          alt=""
        />
        <h3>Hello, {!user ? "Guest" : user.email}</h3>
        <h2 className="checkout__title">Your shopping Basket</h2>
        {basket.map((item, i) => (
          <CheckoutProducts
            key={i}
            id={item.id}
            desc={item.desc}
            image={item.image}
            price={item.price}
            rating={item.rating}
          />
        ))}
      </div>
      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
