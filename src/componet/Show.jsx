import React, { useState } from "react";
import { FaArrowCircleRight } from "react-icons/fa";


function Show(){



  let[val,setval]=useState(false)



  let handel=()=>setval(()=>!val)
  return(




<div className="w-full h-screen bg-zinc-200 flex justify-center items-center   ">
<div className="h-70 w-60 bg-zinc-500 flex  overflow-hidden  ">   
  <img  className={`transition-transform duration-700 ease-in-out     rounded object-cover shrink-0  ${val===false ? '-translate-x-[0%]':'-translate-x-[100%]'}      `}   src="https://images.unsplash.com/flagged/photo-1701707243516-29e3b60db3c8?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />

  <img  className={`transition-transform duration-700 ease-in-out        shrink-0 rounded object-cover ${val===false ? '-translate-x-[0%]':'-translate-x-[100%]'}  `}   src="https://media.istockphoto.com/id/658157846/photo/portrait-of-beautiful-young-girl.jpg?s=2048x2048&w=is&k=20&c=cBmcV_FGHnTCB_iIUvRqkP9X2buJsgd0nk582pqibtI=" alt="" />






</div>

<span onClick={handel}     className= {`mt-[25%]  -translate-x-[150px]   translate-y-9   ${val==true ? 'rotate-180':'val' }          `}  ><FaArrowCircleRight  size={'2em'}  color={'green'}   /></span>









</div>





















  )
}

export default Show