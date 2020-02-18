import React from "react";
import "./style.css";



function FriendCard(props) {
  return (
    <div className="card">
      <div className="img-container">
        <img alt={props.name} src={props.image} />
        <span className="remove" onClick={() => props.friend(props.id)}>𝘅</span>

      </div>
      <div className="content">
        <ul>
          <li>
            <strong>Name:</strong> {props.name}
          </li>
          <li>
            <strong>Occupation:</strong> {props.occupation}
          </li>
          <li>
            <strong>Address:</strong> {props.location}
          </li>
        </ul>
      </div>
      <span className="remove" onClick={() => props.removefriend(props.id)}>𝘅</span>
    </div>
  );
}

export default FriendCard;
