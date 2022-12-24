import React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import c from './Goods.module.css';

function Goods(props) {
  return (
    <Col>  
    <Card>
      <Card.Img className={c.goods_img} variant="top" src={props.goodsUrl} alt="Green tea" />
      <Card.Body>
        <Card.Title className={c.goods_title}>{props.name}</Card.Title>
        <Card.Text>
          {props.text}
        </Card.Text>
      </Card.Body>
    </Card>
        </Col>     
  );
}

export default Goods;