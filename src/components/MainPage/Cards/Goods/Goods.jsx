import React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import c from './Goods.module.css';

function Goods(props) {
  return (
    <Col>  
    <Card>
      <Card.Img className={c.goodsImg} variant="top" src={props.goodsUrl} />
      <Card.Body>
        <Card.Title>{props.name}</Card.Title>
        <Card.Text>
          {props.text}
        </Card.Text>
      </Card.Body>
    </Card>
        </Col>     
  );
}

export default Goods;