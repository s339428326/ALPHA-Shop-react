import styles from "./StepProgress.module.scss";

export default function StepProgressBar(props) {
  return (
    <div className="d-flex justify-content-between position-relative">
      <div
        className={`${styles["step"]} ${styles["step-1"]} ${
          props.step === 2 || props.step === 3 ? styles["active-1"] : null
        } `}
      >
        <p className="d-none d-md-flex">寄送地址</p>
      </div>
      <div
        className={`${styles["step"]} ${styles["step-2"]} ${
          props.step === 3 ? styles["active-2"] : null
        }`}
      >
        <p className="d-none d-md-flex">運送方式</p>
      </div>
      <div className={`${styles["step"]} ${styles["step-3"]}`}>
        <p className="d-none d-md-flex">付款方式</p>
      </div>
    </div>
  );
}
