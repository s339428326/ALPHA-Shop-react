//
import styles from "./CartItem.module.scss";
import plus from "../../assets/icon/plus.svg";
import reduce from "../../assets/icon/reduce.svg";

import { useState } from "react";

export default function CartItem(props) {
  //計算單品數量
  const [count, setCount] = useState(props.quantity);

  //

  const handleAddCountBtn = (e) => {
    e.preventDefault();
    //更新數量
    setCount((count) => count + 1); //可以使用data status 更新這裡可以優化
    //更新在Cart的總金額
    props.setCal((totalPrice) => (totalPrice += props.price));
    //更新購物車Header數量itemCount
    props.setItemCount(
      () => props.data.filter((item) => item.quantity > 0).length
    );
  };

  const handleReduceCountBtn = (e) => {
    e.preventDefault();
    //更新數量
    setCount((count) => count - 1); //可以使用data status 更新這裡可以優化
    //更新在Cart的總金額
    props.setCal((totalPrice) => (totalPrice -= props.price));
    //更新購物車Header數量itemCount
    props.setItemCount((item) => {
      return count === 1 ? item - 1 : item;
    });
  };

  return count !== 0 ? (
    <div className={`${styles["item"]}`}>
      <img
        className="rounded-2"
        src={props.img}
        alt={props.name}
        width={"100"}
        height={"100"}
      />
      <div className="item-content">
        <p>{props.name}</p>
        <div className={`${styles["item-content-controller"]}`}>
          <button onClick={handleReduceCountBtn}>
            <img className="rounded-2" src={reduce} alt="icon-reduce" />
          </button>
          <p>{count}</p>
          <button onClick={handleAddCountBtn}>
            <img src={plus} alt="icon-plus" />
          </button>
        </div>
      </div>
      <div className={`${styles["item-end"]}`}>
        <p>$ {props.price * count}</p>
      </div>
    </div>
  ) : null;
}
