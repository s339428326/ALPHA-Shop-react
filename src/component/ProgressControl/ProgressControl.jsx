import styles from "./ProgressControl.module.scss";
import arrowLeft from "../../../src/assets/icon/arrow_left.svg";
import arrowWhiteRight from "../../../src/assets/icon/arrow_white_right.svg";

export default function ProgressControl() {
  return (
    <div className="d-flex justify-content-between mt-24 pt-24 border-1 border-top">
      {/* <StepPreviousBtn /> */}
      <StepNextBtn />
    </div>
  );
}

export function StepPreviousBtn() {
  return (
    <button className={`${styles["btn"]} d-flex align-items-center gap-8`}>
      <img src={arrowLeft} alt={`arrow-left`} />
      <p>上一步</p>
    </button>
  );
}

export function StepNextBtn() {
  return (
    <button
      className={`${styles["btn"]} ${styles["btn-next"]} d-flex gap-16 ms-auto`}
    >
      <p className="text-white">下一步</p>
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
