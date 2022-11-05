import styles from "./StepShoppingBasket.module.scss";
import plus from "../../assets/icon/plus.svg";
import reduce from "../../assets/icon/reduce.svg";
import item1 from "../../assets/image/product-1.jpg";
import item2 from "../../assets/image/product-2.jpg";

import React, { useState } from "react";

const buyData = [
  {
    id: 1,
    name: "破壞補丁修身牛仔褲",
    price: 3999,
    ImageUrl: item1,
  },
  {
    id: 2,
    name: "刷色直筒牛仔褲",
    price: 1299,
    ImageUrl: item2,
  },
];

export default function StepShoppingBasket() {
  //進入購物頁面的總金額
  let totalPrice = 0;
  //需要建立一個可以拿到ShoppingBasketItem更新金額的方法
  return (
    <div className="px-24 py-32 border rounded-3 h-100">
      <h3>購物籃</h3>
      <ul className="list-unstyled d-flex flex-column gap-24 my-32">
        {buyData.map((item, index) => {
          //遍歷進入購物頁面的總金額計算
          totalPrice += item.price;
          return (
            <li key={`BasketItem${index}`}>
              <ShoppingBasketItem
                itemName={item.name}
                itemPrice={item.price}
                itemImageUrl={item.ImageUrl}
                totalPriceSet
              />
            </li>
          );
        })}
      </ul>
      <div className="d-flex justify-content-between pt-16 border-top mt-auto mb-32">
        <p>運費</p>
        {/* 這裡需要接取From的Step2 運送金額 */}
        <strong>免費</strong>
      </div>
      <div className="d-flex justify-content-between pt-16 border-top">
        <p>小計</p>
        <strong>$ {totalPrice}</strong>
      </div>
    </div>
  );
}

export function ShoppingBasketItem({
  itemName,
  itemPrice,
  itemImageUrl = "https://fakeimg.pl/250x100/",
}) {
  //計算單品數量
  const [count, setCount] = useState(1);
  //計算單品總額
  itemPrice = itemPrice * count;

  function addCountBtn() {
    setCount((count) => count + 1);
  }

  function reduceCountBtn() {
    if (count >= 1) setCount((count) => count - 1);
  }

  return (
    <div className={`${styles["item"]}`}>
      <img src={itemImageUrl} alt={itemName} width={"100"} height={"100"} />
      <div className="item-content">
        <p>{itemName}</p>
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
        <p>$ {itemPrice}</p>
      </div>
    </div>
  );
}
