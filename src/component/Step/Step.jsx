import styles from "./Step.module.scss";
import ProgressControl from "../ProgressControl/ProgressControl";

export default function Step() {
  return (
    <form action="">
      <Step1 />
      <ProgressControl />
    </form>
  );
}

export function Step1() {
  return (
    <div className={`d-flex flex-column`}>
      <h2 className="mb-24">寄送地址</h2>
      <div className="row">
        <div className="col-4 mb-24">
          <label className={`mb-8`} htmlFor="gender">
            稱謂
          </label>
          <select id="gender">
            <option value="DEFAULT" disabled>
              請選擇
            </option>
            <option value="male">先生</option>
            <option value="female">小姐</option>
            <option value="anther">其他</option>
          </select>
        </div>
        <div className="col-8 mb-24">
          <label className={`mb-8`} htmlFor="name">
            姓名
          </label>
          <input type="text" name="name" id="name" placeholder="請輸入姓名" />
        </div>
        <div className="col-6 mb-24">
          <label className={`mb-8`} htmlFor="phone">
            電話
          </label>
          <input
            type="tel"
            name="phone"
            id="phone"
            placeholder="請輸入行動電話"
          />
        </div>
        <div className="col-6 mb-24">
          <label className={`mb-8`} htmlFor="email">
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="請輸入電子郵件"
          />
        </div>
        <div className="col-4">
          <label className={`mb-8`} htmlFor="city">
            縣市
          </label>
          <select id="city">
            <option value="DEFAULT" disabled>
              請選擇
            </option>
            <option name="city" value="TPE">
              台北
            </option>
            <option name="city" value="TXG">
              台中
            </option>
            <option name="city" value="KHH">
              高雄
            </option>
            <option name="city" value="anther">
              其他
            </option>
          </select>
        </div>
        <div className="col-8">
          <label className={`mb-8`} htmlFor="address">
            地址
          </label>
          <input
            type="text"
            name="address"
            id="address"
            placeholder="請輸入地址"
          />
        </div>
      </div>
    </div>
  );
}

export function Step2() {
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

export function Step3() {
  return (
    <div className={`d-flex flex-column`}>
      <h2 className="mb-24">付款資訊</h2>
      <div className="row">
        <div className="col-8 mb-24">
          <label className={`mb-8`} htmlFor={"card-name"}>
            持卡人姓名
          </label>
          <input
            type="text"
            name={"card-name"}
            id={"card-name"}
            placeholder="請輸入姓名"
          />
        </div>
        <div className="col-8 mb-24 offset-col-4">
          <label className={`mb-8`} htmlFor={"card-number"}>
            卡號
          </label>

          <input
            type="text"
            name={"card-number"}
            id={"card-number"}
            placeholder="1111 2222 3333 4444"
          />
        </div>
        <div className="col-6 mb-24">
          <label className={`mb-8`} htmlFor={"card-date"}>
            有效期限
          </label>
          <input
            type="text"
            name={"card-date"}
            id={"card-date"}
            placeholder="MM/YY"
          />
        </div>
        <div className="col-6 mb-24">
          <label className={`mb-8`} htmlFor={"card-ccv"}>
            CVC / CCV
          </label>
          <input
            type="text"
            name={"card-ccv"}
            id={"card-ccv"}
            placeholder="123"
          />
        </div>
      </div>
    </div>
  );
}
