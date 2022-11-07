import CartItem from "../CartItem/CartItem";
import { useState } from "react";
// {
//   id: "1",
//   name: "貓咪罐罐",
//   img: "https://picsum.photos/300/300?text=1",
//   price: 100,
//   quantity: 2,
// },
// {
//   id: "2",
//   name: "貓咪干干",
//   img: "https://picsum.photos/300/300?text=2",
//   price: 200,
//   quantity: 1,
// },

export default function Cart(props) {
  console.log("Cart資料-", props.data);

  const [cal, setCal] = useState(
    props.data.map((item) => item.price * item.quantity).reduce((a, b) => a + b)
  );

  return (
    <div className="px-24 py-32 border rounded-3 h-100">
      <h3>購物籃</h3>
      <ul className="list-unstyled d-flex flex-column gap-24 my-32">
        {props.data.map((item, index) => {
          return (
            <li key={`CartItem-${index}`}>
              <CartItem
                id={item.id}
                name={item.name}
                img={item.img}
                price={item.price}
                quantity={item.quantity}
                data={props.data}
                setData={props.setData}
                setCal={setCal}
              />
            </li>
          );
        })}
      </ul>

      <div className="d-flex justify-content-between pt-16 border-top mb-32">
        <p>運費</p>
        {/* 這裡需要接取From的Step2 運送金額 */}
        <strong>{props.deliveryFee === 0 ? "免費" : props.deliveryFee}</strong>
      </div>
      <div className="d-flex justify-content-between pt-16 border-top">
        <p>小計</p>
        <strong>$ {cal + props.deliveryFee}</strong>
      </div>
    </div>
  );
}
