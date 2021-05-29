import React from "react";
import "./card-style.css";
export const Card = (props) => {
  return (
    <div className="card-container">
      <img src={`https://robohash.org/${props.monster.id}?set=set4`}></img>
      <h2>{props.monster.name}</h2>
      <p>{props.monster.email}</p>
    </div>
  );
};
