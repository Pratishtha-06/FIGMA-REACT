import React from "react";
import Moon from '../assets/moon.png'

function MoonIcon(){
    return(
        <>
        <img src={Moon} style={{width:'15px',height:'15px'}}
        className="d-flex justify-content-center align-items-center"/>
        </>
    )
}
export default MoonIcon;