import styles from "./Checkout.module.scss";
import StepProgress from "../../StepProgress/StepProgress";
import Step1 from "../../Step1/Step1";
import Step2 from "../../Step2/Step2";
import Step3 from "../../Step3/Step3";
import Cart from "../../Cart/Cart";
import ProgressControl from "../../ProgressControl/ProgressControl";

import { useState } from "react";

export default function Checkout() {
  const [step, setStep] = useState(1);
  return (
    <main className={`${styles["page"]} container`}>
      <h1 className={`${styles.title} mb-48`}>結帳</h1>
      <form action="">
        <section className="row">
          <div className="col-lg-6">
            <StepProgress step={step} />
            <div className={styles["step"]}>
              <Step1 step={step} />
              <Step2 step={step} />
              <Step3 step={step} />
            </div>
            <div className={`${styles["control"]}`}>
              <ProgressControl step={step} setStep={setStep} />
            </div>
          </div>
          <div className="col-lg-5 offset-lg-1">
            <Cart />
          </div>
        </section>
      </form>
    </main>
  );
}
