import React from "react";

function CardContentHotels({ img, title, adress, price }) {
  return (
    <div className="card p-0 mb-4" style={{ width: "15rem" }}>
      <img src={img} className="card-img-top img-fluid" alt="Hotel" />
      <div className="card-body">
        <p style={{ color: "#8D4B38", fontSize: "10px" }}>{adress}</p>
        <h6 className="card-title fw-bold" style={{ color: "#222222" }}>
          {title}
        </h6>
        <p className="card-text">{price}</p>
      </div>
    </div>
  );
}

export default CardContentHotels;
