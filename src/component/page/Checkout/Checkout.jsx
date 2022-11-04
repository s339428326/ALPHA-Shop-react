import styles from "./Checkout.module.scss";
import StepProgressBar from "../../StepProgressBar/StepProgressBar";
import Step from "../../Step/Step";
import StepShoppingBasket from "../../StepShoppingBasket/StepShoppingBasket";

//page
// let page = 0;

export default function Checkout() {
  return (
    <main className={`${styles["page"]} container`}>
      <h1 className={`${styles.title} mb-48`}>結帳</h1>
      <section className="row justify-content-between">
        <div className="col-lg-6">
          <StepProgressBar />
          <div className={styles["form"]}>
            <Step />
          </div>
        </div>
        <div className="col-lg-5">
          <StepShoppingBasket />
        </div>
      </section>
    </main>
  );
}
