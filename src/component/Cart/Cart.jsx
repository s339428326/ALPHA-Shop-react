import styles from "./Cart.module.scss";
import CartItem from "../CartItem/CartItem";

//context
import { CartContext } from "../context/CartContext/CartContext";
import { PaymentContext } from "../context/PaymentContext/PaymentContext";

//hook
import { useState } from "react";
import { useContext } from "react";

export default function Cart(props) {
  //context var
  const cartData = useContext(CartContext);
  const paymentData = useContext(PaymentContext);
  console.log("Cart資料-", cartData);

  //總金額
  const [cal, setCal] = useState(
    cartData.map((item) => item.price * item.quantity).reduce((a, b) => a + b)
  );
  //paymentData paymentPrice setting
  paymentData.paymentPrice = cal !== 0 ? cal + props.deliveryFee : cal;
  console.log(paymentData);
  return (
    <div className="px-24 py-32 border rounded-3 h-100">
      <h3>購物籃</h3>
      <ul className="list-unstyled d-flex flex-column gap-24 my-32 item-list">
        {cal !== 0 ? (
          cartData.map((item, index) => {
            return (
              <li key={`CartItem-${index}`}>
                <CartItem
                  id={item.id}
                  name={item.name}
                  img={item.img}
                  price={item.price}
                  quantity={item.quantity}
                  setCal={setCal}
                  setItemCount={props.setItemCount}
                />
              </li>
            );
          })
        ) : (
          <div className={`${styles["item-none"]}`}>
            <p>目前沒有任何商品</p>
          </div>
        )}
      </ul>

      <div className="d-flex justify-content-between pt-16 border-top mb-32">
        <p>運費</p>
        <strong>{props.deliveryFee === 0 ? "免費" : props.deliveryFee}</strong>
      </div>
      <div className="d-flex justify-content-between pt-16 border-top">
        <p>小計</p>
        <strong>$ {cal !== 0 ? cal + props.deliveryFee : cal}</strong>
      </div>
    </div>
  );
}
