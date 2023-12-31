import CurrencyFormat from "react-currency-format";
import "./subtotal.css";
import { useStateValue } from "../../Provider/StateProvider";
import { useNavigate } from "react-router-dom";

function Subtotal() {
  const [{ basket, user }, dispatch] = useStateValue();
  const navigate = useNavigate();
  const getBasketTotal = (basket) =>
    basket?.reduce((amount, item) => item.price + amount, 0);
  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <div>
            <p>
              Subtotal ({basket.length} items): <strong>{value} </strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" /> This order contains a gift
            </small>
          </div>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />
      <button
        onClick={(e) => {
          if (user) {
            navigate("/payment");
          } else {
            navigate("/login");
          }
        }}
      >
        Proceed to Checkout
      </button>
    </div>
  );
}

export default Subtotal;
