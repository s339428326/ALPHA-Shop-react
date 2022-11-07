//
import styles from "./CartItem.module.scss";
import plus from "../../assets/icon/plus.svg";
import reduce from "../../assets/icon/reduce.svg";

import { useState } from "react";

export default function CartItem(props) {
  console.log(`產品-${props.id}的資料`, props.data);

  //計算單品數量
  const [count, setCount] = useState(props.quantity);

  const handleAddCountBtn = (e) => {
    e.preventDefault();
    //更新數量
    setCount((count) => count + 1); //可以使用data status 更新這裡可以優化
    // 更新在Checkout的buy data 商品數量
    props.setData((data) => {
      data[props.id - 1].quantity += 1;
      return data;
    });
    //更新在Cart的總金額
    props.setCal(
      (totalPrice) => (totalPrice += props.data[props.id - 1].price)
    );
  };

  const handleReduceCountBtn = (e) => {
    e.preventDefault();
    if (count > 0) {
      //更新數量
      setCount((count) => count - 1); //可以使用data status 更新這裡可以優化
      // 更新在Checkout的buy data 商品數量
      props.setData((data) => {
        data[props.id - 1].quantity -= 1;
        return data;
      });
      //更新在Cart的總金額
      props.setCal(
        (totalPrice) => (totalPrice -= props.data[props.id - 1].price)
      );
    }
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
