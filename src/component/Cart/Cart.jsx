import CartItem from "../CartItem/CartItem";
import React, { useState } from "react";

const buyData = [
  //origin
  // {
  //   id: 1,
  //   name: "破壞補丁修身牛仔褲",
  //   price: 3999,
  //   itemCount: 1,
  //   ImageUrl: item1,
  // },
  // {
  //   id: 2,
  //   name: "刷色直筒牛仔褲",
  //   price: 1299,
  //   itemCount: 1,
  //   ImageUrl: item2,
  // },
  {
    id: "1",
    name: "貓咪罐罐",
    img: "https://picsum.photos/300/300?text=1",
    price: 100,
    quantity: 2,
  },
  {
    id: "2",
    name: "貓咪干干",
    img: "https://picsum.photos/300/300?text=2",
    price: 200,
    quantity: 1,
  },
];

export default function Cart() {
  //使用buyData作為狀態
  const [data, setData] = useState(buyData);
  const [buyPrice, setBuyPrice] = useState(0);
  //Fake totalPrice
  let totalPrice = 0;
  return (
    <div className="px-24 py-32 border rounded-3 h-100">
      <h3>購物籃</h3>
      <ul className="list-unstyled d-flex flex-column gap-24 my-32">
        {data.map((item, index) => {
          totalPrice += item.price * item.quantity;
          return (
            <li key={`BasketItem${index}`}>
              <CartItem
                itemIndex={index}
                itemName={item.name}
                itemPrice={item.price}
                itemImageUrl={item.img}
                itemQuantity={item.quantity}
                data={data}
                setData={setData}
                buyPrice={buyPrice}
                setBuyPrice={setBuyPrice}
              />
            </li>
          );
        })}
      </ul>
      <div className="d-flex justify-content-between pt-16 border-top mb-32">
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
