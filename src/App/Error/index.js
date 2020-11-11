import React from "react";
import "./index.css";

export const Error = ({ title = "Упс! Что-то пошло не так :(", message, isShown = false, toggle }) => { 
  const cssIsShown = isShown ? "Error_isShown" : "";
  
  return (
    <figure className={`Error ${cssIsShown}`}>
      <figcaption className="Error__Title">{ title }</figcaption>
      <p data-testid="error-message" className="Error__Message">{ message }</p>
      <span className="Error__X-icon" 
        onClick={() => toggle("", "")}
      >✖
      </span>
    </figure>
  );
};