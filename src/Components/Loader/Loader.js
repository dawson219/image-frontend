import React from "react"
import "./loaderStyles.css"
import loaderImg from "../../Assets/Loader.png"

export const Loader = ({ h, w, b, clr, bk, t, style = {}, customClass }) => {
    return (
        <div
            className={`${"loader"} ${customClass ?? ""}`}
        >
            <img src={loaderImg} alt="" />
        </div>
    )
}