//import required modules, default exports, or named exports in curly brackets
import React from "react";
import { ListItem } from "../List";
import { Row, Col } from "../Grid";
import "./style.css";

//creating component Book with 7 props
function Book({ title, subtitle, authors, link, description, image, Button }) {
  return (
    //ListItem component from List
    <ListItem>
      {/* row and column components from Grid */}
      <Row className="flex-wrap-reverse">
        <Col size="md-8">
          {/* inject title prop to h3 tag */}
          <h3 className="font-italic">{title}</h3>
          {/* inject subtitle prop to h5 tag */}
          {subtitle && <h5 className="font-italic">{subtitle}</h5>}
        </Col>
        <Col size="md-4">
          <div className="btn-container">
            {/* view is a link that targets the link prop */}
            <a className="btn btn-light" target="_blank" rel="noopener noreferrer" href={link}>
              View
            </a>
            {/* a button component*/}
            <Button />
          </div>
        </Col>
      </Row>
      <Row>
        <Col size="md-6">
          {/* inject authors prop to <p> tag */}
          <p className="font-italic small">Written by {authors}</p>
        </Col>
      </Row>
      <Row>
        <Col size="12 sm-4 md-2">
          {/* injects iamge prop with alt as title prop to img tag */}
          <img className="img-thumbnail img-fluid w-100" src={image} alt={title} />
        </Col>
        <Col size="12 sm-8 md-10">
          {/* injects description prop to p tag */}
          <p>{description}</p>
        </Col>
      </Row>
    </ListItem>
  );
}

export default Book;
