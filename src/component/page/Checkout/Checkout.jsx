import styles from "./Checkout.module.scss";
import StepProgress from "../../StepProgress/StepProgress";
import Step1 from "../../Step1/Step1";
import Step2 from "../../Step2/Step2";
import Step3 from "../../Step3/Step3";
import Cart from "../../Cart/Cart";
import ProgressControl from "../../ProgressControl/ProgressControl";

import { useState } from "react";

export default function Checkout() {
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
      quantity: 1,
    },
  ];
  const [step, setStep] = useState(1);
  const [data, setData] = useState(buyData);
  const [deliveryFee, setDeliveryFee] = useState(0);
  console.log("root-", data);
  return (
    <main className={`${styles["page"]} container`}>
      <h1 className={`${styles.title} mb-48`}>結帳</h1>
      <form action="">
        <section className="row">
          <div className="col-lg-6">
            <StepProgress step={step} />
            <div className={styles["step"]}>
              <Step1 step={step} />
              <Step2
                step={step}
                deliveryFee={deliveryFee}
                setDeliveryFee={setDeliveryFee}
              />
              <Step3 step={step} />
            </div>
            <div className={`${styles["control"]}`}>
              <ProgressControl step={step} setStep={setStep} />
            </div>
          </div>
          <div className="col-lg-5 offset-lg-1">
            <Cart data={data} setData={setData} deliveryFee={deliveryFee} />
          </div>
        </section>
      </form>
    </main>
  );
}
