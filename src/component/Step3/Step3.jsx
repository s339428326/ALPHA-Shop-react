//context
import { PaymentContext } from "../context/PaymentContext/PaymentContext";
//hook
import { useContext } from "react";

export default function Step3(props) {
  //換頁時使用d-none遮蔽元件
  const stepStyle = () => {
    if (props.step === 1 || props.step === 2) {
      return "d-none";
    }
    return null;
  };
  //context
  const paymentData = useContext(PaymentContext);
  //get PaymentContext value
  const handleName = (e) => {
    paymentData.cardName = e.target.value;
  };
  const handleNumber = (e) => {
    paymentData.cardNumber = e.target.value;
  };
  const handleCardDate = (e) => {
    paymentData.cardDate = e.target.value;
  };
  const handleCardCCV = (e) => {
    paymentData.cardCCV = e.target.value;
  };

  return (
    <div className={`d-flex flex-column ${stepStyle()}`}>
      <h2 className="mb-24">付款資訊</h2>
      <div className="row">
        <div className="col-8 mb-24">
          <label className={`mb-8`} htmlFor={"card-name"}>
            持卡人姓名
          </label>
          <input
            onChange={handleName}
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
            onChange={handleNumber}
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
            onChange={handleCardDate}
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
            onChange={handleCardCCV}
            type="password"
            name={"card-ccv"}
            id={"card-ccv"}
            placeholder="123"
          />
        </div>
      </div>
    </div>
  );
}
