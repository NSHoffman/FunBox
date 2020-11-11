import React, { useState } from "react";
import "./index.css";

export const DestInput = ({ add, notifyOnChange }) => 
{
  // State Management
  const [ value, setValue ] = useState("");

  // Event Handling
  const handleChange = (e) => {
    setValue(e.target.value);
    notifyOnChange(e.target.value);
  }

  const handleSubmit = (e) => {
    if (e.keyCode === 13 && e.key.toUpperCase() === "ENTER") {
      add(value);
      setValue("");
      notifyOnChange("");
    }
  }

  // Render
  return (
    <section className="DestPanel__Input">
      <input className="DestPanel__TextField"
        placeholder="Введите адрес"
        name="region-lookup"
        autoComplete="off"
        value={value} 
        onChange={handleChange} 
        onKeyDown={handleSubmit}
      />
    </section>
  );
}
