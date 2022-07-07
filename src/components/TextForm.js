import React, { useState } from "react";
import PropTypes from "prop-types";

export default function TextForm(props) {
  const handleUpClick = () => {
    // console.log("on clicked" + text);
    let newText = text.toUpperCase();
    setText(newText);
    if (newText.length !== 0) {
      props.showAlert("Converted to uppercase", "success");
    }
  };
  const handleLoClick = () => {
    // console.log("on clicked" + text);
    let newText = text.toLowerCase();
    setText(newText);
    if (newText.length !== 0) {
      props.showAlert("Converted to lowercase", "success");
    }
  };
  const handleClearClick = () => {
    // console.log("on clicked" + text);
    if (text.length !== 0) {
      let newText = "";
      setText(newText);
      // setparaText("0");
      props.showAlert("Text has been Cleared", "success");
    }
  };
  const handleCapitaliseClick = (event) => {
    let newText = text.split(/[ ]+/);
    if (text.length !== 0) {
      for (let i = 0; i < newText.length; i++) {
        let word = newText[i];
        word = word[0].toUpperCase() + word.substring(1).toLowerCase();
        newText[i] = word;
      }
      newText = newText.join(" ");
      setText(newText);
      props.showAlert("Converted to capitalize", "success");
    }
  };
  const handleOnChange = (event) => {
    // console.log("on change");
    setText(event.target.value);
    // if (event.target.value.length !== 0) {
    //   let newparaText = event.target.value.trim();
    //   let nextlines = newparaText.split("\n");
    //   setparaText(newparaText.split(/[ ]+/).length + nextlines.length - 1);
    // } else {
    //   setparaText("0");
    // }
  };
  const handleCopy = () => {
    if (text.length !== 0) {
      // var gettext = document.getElementById("myBox");
      // gettext.select();
      // navigator.clipboard.writeText(gettext.value);
      navigator.clipboard.writeText(text);
      // document.getSelection().removeAllRanges();
      props.showAlert("Copied to Clipboard", "success");
    }
  };
  const handleExtraSpaces = () => {
    if (text.length !== 0) {
      let newText = text.split(/[ ]+/);
      setText(newText.join(" "));
      props.showAlert("Extra spaces have been removed", "success");
    }
  };
  const [text, setText] = useState(""); // text is var and setText is function ////hooks
  // const [paraText, setparaText] = useState("0");
  //   text = "new text"; // Wrong way to change the state
  //   setText ("new text"); // Correct way to change the state
  return (
    <>
      <div className="container">
        <h1
          style={{
            color: props.mode === "dark" ? "white" : "black",
          }}
          className="mb-2"
        >
          {props.heading}
        </h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            style={{
              backgroundColor:
                props.mode === "light" ? "white" : "rgb(36 74 104)",
              color: props.mode === "dark" ? "white" : "black",
            }}
            id="myBox"
            rows="8"
          ></textarea>
        </div>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-2 my-2"
          onClick={handleUpClick}
        >
          Convert to Uppercase
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-2 my-2"
          onClick={handleLoClick}
        >
          Convert to Lowercase
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-2 my-2"
          onClick={handleClearClick}
        >
          Clear Text
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-2 my-2"
          onClick={handleCapitaliseClick}
        >
          Capitalise word
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-2 my-2"
          onClick={handleCopy}
        >
          Copy Text
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-2 my-2"
          onClick={handleExtraSpaces}
        >
          Remove Extra Spaces
        </button>
      </div>
      <div className="container my-3">
        <h2
          style={{
            color: props.mode === "dark" ? "white" : "black",
          }}
        >
          Your Text Summary
        </h2>
        <p
          style={{
            color: props.mode === "dark" ? "white" : "black",
          }}
        >
          {
            text.split(/\s+/).filter((element) => {
              return element.length !== 0;
            }).length
          }{" "}
          words, {text.replace(/ /g, "").length} characters
        </p>
        <p
          style={{
            color: props.mode === "dark" ? "white" : "black",
          }}
        >
          {0.008 *
            text.split(/\s+/).filter((element) => {
              return element.length !== 0;
            }).length}{" "}
          minutes to read
        </p>
        <h2
          style={{
            color: props.mode === "dark" ? "white" : "black",
          }}
        >
          Preview
        </h2>
        <p
          style={{
            color: props.mode === "dark" ? "white" : "black",
          }}
        >
          {text.length > 0 ? text : "Nothing to preview here!"}
        </p>
      </div>
    </>
  );
}
TextForm.propTypes = {
  heading: PropTypes.string.isRequired,
};

TextForm.defaultProps = { heading: "Enter the text to analyze" };
