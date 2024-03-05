import React from "react";
import { useContext } from "react";
import context from "../Context/context";

let Displaydetails=()=>{
  let obj=useContext(context);
    return(
        <div>
<p>{obj.userinput}</p>
        </div>
    )
}
export default Displaydetails;