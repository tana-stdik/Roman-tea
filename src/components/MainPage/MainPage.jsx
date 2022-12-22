import React from "react";
import Cards from "./Cards/Cards";
import c from './MainPage.module.css';

const MainPage = (props) => {
  return (
    <div className={c.main__page}>
      <Cards className={c.main__page} goodsItem={props.goodsItem} />
    </div>
  );
}

export default MainPage;