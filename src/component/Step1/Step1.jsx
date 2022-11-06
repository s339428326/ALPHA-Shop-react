export default function Step1(props) {
  //換頁時使用d-none遮蔽元件
  const stepStyle = () => {
    if (props.step === 2 || props.step === 3) {
      return "d-none";
    }
    return null;
  };
  return (
    <div className={`d-flex flex-column ${stepStyle()}`}>
      <h2 className="mb-24">寄送地址</h2>
      <div className="row">
        <div className="col-4 mb-24">
          <label className={`mb-8`} htmlFor="gender">
            稱謂
          </label>
          <select defaultValue="DEFAULT" id="gender" required={true}>
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
          <select defaultValue="DEFAULT" id="city">
            <option value="DEFAULT" disabled>
              請選擇
            </option>
            <option value="TPE">台北</option>
            <option value="TXG">台中</option>
            <option value="KHH">高雄</option>
            <option value="anther">其他</option>
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
