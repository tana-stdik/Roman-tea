import react, { useState } from 'react';
import c from './ShopCartList.module.css';

const ShopCartList = (props) => {

  const [orderGoods, setOrderGoods] = useState([]);
  console.log(orderGoods);

  return (
    <div className={c.card__shopCart}>

    </div>
     
  );
}

export default ShopCartList;