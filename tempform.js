import React, { useState } from "react";

export default function TempForm({ heading = "Enter text below" }) {
  const [text, setText] = useState(""); // Initialize state with an empty string

  const handleUpClick = () => {
    setText(text.toUpperCase());
  };

  const handleLoClick = () => {
    setText(text.toLowerCase());
  };

  const handleClearClick = () => {
    setText(""); // Clears the text
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  // Calculate words and characters dynamically
  const wordCount = text.trim() === "" ? 0 : text.trim().split(/\s+/).length;
  const charCount = text.length;

  return (
    <>
    <div className="container my-3">
      <h1>{heading}</h1>

      <div className="mb-3">
        <textarea
          className="form-control"
          onChange={handleOnChange}
          value={text}
          id="myBox"
          rows="9"
          placeholder="Type here..."
        ></textarea>
      </div>

      <button
        className="btn btn-primary mx-2"
        onClick={handleUpClick}
        disabled={text.length === 0}
      >
        Convert to Uppercase
      </button>
      <button
        className="btn btn-primary mx-2"
        onClick={handleLoClick}
        disabled={text.length === 0}
      >
        Convert to Lowercase
      </button>
      <button
        className="btn btn-danger mx-2"
        onClick={handleClearClick}
        disabled={text.length === 0}
      >
        Clear Text
      </button>

      
    </div>
    <div className="continer my-3">
      <h1>Your Text Summery</h1>
      <p>{text.split(' ').length} words and {text.length}characters</p>
      <p>{0.008 * text.split(' ').length} Minutes Read</p>
      <h2>Preview</h2>
      <p>{text}</p>
    </div>
    </>
  );
}
