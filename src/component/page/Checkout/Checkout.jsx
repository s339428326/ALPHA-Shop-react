import styles from "./Checkout.module.scss";
import StepProgressBar from "../../StepProgressBar/StepProgressBar";
import Step from "../../Step/Step";
import StepShoppingBasket from "../../StepShoppingBasket/StepShoppingBasket";
import ProgressControl from "../../ProgressControl/ProgressControl";
//page
// let page = 0;

export default function Checkout() {
  //暫時阻擋表單傳送
  const handleSubmit = (event) => {
    event.preventDefault();

    console.log("form submitted ");
  };

  return (
    <main className={`${styles["page"]} container`}>
      <h1 className={`${styles.title} mb-48`}>結帳</h1>
      <form onSubmit={handleSubmit}>
        <section className="row">
          <div className="col-lg-6">
            <StepProgressBar />
            <div className={styles["step"]}>
              <Step />
            </div>
            <div className={`${styles["control"]}`}>
              <ProgressControl />
            </div>
          </div>
          <div className="col-lg-5 offset-lg-1">
            <StepShoppingBasket />
          </div>
        </section>
      </form>
    </main>
  );
}
