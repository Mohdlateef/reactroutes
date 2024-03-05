import React from "react";
import Home from "./Home";
import Displaydetails from "./displaydetails";
import { Route,Routes } from "react-router-dom";
const App=()=>{
    

    return(

        <div>
            <Home />
            <Routes>
           <Route path="/Home" element={<Home/>} ></Route>
          <Route path="/Displaydetails" element={Displaydetails}></Route>
            </Routes>
        </div>
    )
}


export default App;