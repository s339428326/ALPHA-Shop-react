//
import styles from "./CartItem.module.scss";
import plus from "../../assets/icon/plus.svg";
import reduce from "../../assets/icon/reduce.svg";

import { useState } from "react";

export default function CartItem(props) {
  //計算單品數量
  const [count, setCount] = useState(props.itemQuantity);
  const addCountBtn = (e) => {
    e.preventDefault();
    setCount((count) => count + 1);
  };

  const reduceCountBtn = (e) => {
    e.preventDefault();
    if (count > 0) {
      setCount((count) => count - 1);
    }
  };

  return (
    <div className={`${styles["item"]}`}>
      <img
        className="rounded-2"
        src={props.itemImageUrl}
        alt={props.itemName}
        width={"100"}
        height={"100"}
      />
      <div className="item-content">
        <p>{props.itemName}</p>
        <div className={`${styles["item-content-controller"]}`}>
          <button onClick={reduceCountBtn}>
            <img className="rounded-2" src={reduce} alt="icon-reduce" />
          </button>
          <p>{count}</p>
          <button onClick={addCountBtn}>
            <img src={plus} alt="icon-plus" />
          </button>
        </div>
      </div>
      <div className={`${styles["item-end"]}`}>
        <p>$ {props.itemPrice}</p>
      </div>
    </div>
  );
}
