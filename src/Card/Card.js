import React from "react";

function Card(props) {
  return (
    <div className="card-block">
      <h3>{props.header}</h3>
      <div className="card-output-block">{props.value}</div>  
    </div>
  )
}

export default Card;
