import React from "react";
import { Col, Row } from "react-bootstrap";
import "../index.css";
import { items } from "../data";
import Fade from 'react-reveal/Fade';


const Category = ({filterByCategory , allCategory}) => {

  //to filter by category
  const onFilter = (cat) => {
    filterByCategory(cat);
  };

  return (
    <Row className="my-2 mb-5">
      <Col sm="12" className="d-flex justify-content-center">
      <Fade>
      {
        
        allCategory.length >= 1 ? (allCategory.map((cat) => {
          return(
            <button onClick={() => onFilter(cat)} style={{border: "1px solid #b45b35"}} className="btn mx-2">{cat}</button>
          )

        })) : null
        
      }</Fade>
      </Col>
    </Row>
  );
};

export default Category;
