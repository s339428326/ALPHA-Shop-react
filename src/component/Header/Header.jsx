import styles from "./Header.module.scss";
//svg
import logo from "../../assets/icon/logo.svg";
import search from "../../assets/icon/search.svg";
import cart from "../../assets/icon/cart.svg";
import moon from "../../assets/icon/moon.svg";
import menu from "../../assets/icon/menu.svg";
// import sun from "../../assets/icon/sun.svg";

// props.data.filter((item) => item.quantity !== 0).length

export default function Header(props) {
  return (
    <header className={`${styles["height"]} container`}>
      <nav
        className={`d-flex justify-content-between align-items-center h-100 position-relative`}
      >
        <label htmlFor="btn-menu" className={`${styles["menu"]} d-lg-none`}>
          <img src={menu} alt="menu" />
        </label>
        <input
          className={`${styles["btn-menu"]} d-none`}
          type="checkbox"
          name="btn-menu"
          id="btn-menu"
        />
        <ul className={`${styles["menu-list"]}`}>
          <li>男款</li>
          <li>女款</li>
          <li>最新消息</li>
          <li>客製商品</li>
          <li>聯絡我們</li>
          <ul className="d-flex list-unstyled justify-content-center d-lg-none gap-40">
            <li>
              <img src={search} alt="search " />
            </li>
            <li>
              <img src={cart} alt="cart" />
            </li>
            <li>
              <img src={moon} alt="moon" />
            </li>
          </ul>
        </ul>
        <div className={`${styles["logo"]}`}>
          <img src={logo} alt="logo" />
        </div>
        <ul className={`list-unstyled mb-0 gap-30 d-none d-md-flex`}>
          <li>
            <img src={search} alt="search " />
          </li>
          <li className={`${styles["cart"]}`}>
            <div className={`${styles["item-counter"]}`}>{props.itemCount}</div>
            <img src={cart} alt="cart" />
          </li>
          <li>
            <img src={moon} alt="moon" />
          </li>
        </ul>
      </nav>
    </header>
  );
}
