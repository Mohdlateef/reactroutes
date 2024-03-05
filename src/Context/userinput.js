import React, { useState } from "react";
import context from "./context";
let UserinputProvider=(props)=>{
let [userinput,setuserinput]=useState("");
    return(
        <context.Provider value={{
            userinput:userinput,
            setuserinput:setuserinput,
        }}>
{props.children}
        </context.Provider>
        
    )
}
export default UserinputProvider;