import React from "react";
import {Container, Form, Nav, Navbar, Row } from "react-bootstrap";
import "../index.css";
import { useState } from "react";

const NavBar = ({filterBySearch}) => {
  const [searchVal, setSearchVal] = useState("");
  const onSearch = (e) => {
    e.preventDefault();
    filterBySearch(searchVal);
    setSearchVal("");
  }
  return (
    <Row>
      <Navbar expand="lg" bg="dark" variant="dark">
        <Container >
          <Navbar.Brand href="#" >
          <div className="brand-color">Restaurant
          </div>
          
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            > </Nav>
            <Form className="d-flex">
              <Form.Control
                type="text"
                placeholder="Search"
                className="mx-2"
                onChange={(e)=> setSearchVal(e.target.value)}
                value={searchVal}
              />
              <button onClick={onSearch} type="submit" className="btn-search">Search</button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Row>
  );
};

export default NavBar;

