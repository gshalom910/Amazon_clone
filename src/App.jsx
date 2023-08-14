import React, { useEffect } from "react";
import "./App.css";
import Home from "./components/Home/Home";
import { Route, Routes } from "react-router-dom";
import SharedLayout from "./components/SharedLayout/SharedLayout";
import ShopNow from "./components/Pages/ShopNow.jsx";
import Checkout from "./components/Checkout/Checkout";
import Login from "./components/Authentication/Login/Login";
import { useStateValue } from "./components/Provider/StateProvider";
import { auth } from "./components/Authentication/firebase";
import Payment from "./components/Payment/Payment";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Orders from "./components/Orders/Orders";

function App() {
  const promise = loadStripe(
    "pk_test_51NdYjUAFe0BwOSC568lEImWSnpgYxfoxytGTAA3IKPfwZ2JnlhLX8FAXOCoNFEqp5wSVCw4Bt9VODjmHam7fQmJP00yKn9Ip5o"
  );
  const [{}, dispatch] = useStateValue();
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      // console.log("THE USER IS >>> ", authUser);
      if (authUser) {
        // the user just logged in / the user was logged in

        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="/shop" element={<ShopNow />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route
          path="/payment"
          element={
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          }
        />
        <Route path="/orders" element={<Orders />} />
      </Route>
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}

export default App;
