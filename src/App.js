import Header from "./component/Header/Header";
import Checkout from "./component/page/Checkout/Checkout";
import Footer from "./component/Footer/Footer";

//scss
import "./styles/main.scss";

//context
import { CartContext } from "./component/context/CartContext/CartContext";

//hook
import { useState } from "react";
import { useContext } from "react";

function App() {
  const cartData = useContext(CartContext);
  const [itemCount, setItemCount] = useState(
    cartData.filter((item) => item.quantity > 0).length
  );

  return (
    <>
      <Header itemCount={itemCount} />
      <Checkout itemCount={itemCount} setItemCount={setItemCount} />
      <Footer />
    </>
  );
}

export default App;
