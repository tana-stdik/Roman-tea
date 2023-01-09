import React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import c from './GreenTeaGoods.module.css';

function GreenTeaGoods(props) {
  return (
  <Col>  
    <Card className={c.card_goods}>
      <Card.Img className={c.goods_img} variant="top" src={props.goodsUrl} alt="Green tea" />
      <Card.Body>
        <Card.Title className={c.goods_title}>
          {props.name}
        </Card.Title>
        <Card.Text>
          {props.text}
        </Card.Text>
        <Card.Text className={c.goods_price}>
          Ціна: {props.price} грн.
        </Card.Text>
      </Card.Body>
      <Button className={c.goods_button} variant="success">Купити</Button>
    </Card>
  </Col>     
  );
}

export default GreenTeaGoods;