import React from "react";
import Nav from 'react-bootstrap/Nav';
import { LinkContainer } from 'react-router-bootstrap';
import c from './Footer.module.css';

const Footer = (props) => {
  return (
    <footer className={c.grid__footer}>
      <div className={c.footer__reviews}>
        <LinkContainer to="/about">
            <Nav.Link>Відгуки</Nav.Link>
          </LinkContainer>
      </div>
      <div className={c.footer__forTea}>
        <LinkContainer to="/about">
            <Nav.Link>Про чай</Nav.Link>
          </LinkContainer>
      </div>
      <div className={c.footer__contacts}>
        <LinkContainer to="/">
            <Nav.Link>Контакти</Nav.Link>
          </LinkContainer>
      </div>
    </footer> 
  );
}

export default Footer;