import React from "react";

import Home from "./Home";
import User from "./User";
import About from "./About";
import { Route, Routes } from "react-router-dom";

function Rout(){
return(

<>

<Routes>

  <Route path="" element={<Home/>}/>
  <Route path="/user" element={<User/>} />
  <Route path="/product" element={<About/>} />
</Routes>





</>



)



}

export default Rout