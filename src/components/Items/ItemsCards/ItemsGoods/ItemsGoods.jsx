import React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';
import { LinkContainer } from 'react-router-bootstrap';
import c from './ItemsGoods.module.css';

function ItemsGoods(props) {
  return (
  <Col>  
    <Card className={c.card_goods}>
      <Card.Img className={c.goods_img} variant="top" src={props.goodsUrl} alt="Image" />
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
      <LinkContainer className={c.goods_linkCont} to="/shopCartList">
        <Nav.Link>
          <Button className={c.goods_button} variant="success">Купити</Button>
        </Nav.Link>
      </LinkContainer>
      
    </Card>
  </Col>     
  );
}

export default ItemsGoods;