import React from "react";
import { Row, Col } from "../Grid";

function Book({ title, subtitle, authors, link, description, image, Button }) {
  return (
    <div>
      <li>
        <Row>
      <h4>{title}</h4>
      <h6>{subtitle}</h6>
      </Row>
      <Col size="md-4">
          <div className="btn-container">
            <a className="btn btn-light" target="_blank" rel="noopener noreferrer" href={link}>
              View
            </a>
            <Button />
          </div>
        </Col>
      <Row>
      <p>Written by {authors}</p>
      </Row>
      <Row>
        <Col size="12 sm-4 md-2">
          <img className="img-thumbnail img-fluid w-100" src={image} alt={title} />
        </Col>
        <Col size="12 sm-8 md-10">
          <p>{description}</p>
        </Col>
      </Row>
      </li> 
    </div>
  )
}

export default Book;