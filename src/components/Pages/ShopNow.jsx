import { useLocation } from "react-router-dom";
import "./shopNow.css";
import { useEffect, useState } from "react";
import StarRatings from "react-star-ratings";
import { useStateValue } from "../Provider/StateProvider";

function ShopNow() {
  const type = useLocation();
  const typeData = type.state;
  const [products, setProducts] = useState();
  const [{ basket }, dispatch] = useStateValue();
  useEffect(() => {
    fetch("/shopProducts.json")
      .then((res) => res.json())
      .then((data) => {
        const product = data[typeData];
        // console.log(product);
        setProducts(product);
      })
      .catch((err) => console.log(err));
  }, []);

  //   console.log('this is the basket', basket);
  const addToBasket = (idx) => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: products[idx].id,
        desc: products[idx].desc,
        image: products[idx].image,
        price: products[idx].price,
        rating: products[idx].rating,
      },
    });
  };
  function truncate(txt, n) {
    return txt?.length < n ? txt : txt?.slice(0, n - 1) + "...";
  }
  return (
    <div className="container-fluid body">
      <div className="row pt-5">
        {products?.map((product, i) => {
          return (
            <div className="col-md-3 mb-5" key={i}>
              <div className="shopnow">
                <img src={product.image} alt={product.desc} />
                <div className="shopnow__info">
                  <div>{truncate(product.desc, 70)}</div>
                  <div className="shopnow__price">
                    <small>$</small>
                    <strong>{product.price}</strong>
                  </div>
                  <div>
                    {/* {Array(product.rating)
                      .fill()
                      .map((_, i) => (
                        <p key={i}>🌟</p>
                      ))} */}
                    <StarRatings
                      rating={product.rating}
                      starRatedColor="gold"
                      starEmptyColor="lightgray"
                      starDimension="20px"
                      starSpacing="0.15px"
                    />
                  </div>
                </div>
                <button
                  onClick={() => {
                    addToBasket(i);
                  }}
                >
                  Add to Basket
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ShopNow;
