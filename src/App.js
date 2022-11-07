import Header from "./component/Header/Header";
import Checkout from "./component/page/Checkout/Checkout";
import Footer from "./component/Footer/Footer";

//scss
import "./styles/main.scss";
import { useState } from "react";

function App() {
  const buyData = [
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
      quantity: 6,
    },
  ];
  const [data, setData] = useState(buyData);
  const [itemCount, setItemCount] = useState(data.length);

  return (
    <>
      <Header itemCount={itemCount} />
      <Checkout data={data} setData={setData} setItemCount={setItemCount} />
      <Footer />
    </>
  );
}

export default App;
