import React from "react";
import c from './Header.module.css';
import Menu from './Menu/Menu';
import LikeCount from './LikeCount/LikeCount';
import { BsFillCartFill, BsFillHeartFill } from "react-icons/bs";
import Button from 'react-bootstrap/Button';
import LanguageSelection from "./LanguageSelection/LanguageSelection";

const Header = (props) => {
  return (
    <header className={c.grid__header}>
      <Menu />
      <LikeCount />
      <div >
      <Button variant="linkt">
       <BsFillCartFill className={c.header__shoppingCart}/>
      </Button>
      </div>
      <div className={c.header__languageSelection}>
        <LanguageSelection />
      </div>
    </header> 
  );
}

export default Header;