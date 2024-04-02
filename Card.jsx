import React from "react";

import Avatar from "./Avatar";
import Detail from "./Detail";


function Card(props) {
  return (
    
    <div className="card">
      <div className="top">
        <h2 className="first_name">{props.first_name} {props.last_name}</h2>
        
        <Avatar img={props.img} />
      </div>
      <div className="bottom">
        <Detail detailInfo={props.gender} />
        <Detail detailInfo={props.domain} />
        <Detail detailInfo={props.available} />
        <Detail detailInfo={props.email} />
        <button className="btn btn-primary">Delete</button>
      </div>
    </div>
  );
}

export default Card;
