import React from "react";
import T from '../assets/letter-t-.png';
import hash from '../assets/square.png';

function LayerOptions(){
    return(
        <>
        <div>
            <div className="layerOption">
               <img src={T} className="Icons ms-2 me-3"/>
                all screens
            </div>

            <div className="layerOption">
               <img src={hash} className="Icons  ms-2 me-3"/>
                Main Dashboard
            </div>
            <div className="layerOption">
               <img src={hash} className="Icons  ms-2 me-3"/>
                Main Dashboard
            </div>

             <div className="layerOption">
               <img src={hash} className="Icons  ms-2 me-3"/>
                Main Dashboard
            </div>

            <div className="layerOption">
               <img src={hash} className="Icons  ms-2 me-3"/>
                Main Dashboard
            </div>

             <div className="layerOption">
               <img src={hash} className="Icons  ms-2 me-3"/>
                ONBOARDING LIGHT
            </div>

            <div className="layerOption">
               <img src={hash} className="Icons  ms-2 me-3"/>
                ONBOARDING DARK
            </div>
        </div>
        </>
    )
}
export default LayerOptions;