import React from "react";

function Card(props) {
  return (
    <div className="card-block">
      <div className="card-output-block">
        <span className="card-name">{props.header}</span>
        <span className="card-value"> {props.value}</span>
      </div>
    </div>
  );
}

export default Card;
