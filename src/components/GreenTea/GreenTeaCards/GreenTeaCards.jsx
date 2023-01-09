import React from 'react';
import Row from 'react-bootstrap/Row';
import GreenTeaGoods from './GreenTeaGoods/GreenTeaGoods';
import c from './GreenTeaCards.module.css';

function GreenTeaCards(props) {

  let goodsElements = props.goodsItem.map(g => (
    <GreenTeaGoods className={c.card} goodsUrl={g.goodsUrl} name={g.name} text={g.text} price={g.price} />
  ))

  return (
    <Row xs={1} md={3} className="g-4">
      {goodsElements}
    </Row>
  );
}

export default GreenTeaCards;