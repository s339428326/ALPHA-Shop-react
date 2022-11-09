//svg
import styles from "./CartItem.module.scss";
import plus from "../../assets/icon/plus.svg";
import reduce from "../../assets/icon/reduce.svg";
//context
import { CartContext } from "../context/CartContext/CartContext";
//hook
import { useContext } from "react";

export default function CartItem(props) {
  ///////////////////////////////////////////////////
  const cartData = useContext(CartContext);
  console.log("CartItem-Context ", cartData);

  ///////////////////////////////////////////////////
  //計算單品數量
  console.log("更新");

  const handleAddCountBtn = (e) => {
    e.preventDefault();
    //更新在Cart的總金額
    props.setCal((totalPrice) => (totalPrice += props.price));
    cartData[props.id - 1].quantity++;
  };

  const handleReduceCountBtn = (e) => {
    e.preventDefault();
    //更新在Cart的總金額
    props.setCal((totalPrice) => (totalPrice -= props.price));
    //更新Header Item Count
    props.setItemCount(cartData.filter((item) => item.quantity > 0).length - 1);
    //Context test
    cartData[props.id - 1].quantity--;
  };

  return cartData[props.id - 1].quantity !== 0 ? (
    <div className={`${styles["item"]}`}>
      <img
        className="rounded-2"
        src={cartData[props.id - 1].img}
        alt={cartData[props.id - 1].name}
        width={"100"}
        height={"100"}
      />
      <div className="item-content">
        <p>{props.name}</p>
        <div className={`${styles["item-content-controller"]}`}>
          <button onClick={handleReduceCountBtn}>
            <img className="rounded-2" src={reduce} alt="icon-reduce" />
          </button>
          <p>{cartData[props.id - 1].quantity}</p>
          <button onClick={handleAddCountBtn}>
            <img src={plus} alt="icon-plus" />
          </button>
        </div>
      </div>
      <div className={`${styles["item-end"]}`}>
        <p>
          $ {cartData[props.id - 1].price * cartData[props.id - 1].quantity}
        </p>
      </div>
    </div>
  ) : null;
}
