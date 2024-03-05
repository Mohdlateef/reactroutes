import React,{useState} from "react";
import { useContext } from "react";
import context from "../Context/context";
import { useNavigate } from "react-router-dom";
let Home=()=>{
let navigator=useNavigate;
// console.log(fun);
    let obj=useContext(context);
let [input,setinput]=useState("");
function userInput(e){
setinput(e.target.value);
}
function submitform(e){
    e.preventDefault();
obj.setuserinput(input);

setinput("");
}
    return(
        <div>
            <form onSubmit={submitform}>
                <input type="number" onChange={userInput} value={input}></input>
                <button>Submit</button>
                
            </form>
            <button onClick={()=>navigator("/Displaydetails")}>gotodisplauy</button>
        </div>
    )
}
export default Home;