import React from "react";

let year=new Date().getFullYear();
function Footer(){

    
    return(
        <h1 className="footer" >CopyrightÂ© {year}</h1>
    );
}

export default Footer;