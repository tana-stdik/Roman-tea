import React from 'react';
import Row from 'react-bootstrap/Row';
import ItemsGoods from './ItemsGoods/ItemsGoods';
import c from './ItemsCards.module.css';

function ItemsCards(props) {

  let goodsElements = props.goodsItem.map(g => (
    <ItemsGoods className={c.card} goodsUrl={g.goodsUrl} name={g.name} text={g.text} price={g.price} />
  ))

  return (
    <Row xs={1} md={3} className="g-4">
      {goodsElements}
    </Row>
  );
}

export default ItemsCards;