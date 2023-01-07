import React from 'react';
import Row from 'react-bootstrap/Row';
import Goods from './Goods/Goods';
import c from './Cards.module.css';

function Cards(props) {

  let goodsElements = props.goodsItem.map(g => (
    <Goods className={c.card} goodsUrl={g.goodsUrl} path={g.path} name={g.name} text={g.text}/>
  ))

  return (
    <Row xs={1} md={3} className="g-4">
      {goodsElements}
    </Row>
  );
}

export default Cards;