export default function Field(props) {
  //Taiwan city data
  const cityData = [
    "基隆市",
    "嘉義市",
    "台北市",
    "嘉義縣",
    "新北市",
    "台南市",
    "桃園縣",
    "高雄市",
    "新竹市",
    "屏東縣",
    "新竹縣",
    "台東縣",
    "苗栗縣",
    "花蓮縣",
    "台中市",
    "宜蘭縣",
    "彰化縣",
    "澎湖縣",
    "南投縣",
    "金門縣",
    "雲林縣",
    "連江縣",
  ];
  const cityList = cityData.map((item) => (
    <option key={`${item}`} value={`${item}`}>
      {item}
    </option>
  ));
  // minimum props setting check
  //還沒建立
  //col-X X value setting with BootStrap
  const col = props.col ? `col col-${props.col}` : "col";
  const offset = props.offset || null;
  //props.id is undefined then id = titleName
  const id = props.id || props.titleName;
  //props.data
  const data = props.data;
  //check Data context and props dataValue
  const checkData = data && data[`${props.dataValue}`];
  //Get input value to change props.data context value
  const handleDataValue = (e) => {
    data[`${props.dataValue}`] = e.target.value;
  };
  //placeholder
  const placeholder = props.placeholder || `請輸入${props.titleName}`;

  //typeStyle
  const typeStyle = checkData ? "context" : props.type;
  //switch case email, password, city, gender, tel
  switch (typeStyle) {
    case "city":
      return (
        <div className={`${col} mb-24`}>
          <label className={`mb-8`} htmlFor={`${id}`}>
            縣市
          </label>
          <select defaultValue="DEFAULT" id={`${id}`}>
            <option value="DEFAULT" disabled>
              請選擇
            </option>
            {cityList}
          </select>
        </div>
      );
    case "gender":
      return (
        <div className={`${col} mb-24`}>
          <label className={`mb-8`} htmlFor={`${id}`}>
            稱謂
          </label>
          <select defaultValue="DEFAULT" id={`${id}`}>
            <option value="DEFAULT" disabled>
              請選擇
            </option>
            <option value="male">先生</option>
            <option value="female">小姐</option>
            <option value="anther">其他</option>
          </select>
        </div>
      );
    case "context":
      return (
        <div className={`${col} ${offset} mb-24`}>
          <label className={`mb-8`} htmlFor={`${id}`}>
            {props.titleName}
          </label>
          <input
            onChange={handleDataValue}
            type={props.type}
            name={`${id}`}
            id={`${id}`}
            placeholder={placeholder}
          />
        </div>
      );
    default:
      return (
        <div className={`${col} ${offset} mb-24`}>
          <label className={`mb-8`} htmlFor={`${id}`}>
            {props.titleName}
          </label>
          <input
            type={props.type}
            name={`${id}`}
            id={`${id}`}
            placeholder={placeholder}
          />
        </div>
      );
  }
}

//write component text minimum props
//<Field col={3} id="check" titleName="確認" type="text" data={paymentData} dataValue="cardName"/>
