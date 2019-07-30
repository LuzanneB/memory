import React from "react";
import "./style.css";

function Title(props) {
  return ( 
    <nav className="navbar navbar-dark bg-dark mb-2">
    <span className="navbar-brand mb-0 h1">{props.children}</span>
    </nav>
   )}

export default Title;
