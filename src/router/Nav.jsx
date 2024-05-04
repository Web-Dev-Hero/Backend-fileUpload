import React from "react";
import { Link, NavLink } from "react-router-dom";

function Nav(){
  return(

<nav className="items-center justify-center flex gap-10">
<NavLink style={(e)=>{return{color :e.isActive ? "#fca5a5" :"",fontWeight :e.isActive ? "bold" : ""   }} }       to="">home</NavLink >


<NavLink  style={(e)=>{return{color :e.isActive ? "red" :""}} }      to="/user" className="mx-4">user</NavLink >


<NavLink style={(e)=>{return{color :e.isActive ? "red" :""}} }  to="/product">product</NavLink >

</nav>




  )
}
export default Nav