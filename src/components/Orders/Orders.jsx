import { useEffect, useState } from "react";
import Order from "../Order/Order";
import "./orders.css";
import { useStateValue } from "../Provider/StateProvider";
import { db } from "../Authentication/firebase";

function Orders() {
  const [{ basket, user }, dispatch] = useStateValue();

  const [orders, setOrders] = useState([]);

  useEffect(() => {
    if (user) {
      db.collection("users")
        .doc(user?.uid)
        .collection("orders")
        .orderBy("created", "desc")
        .onSnapshot((snapshot) =>
          setOrders(
            snapshot.docs.map((doc) => ({
              id: doc.id,
              data: doc.data(),
            }))
          )
        );
    } else {
      setOrders([]);
    }
  }, [user]);
  if (user) {
    return (
      <div className="orders">
        <h1>Your Orders</h1>
        <div className="orders__order">
          {orders?.map((order, i) => (
            <Order key={i} order={order} />
          ))}
        </div>
      </div>
    );
  } else {
    <h1>No Order Found</h1>;
  }
}

export default Orders;
