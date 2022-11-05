import styles from "./Step2.module.scss";

export default function Step2() {
  return (
    <div className={`d-flex flex-column`}>
      <h2 className="mb-24">運送方式</h2>
      <div className="row">
        <div className="col-10">
          <div className={`${styles["mb-120"]} d-flex flex-column gap-24`}>
            <label
              htmlFor="normal-transport"
              className={`${styles["select"]} d-flex justify-content-between align-items-center`}
            >
              <div className="d-flex gap-20 align-items-center">
                <input
                  className={`${styles["transport-input"]}`}
                  type="radio"
                  name={"transport"}
                  id={"normal-transport"}
                  value="normal"
                  defaultChecked={true}
                />
                <div className="d-flex flex-column">
                  <p>標準運送</p>
                  <p>約 3~7 個工作天</p>
                </div>
              </div>
              <div>免費</div>
            </label>
            <label
              htmlFor="DHL-transport"
              className={`${styles["select"]} d-flex justify-content-between align-items-center`}
            >
              <div className="d-flex gap-20 align-items-center">
                <input
                  className={`${styles["transport-input"]}`}
                  type="radio"
                  name={"transport"}
                  id={"DHL-transport"}
                  value="DHL"
                />
                <div className="d-flex flex-column">
                  <p>貨運</p>
                  <p>48 小時內送達</p>
                </div>
              </div>
              <div>$500</div>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}
