import React, { useState } from "react";
import translate from "translate";

export default function TextForm(props) {
  const onUpclick = () => {
    console.log("Your Function Click..!!!");
    let newtext = text.toUpperCase();
    setText(newtext);
  };

  const onLoclick = () => {
    console.log("Your Function Click!!");
    let newtext = text.toLowerCase();
    setText(newtext);
  };

  const onUpchange = (event) => {
    setText(event.target.value);
  };
  const convertGujarati = async () => {
    try {
      let result = await translate(text, {
        to: "gu",
      });
      setText(result || "");
    } catch (error) {
      console.log(error);
      alert("Translation Error");
    }
  };

  const convertHindi = async () => {
    try {
      let result = await translate(text, {
        to: "hi",
      });
      setText(result || "");
    } catch (error) {
      console.log(error);
      alert("Translation Error");
    }
  };
  const changeColor = () => {
    if (textColor === "black") {
      setTextColor("green");
    } else {
      setTextColor(" light  pink");
    }
  };

  const makeBold = () => {
    setisBold(!isBold);
  };

  const toggledarkmode = () => {
    if (bgColor === "white") {
      setBgColor("black");
      setTextColor("white");
    } else {
      setBgColor("white");
      setTextColor("black");
    }
  };

  const [text, setText] = useState("");
  const [textColor, setTextColor] = useState("black");
  const [isBold, setisBold] = useState(false);
  // const [page, setPage] = useState("");
  // const [mode, setMode] = useState("light");

  const [bgColor, setBgColor] = useState("white");

  return (
    <>
     
      <div
        className="font-group "
        style={{ color: textColor, backgroundColor: bgColor }}
      >
        <h1>{props.title}</h1>
        <div className="form-group pt-5 text-center">
          <label for="emailInput fw-3">Email address</label>
          <textarea
            className="form-control mx-5"
            value={text}
            onChange={onUpchange}
            style={{ color: textColor, fontWeight: isBold ? "bold" : "normal" }}
          ></textarea>

          <button className="btn btn-primary my-3 mx-3" onClick={onUpclick}>
            Upper
          </button>
          <button className="btn btn-primary my-3 mx-3" onClick={onLoclick}>
            Lower
          </button>
          <button
            className="btn btn-primary my-3 mx-3"
            onClick={convertGujarati}
          >
            Gujarati
          </button>
          <button className="btn btn-primary my-3 mx-3" onClick={convertHindi}>
            Hindi
          </button>
          <button className="btn btn-primary my-3 mx-3" onClick={changeColor}>
            Color
          </button>
          <button className="btn btn-primary my-3 mx-3" onClick={makeBold}>
            Bold
          </button>
          <button
            className="btn btn-primary my-3 mx-3"
            onClick={toggledarkmode}
          >
            darkmode
          </button>
          <div className="container" style={{ color: textColor }}>
            <h2>Your text summary</h2>
            <p>
              {text.split("").length - 1}word and {text.length} characters
            </p>
            <p>{0.008 * text.split("").length} Time</p>
            <h2>Preview</h2>
            <p>{text}</p>
          </div>
        </div>
      </div>

      {/* {page === "Home" && <div className="container"></div>}

      {page === "About" && (
        <div className="container mt-5">
         
        </div> */}
      {/* )} */}
    </>
  );
}
