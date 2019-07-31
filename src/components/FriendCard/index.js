import React from "react";
import "./style.css";

function FriendCard(props) {
  return (

      <div className="img-container" >
        <img className= "shadow-lg img-thumbnail" alt={props.name} src={props.image} onClick={props.friendClick}/>
      </div>

  );
}

export default FriendCard;
