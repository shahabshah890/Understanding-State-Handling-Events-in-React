import React, { useState } from 'react';

export default function TempForm({ heading = "Enter text below" }) {
  const [text, setText] = useState(""); // Initialize state with an empty string

  const handleUpclick = () => {
    setText(text.toUpperCase());
  };

  const handleClearClick = () => {
    setText(""); // Clears the text
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  return (
    <div>
      <h1>{heading}</h1>

      <div className="mb-3">
        <textarea
          className="form-control"
          onChange={handleOnChange}
          value={text}
          id="myBox"
          rows="9"
        ></textarea>
      </div>

      <button className="btn btn-primary mx-2" onClick={handleUpclick}>
        Convert to Uppercase
      </button>
      
      <button className="btn btn-danger mx-2" onClick={handleClearClick}>
        Delete Text
      </button>
    </div>
  );
}
