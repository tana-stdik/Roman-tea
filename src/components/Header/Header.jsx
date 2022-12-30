import React from "react";
import c from './Header.module.css';
import Menu from './Menu/Menu';
import LikeCount from './LikeCount/LikeCount';
import LanguageSelection from "./LanguageSelection/LanguageSelection";
import ShopCart from "./ShopCart/ShopCart";

const Header = (props) => {
  return (
    <header className={c.grid__header}>
      <Menu />
      <LikeCount />
      <ShopCart />
      <div className={c.header__languageSelection}>
        <LanguageSelection />
      </div>
    </header> 
  );
}

export default Header;