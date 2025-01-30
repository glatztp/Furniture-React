import style from "../Footer/Footer.module.css";
import { Link } from "react-router-dom";

export function Footer() {
  return (
    <div>
      <div className={style.footer}>
        <div className={style.leftF}>
          <h1 className={style.h1}>Furniro.</h1>
          <div className={style.loc}>
            <p className={style.pL}>
              400 University Drive Suite 200 Coral Gables, FL 33134 USA
            </p>
          </div>
        </div>

        <div className={style.Items}>
          <p>
            <ul className={style.ul}>
              <li className={style.p}>
                <Link to="/">Link</Link>
              </li>
              <li className={style.li}>
                <Link to="/">Home</Link>
              </li>
              <li className={style.li}>
                <Link to="./Shop">Shop</Link>
              </li>
              <li className={style.li}>
                <Link to="./About">About</Link>
              </li>
              <li className={style.li}>
                <Link to="./Contact">Contact</Link>
              </li>
            </ul>
          </p>
          <p>
            <ul className={style.ul}>
              <li className={style.p}>
                <Link to="/">Help</Link>
              </li>
              <li className={style.li}>
                <Link to="/">Payment Options</Link>
              </li>
              <li className={style.li}>
                <Link to="./Shop">Returns</Link>
              </li>
              <li className={style.li}>
                <Link to="./About">Privacy Policies</Link>
              </li>
            </ul>
          </p>
          <p>
            <ul className={style.ul}>
              <li className={style.p}>
                <Link to="/">Newsletter</Link>
              </li>
              <li className={style.li}>
                <div className={style.form}>
                  <form action="submit"></form>
                  <input type="text" placeholder="Entre Your Emai Adress" />
                </div>
              </li>
            </ul>
          </p>
          <p>
            <ul className={style.ul}>
              <li className={style.p}>
                <Link to="/"></Link>
              </li>
              <li className={style.butli}>
                <button className={style.button}>SUBSCRIBE</button>
              </li>
            </ul>
          </p>
        </div>
      </div>

      <p className={style.r}>2023 furniro. All rigths reserved</p>
    </div>
  );
}
