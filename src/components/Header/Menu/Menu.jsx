import React from "react";
import logo from './logo.svg';
import c from './Menu.module.css';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { LinkContainer } from 'react-router-bootstrap';
import { useContext } from 'react';
import { LanguageContext } from '../../../languageContext';

const titles = {
  ua: ["Про нас", "Контакти", "Доставка", "Оплата", "Я шукаю", "Пошук"],
  ru: ["О нас", "Контакты", "Доставка", "Оплата", "Я ищу", "Поиск"],
  en: ["About", "Contacts", "Delivery", "Payment", "I'm looking", "Search"],
}


const Menu = (props) => {
  const expand ="sm";
  const languageContext = useContext(LanguageContext);

  return (
    <div className={c.header__navbar}>
      <nav className={c.header__nav}>
          <Navbar key={expand} expand={expand} className="mb-3">
            <Container fluid>
              <LinkContainer to="/">
              <Navbar.Brand><img src={logo} className={c.header__logo} alt="logo" /></Navbar.Brand>
              </LinkContainer>
              <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
              <Navbar.Offcanvas
                id={`offcanvasNavbar-expand-${expand}`}
                aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                placement="end">
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Offcanvas
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <LinkContainer to="/about">
                    <Nav.Link>{titles[languageContext.language][0]}</Nav.Link>
                  </LinkContainer>
                  <LinkContainer to="/contacts">
                    <Nav.Link>{titles[languageContext.language][1]}</Nav.Link>
                  </LinkContainer>
                  <LinkContainer to="/delivery">
                    <Nav.Link>{titles[languageContext.language][2]}</Nav.Link>
                  </LinkContainer>
                  <LinkContainer to="/payment">
                    <Nav.Link>{titles[languageContext.language][3]}</Nav.Link>
                  </LinkContainer>
                </Nav>
                <Form className="d-flex">
                  <Form.Control
                    type="search"
                    placeholder={titles[languageContext.language][4]}
                    className="me-2"
                    aria-label="Search"
                  />
                  <Button variant="outline-success">{titles[languageContext.language][5]}</Button>
                </Form>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
          </Navbar>
        </nav>
    </div>
  );
}

export default Menu;