import React from "react";
import ItemsCards from "./ItemsCards/ItemsCards";
import c from './Items.module.css';

const Items = (props) => {
  return (
    <div className={c.main__page}>
      <ItemsCards className={c.main__page} goodsItem={props.goodsItem} />
    </div>
  );
}

export default Items;