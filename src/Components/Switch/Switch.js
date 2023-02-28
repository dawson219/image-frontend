import React from "react";
import "./Switch.css";

const Switch = ({ dark, setDark }) => {
  return (
    <label class="switch">
      <input
        type="checkbox"
        onChange={(e) => {
          setDark(!dark);
        }}
        value={dark ? true : false}
      />
      <span class="slider round"></span>
    </label>
  );
};

export default Switch;
