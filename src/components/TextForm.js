import React, { useState } from "react";
import PropTypes from "prop-types";

export default function TextForm(props) {
  const handleUpClick = () => {
    // console.log("on clicked" + text);
    let newText = text.toUpperCase();
    setText(newText);
  };
  const handleLoClick = () => {
    // console.log("on clicked" + text);
    let newText = text.toLowerCase();
    setText(newText);
  };
  const handleClearClick = () => {
    // console.log("on clicked" + text);
    let newText = "";
    setText(newText);
  };
  const handleCapitaliseClick = (event) => {
    let newText = text.split(" ");
    if (text.length !== 0) {
      for (let i = 0; i < newText.length; i++) {
        let word = newText[i];
        word = word[0].toUpperCase() + word.substring(1).toLowerCase();
        newText[i] = word;
      }
      newText = newText.join(" ");
      setText(newText);
    }
  };
  const handleOnChange = (event) => {
    // console.log("on change");
    setText(event.target.value);
    if (event.target.value.length !== 0) {
      let newparaText = event.target.value.trim();
      setparaText(newparaText.split(" ").length);
    } else {
      setparaText("0");
    }
  };
  const [text, setText] = useState(""); // text is var and setText is function ////hooks
  const [paraText, setparaText] = useState("0");
  //   text = "new text"; // Wrong way to change the state
  //   setText ("new text"); // Correct way to change the state
  return (
    <>
      <div className="container">
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            id="myBox"
            rows="8"
          ></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpClick}>
          Convert to Uppercase
        </button>
        <button className="btn btn-primary mx-2" onClick={handleLoClick}>
          Convert to Lowercase
        </button>
        <button className="btn btn-primary mx-2" onClick={handleClearClick}>
          Clear Text
        </button>
        <button
          className="btn btn-primary mx-2"
          onClick={handleCapitaliseClick}
        >
          Capitalise word
        </button>
      </div>
      <div className="container my-3">
        <h2>Your Text Summary</h2>
        <p>
          {paraText} words, {text.length} characters
        </p>
        <p>{0.008 * paraText} minutes to read</p>
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </>
  );
}
TextForm.propTypes = {
  heading: PropTypes.string.isRequired,
};

TextForm.defaultProps = { heading: "Enter the text to analyze" };
