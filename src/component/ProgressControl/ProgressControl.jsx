import styles from "./ProgressControl.module.scss";
import arrowLeft from "../../../src/assets/icon/arrow_left.svg";
import arrowWhiteRight from "../../../src/assets/icon/arrow_white_right.svg";

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
  const btnHandler = (e) => {
    e.preventDefault();
    let step = props.step - 1;
    props.setStep(step);
  };
  return (
    <button
      onClick={btnHandler}
      className={`btn d-flex align-items-center gap-8`}
    >
      <img src={arrowLeft} alt={`arrow-left`} />
      <p>上一步</p>
    </button>
  );
}

export function StepNextBtn(props) {
  const btnHandler = (e) => {
    e.preventDefault();
    let step = props.step + 1;
    props.setStep(step);
  };

  return (
    <button
      onClick={btnHandler}
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
  return (
    <button className={`${styles["btn-next"]} d-flex gap-16`}>
      <p className="text-white">確認下單</p>
    </button>
  );
}
