import React from "react";
import Button from 'react-bootstrap/Button';
import c from './Footer.module.css';

const Footer = (props) => {
  return (
    <footer className={c.grid__footer}>
      <div className={c.footer__reviews}>
      <Button variant="outline-success">Відгуки</Button>{' '}
      </div>
      <div className={c.footer__forTea}>
      <Button variant="outline-success">Про чай</Button>{' '}
      </div>
      <div className={c.footer__contacts}>
      <Button variant="outline-success">Контакти</Button>{' '}
      </div>
    </footer> 
  );
}

export default Footer;