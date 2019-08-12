import React from "react";
import "./style.css";

// jumbotron component that acts as a wrapper for its children
//popular bootstrap component
function Jumbotron({ children }) {
  return <div className="jumbotron mt-4">{children}</div>;
}

export default Jumbotron;
