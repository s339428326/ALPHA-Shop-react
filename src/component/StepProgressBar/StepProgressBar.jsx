import styles from "./StepProgressBar.module.scss";

export default function StepProgressBar() {
  return (
    <div className="d-flex justify-content-between position-relative">
      <div
        className={`${styles["step"]} ${styles["step-1"]} ${styles["active"]}`}
      >
        <p className={`${styles["number"]}`}>1</p>
        <p className="d-none d-md-flex">寄送地址</p>
      </div>
      <div className={`${styles["step"]} ${styles["step-2"]}`}>
        <p className={`${styles["number"]}`}>2</p>
        <p className="d-none d-md-flex">運送方式</p>
      </div>
      <div className={`${styles["step"]}`}>
        <p className={`${styles["number"]}`}>3</p>
        <p className="d-none d-md-flex">付款方式</p>
      </div>
    </div>
  );
}
