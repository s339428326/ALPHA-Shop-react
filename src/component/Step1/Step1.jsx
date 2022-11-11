import Field from "../Field/Field";
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
        <Field col={4} id="gender" titleName="稱謂" type="gender" />
        <Field col={8} id="name" titleName="姓名" type="text" />
        <Field
          col={6}
          id="tel"
          type="tel"
          titleName="電話"
          placeholder="請輸入行動電話"
        />
        <Field
          col={6}
          id="email"
          type="email"
          titleName="Email"
          placeholder="請輸入電子郵件"
        />
        <Field
          col={4}
          id="city"
          type="city"
          titleName="縣市"
          placeholder="請輸入電子郵件"
        />
        <Field col={8} id="address" titleName="地址" type="text" />
      </div>
    </div>
  );
}
