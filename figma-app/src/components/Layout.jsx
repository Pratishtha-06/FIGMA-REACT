import React from "react";
import Dashboard from "./Dashboard";
import Flight from "./Flight";

function Layout(){

    return(
        <>
        <div className="col">
         <div className="row-12 row-md-12 d-flex justify-content-center">
            <Dashboard/>
         </div>
         <div className="row-12 row-md-12 d-flex justify-content-center">
            <Flight/>
         </div>

        </div>
      
        
        </>
    )
}
export default Layout;