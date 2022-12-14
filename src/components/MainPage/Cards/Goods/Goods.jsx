import React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { LinkContainer } from 'react-router-bootstrap';
import Nav from 'react-bootstrap/Nav';
import c from './Goods.module.css';

function Goods(props) {
  return (
  <Col>  
    <Card className={c.card_goods}>
      <Card.Img className={c.goods_img} variant="top" src={props.goodsUrl} alt="Green tea" />
        <LinkContainer to={props.path}>
          <Nav.Link className={c.goods_button}><Button variant="success">{props.name}</Button></Nav.Link>
        </LinkContainer>
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