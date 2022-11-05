import styles from "./Checkout.module.scss";
import StepProgress from "../../StepProgress/StepProgress";
// import Step1 from "../../Step1/Step1";
// import Step2 from "../../Step2/Step2";
import Step3 from "../../Step3/Step3";
import Cart from "../../Cart/Cart";
import ProgressControl from "../../ProgressControl/ProgressControl";

//page
// let page = 0;
export default function Checkout() {
  //暫時阻擋表單傳送
  const handleSubmit = (event) => {
    event.preventDefault();

    console.log("form submitted");
  };

  return (
    <main className={`${styles["page"]} container`}>
      <h1 className={`${styles.title} mb-48`}>結帳</h1>
      <form onSubmit={handleSubmit}>
        <section className="row">
          <div className="col-lg-6">
            <StepProgress />
            <div className={styles["step"]}>
              {/* <Step1 /> */}
              {/* <Step2 /> */}
              <Step3 />
            </div>
            <div className={`${styles["control"]}`}>
              <ProgressControl />
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
