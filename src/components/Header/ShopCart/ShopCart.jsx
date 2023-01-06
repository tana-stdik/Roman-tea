import react, { useState } from 'react';
import { BsFillCartFill } from "react-icons/bs";
import Button from 'react-bootstrap/Button';
import c from './ShopCart.module.css';
import ShopCartList from './ShopCartList/ShopCartList';

const ShopCart = (props) => {

  let [cart, setCart] = useState(false);

  return (
    <div >
      <Button variant="linkt" onClick={() => setCart(cart = !cart)}>
        <BsFillCartFill className={c.header__shoppingCart}/>
      </Button>
      {cart &&
      (<ShopCartList />
      )}
    </div>
  );
}

export default ShopCart;