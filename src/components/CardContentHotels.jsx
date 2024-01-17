import React from "react";
import Card from "react-bootstrap/Card";

function CardContentHotels({ img, title, adress, price }) {
  return (
    <Card style={{ width: "15rem" }} className="p-0">
      <Card.Img
        variant="top"
        src={img}
        style={{ width: "100%" }}
        className="img-fluid"
      />
      <Card.Body>
        <p style={{ color: "#8D4B38", fontSize:"12px" }}>{adress}</p>
        <Card.Title style={{color: "#222222"}} className="fw-bold">{title}</Card.Title>
        <Card.Text>{price}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default CardContentHotels;
