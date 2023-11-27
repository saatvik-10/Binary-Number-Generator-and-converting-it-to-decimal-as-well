import React from "react";
import { useState, useEffect } from "react";

export const Text = () => {
  const [text, setText] = useState("");

  useEffect(() => {
    console.log("COMPONENT MOUNTED");

    return () => {
      console.log("COMPONENT UNMOUNTED");
    };
  }, []);

  return (
    <div>
      <input
        onChange={(_event) => {
          setText(_event.target.value);
        }}
      />

      <h1>{text}</h1>
    </div>
  );
};
