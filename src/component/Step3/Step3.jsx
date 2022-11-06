export default function Step3(props) {
  //換頁時使用d-none遮蔽元件
  const stepStyle = () => {
    if (props.step === 1 || props.step === 2) {
      return "d-none";
    }
    return null;
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
