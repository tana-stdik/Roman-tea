import React from "react";
import logo from './logo.svg';
import c from './Header.module.css';
import Menu from './Menu/Menu';
import { BsFillCartFill, BsFillHeartFill } from "react-icons/bs";
import LanguageSelection from "./LanguageSelection/LanguageSelection";

const Header = (props) => {
  return (
    <header className={c.grid__header}>
      <div className={c.header__logo}>
      <img src={logo} alt="logo" />
      </div>
      <Menu />
      <div>
        <BsFillHeartFill className={c.header__likes}/>
      </div>
      <div >
       <BsFillCartFill className={c.header__shoppingCart}/>
      </div>
      <div className={c.header__languageSelection}>
        <LanguageSelection />
      </div>
    </header> 
  );
}

export default Header;