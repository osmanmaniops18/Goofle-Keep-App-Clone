import React from "react";
import logo from "./Images/logo.png"
import './index.css';


const Header=()=>{
    return(
        <>
        <div className="header">
        
            <h1 className="title" >Google Clone</h1>
            <img height="80px" width="80px" src={logo} alt="logo"/> 
            </div>
        </>
    );
}


export default Header;