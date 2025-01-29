import style from "../Navbar/Navbar.module.css";
import Logo from "../../assets/Frame 168.svg"
import icon from "../../assets/Vector.png";
import icon2 from "../../assets/akar-icons_search.svg";
import icon3 from "../../assets/akar-icons_heart.svg";
import icon4 from "../../assets/ant-design_shopping-cart-outlined.svg"
import { Link } from "react-router-dom";

export function Navbar() {
  return (
    <header>
      <div className={style.contaneir}>
        <img className={style.Logo} src={Logo} alt="Logo "></img>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="./Shop">Shop</Link>
            </li>
            <li>
              <Link to="./About">About</Link>
            </li>
            <li>
              <Link to="./Contact">Contact</Link>
            </li>
          </ul>

          <ul className={style.list_icon}>
            <li>
              <Link to="#">
                <img className={style.icon} src={icon} alt="Icon"></img>
              </Link>
            </li>
            <li>
              <Link to="#">
                <img className={style.icon} src={icon2} alt="Icon"></img>
              </Link>
            </li>
            <li>
              <Link to="#">
                <img className={style.icon} src={icon3} alt="Icon"></img>
              </Link>
            </li>
            <li>
              <Link to="#">
                <img className={style.icon} src={icon4} alt="Icon"></img>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
