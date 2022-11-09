import styles from "./ProgressControl.module.scss";
import arrowLeft from "../../../src/assets/icon/arrow_left.svg";
import arrowWhiteRight from "../../../src/assets/icon/arrow_white_right.svg";

//Context
import { PaymentContext } from "../context/PaymentContext/PaymentContext";
//hook
import { useContext } from "react";

export default function ProgressControl(props) {
  return (
    <div className="d-flex justify-content-between pt-24 border-1 border-top">
      {props.step === 2 || props.step === 3 ? (
        <StepPreviousBtn step={props.step} setStep={props.setStep} />
      ) : null}
      {props.step === 1 || props.step === 2 ? (
        <StepNextBtn step={props.step} setStep={props.setStep} />
      ) : (
        <StepFinishBtn />
      )}
    </div>
  );
}

export function StepPreviousBtn(props) {
  const handleBtn = (e) => {
    e.preventDefault();
    let step = props.step - 1;
    props.setStep(step);
  };
  return (
    <button
      onClick={handleBtn}
      className={`btn d-flex align-items-center gap-8`}
    >
      <img src={arrowLeft} alt={`arrow-left`} />
      <p>上一步</p>
    </button>
  );
}

export function StepNextBtn(props) {
  const handleBtn = (e) => {
    e.preventDefault();
    let step = props.step + 1;
    props.setStep(step);
  };

  return (
    <button
      onClick={handleBtn}
      className={`${styles["btn"]} ${styles["btn-next"]} ${
        props.step === 1 && styles["btn-next-width"]
      } d-flex gap-16 ms-lg-auto d-flex justify-content-center 
      }`}
    >
      <p className="text-white ">下一步</p>
      <img src={arrowWhiteRight} alt={"arrow-right"} />
    </button>
  );
}

export function StepFinishBtn() {
  const paymentData = useContext(PaymentContext);
  const handleBtn = (e) => {
    e.preventDefault();
    console.log(
      `持卡人姓名:${paymentData.cardName}\n卡號:${paymentData.cardNumber}\n有效期限:${paymentData.cardDate}\nCCV:${paymentData.cardCCV}\n小計:${paymentData.paymentPrice}`,
      paymentData
    );
  };
  return (
    <button
      onClick={handleBtn}
      className={`${styles["btn-next"]} d-flex gap-16`}
    >
      <p className="text-white">確認下單</p>
    </button>
  );
}
