import react, { useState } from 'react';
import c from './ShopCartList.module.css';

const ShopCartList = (props) => {

  const [orderGoods, setOrderGoods] = useState([]);
  console.log(orderGoods);
  console.log('{props.name}');

  return (
    <div className={c.card__shopCart}>
      {props.name}
    </div>
     
  );
}

export default ShopCartList;