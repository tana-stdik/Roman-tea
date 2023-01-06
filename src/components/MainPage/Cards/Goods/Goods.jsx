import React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import c from './Goods.module.css';

function Goods(props) {
  return (
  <Col>  
    <Card className={c.card_goods}>
      <Card.Img className={c.goods_img} variant="top" src={props.goodsUrl} alt="Green tea" />
      <Button className={c.goods_button} variant="success">{props.name}</Button>
      <Card.Body>
        <Card.Text>
          {props.text}
        </Card.Text>
      </Card.Body>
    </Card>
  </Col>     
  );
}

export default Goods;