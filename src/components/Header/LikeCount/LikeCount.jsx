import React, { useState } from "react";
import c from './LikeCount.module.css';

import { BsFillHeartFill } from "react-icons/bs";
import Button from 'react-bootstrap/Button';

const Header = (props) => {

const [counter, setCounter] = useState(0);

const likeCounter = () =>{
  setCounter(counter + 1);
}

  return (
   
    <div >
      <div>
        <Button onClick={likeCounter} variant="linkt">
          <BsFillHeartFill onClick={likeCounter} className={c.header__likes}/>
        </Button>
        <span>{counter}</span>
        </div>
    </div>
  );
}

export default Header;