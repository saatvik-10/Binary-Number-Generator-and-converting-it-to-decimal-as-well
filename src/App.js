import "./App.css";
import Axios from "axios";
import { useState, useEffect } from "react";

function App() {
  function codeBinary(len) {
    let binaryNumber = "";
    for (let i = 0; i < len; i++) {
      const randBit = Math.floor(Math.random() * 2);
      binaryNumber += randBit;
    }
    return binaryNumber;
  }

  const [showBinary, setShowBinary] = useState("");
  const [input, setInput] = useState("");

  const fetchNumber1 = () => {
    setShowBinary(codeBinary(input));
  };

  useEffect(() => {
    fetchNumber1();
  }, []);

  const bin = showBinary;
  const dec = parseInt(bin, 2);

  return (
    <div className="App">
      <label className="label">How many binary digits do you want in the binary number?</label>
      <input
        className="input"
        type="number"
        placeholder="Enter The Number..."
        onChange={(evt) => {
          setInput(evt.target.value);
        }}
        value={input}
      />
      <h1 className="text1">Binary Number : {showBinary}</h1>
      <h1 className="text2">Integer : {dec}</h1>
      <button onClick={fetchNumber1} className="btn">
        {" "}
        CLICK-TO-GENERATE{" "}
      </button>
    </div>
  );
}
export default App;
