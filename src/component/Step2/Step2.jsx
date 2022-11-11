import styles from "./Step2.module.scss";

const currency = function (number) {
  return Intl.NumberFormat("en").format(number);
};

export default function Step2(props) {
  //換頁時使用d-none遮蔽元件
  const stepStyle = () => {
    if (props.step === 1 || props.step === 3) {
      return "d-none";
    }
    return null;
  };
  return (
    <div className={`d-flex flex-column ${stepStyle()}`}>
      <h2 className="mb-24">運送方式</h2>
      <div className="row">
        <div className="col col-lg-10">
          <div className={`${styles["mb-120"]} d-flex flex-column gap-24`}>
            <DeliveryFee
              setDeliveryFee={props.setDeliveryFee}
              id="free"
              title="標準運送"
              day="約 3~7 個工作天"
              price={0}
              defaultChecked={true}
            />
            <DeliveryFee
              setDeliveryFee={props.setDeliveryFee}
              id="DHL"
              title="貨運"
              day="48 小時內送達"
              price={500}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export function DeliveryFee(props) {
  const handlePrice = () => {
    props.setDeliveryFee(props.price);
  };
  return (
    <label
      onClick={handlePrice}
      htmlFor={props.id}
      className={`${styles["select"]} d-flex justify-content-between align-items-center`}
    >
      <div className="d-flex gap-20 align-items-center">
        <input
          className={`${styles["transport-input"]}`}
          type="radio"
          name={"transport"}
          id={props.id}
          value={props.price}
          defaultChecked={props.defaultChecked}
        />
        <div className="d-flex flex-column">
          <p>{props.title}</p>
          <p>{props.day}</p>
        </div>
      </div>
      <div>{props.price === 0 ? "免費" : `$ ${currency(props.price)}`}</div>
    </label>
  );
}
