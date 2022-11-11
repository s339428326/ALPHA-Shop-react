//component
import Field from "../Field/Field";

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

  return (
    <div className={`d-flex flex-column ${stepStyle()}`}>
      <h2 className="mb-24">付款資訊</h2>
      <div className="row">
        <Field
          col="8"
          id="card-name"
          titleName="持卡人姓名"
          type="text"
          data={paymentData}
          dataValue="cardName"
          placeholder="請輸入姓名"
        />
        <Field
          col="8"
          id="card-number"
          titleName="卡號"
          type="text"
          data={paymentData}
          dataValue="cardNumber"
        />
        <Field
          col={6}
          id="card-data"
          titleName="有效期限"
          type="text"
          data={paymentData}
          dataValue="cardDate"
          placeholder="MM/YY"
        />
        <Field
          col={6}
          id="card-ccv"
          titleName=" CVC / CCV"
          type="password"
          data={paymentData}
          dataValue="cardCCV"
          placeholder="123"
        />
      </div>
    </div>
  );
}
