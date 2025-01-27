import style from './Header.module.css'
import Logo from '../assets/Meubel House_Logos-05.png'

export function Header () {
  return (
    <header>
      <img className={style.Logo} src={Logo} alt='Logo '></img>
      <div className={style.title}>Furniro</div>
      <nav className={style.navbar}>
        <ul>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </nav>
    </header>
     


  );
}