import React from "react";
import Sun from '../assets/sunny.png'

function MoonIcon(){
    return(
        <>
        <img src={Sun} 
             style={{width:'15px',height:'15px'}}
             className="d-flex justify-content-center align-items-center"/>
        </>
    )
}
export default MoonIcon;