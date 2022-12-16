import React from "react";
import c from './Header.module.css';
import Menu from './Menu/Menu';
import imaga from './../images/logo.png';
import { BsFillCartFill, BsFillHeartFill } from "react-icons/bs";

const Header = (props) => {
  return (
    <header className={c.grid__header}>
      <div className={c.header__logo}>
          <img src={imaga} alt='this is top image' />
      </div>
      <Menu />
      <div>
        <BsFillHeartFill className={c.header__likes}/>
      </div>
      <div >
       <BsFillCartFill className={c.header__shoppingCart}/>
      </div>
      <div className={c.header__languageSelection}>
        language selection
      </div>
    </header> 
  );
}

export default Header;