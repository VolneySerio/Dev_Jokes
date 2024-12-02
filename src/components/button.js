import React from "react";
import "../components/button.css";

const Button = (props) => {
  return <button onClick={props.callApi}>Click me!</button>;
};
export default Button;
