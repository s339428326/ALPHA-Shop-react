import styles from "./Footer.module.scss";
import logo from "../../assets/icon/logo.svg";
import ins from "../../assets/icon/ins.svg";
import whatApp from "../../assets/icon/whatApp.svg";
import fb from "../../assets/icon/fb.svg";

export default function Footer() {
  return (
    <footer className={`${styles["bg-footer"]} ${styles["footer"]}`}>
      <div className="container d-flex flex-column flex-md-row justify-content-between align-items-center align-items-md-start">
        <div className="my-auto">
          <img src={logo} alt="logo" />
        </div>
        <div className="my-24 my-md-0">
          <p className="fs-4 fw-bold mb-24">客服服務</p>
          <ul className="list-unstyled mb-0 d-flex flex-column gap-8">
            <li>運送說明</li>
            <li>退換貨相關</li>
            <li>付款資訊</li>
            <li>FAQ</li>
          </ul>
        </div>
        <div className="my-24 my-md-0">
          <p className="fs-4 fw-bold mb-24">關於我們</p>
          <ul className="list-unstyled mb-0 d-flex flex-column gap-8">
            <li>品牌故事</li>
            <li>媒體聯繫</li>
            <li>Press kit</li>
          </ul>
        </div>
        <div className="my-24 my-md-0">
          <p className="fs-4 fw-bold mb-24">資訊</p>
          <ul className="list-unstyled mb-0 d-flex flex-column gap-8">
            <li>隱私權政策</li>
            <li>Cookie</li>
            <li>GDPR</li>
          </ul>
        </div>
        <div>
          <p className="fs-4 fw-bold mb-24">追蹤 ALPHA Shop</p>
          <ul className="list-unstyled mb-0 d-flex flex-column gap-8 mb-0">
            <li className="mx-auto mx-md-0">
              <a href="tel:+886 02123-45678">+886 02123-45678</a>
            </li>
            <ul className="list-unstyled d-flex gap-16 mb-0 justify-content-center justify-content-md-start">
              <li>
                <img className={`${styles["social-icon"]}`} src={fb} alt="fb" />
              </li>
              <li>
                <img
                  className={`${styles["social-icon"]}`}
                  src={ins}
                  alt="ins"
                />
              </li>
              <li>
                <img
                  className={`${styles["social-icon"]}`}
                  src={whatApp}
                  alt="whatApp"
                />
              </li>
            </ul>
          </ul>
        </div>
      </div>
    </footer>
  );
}
