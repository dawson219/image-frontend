import React from "react";
import "./loaderStyles.css";
import loaderImg from "../../Assets/Loader.png";

export const Loader = ( ) => {
  return (
    <div className={"loader"}>
      <img src={loaderImg} alt="" />
    </div>
  );
};
