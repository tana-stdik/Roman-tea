import React from "react";
import GreenTeaCards from "./GreenTeaCards/GreenTeaCards";
import c from './GreenTea.module.css';

const GreenTea = (props) => {
  return (
    <div className={c.main__page}>
      <GreenTeaCards className={c.main__page} goodsItem={props.goodsItem} />
    </div>
  );
}

export default GreenTea;