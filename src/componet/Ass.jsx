import React, { useState } from "react";
import { FaArrowRight } from "react-icons/fa";
function Ass(){


  let [val,setval]=useState(false)

let handel=()=>setval(()=>!val)
return(


<>

<div className="h-screen w-full flex items-center justify-center bg-zinc">

  <div className="h-70 w-40 bg-zinc-500  relative overflow-hidden  rounded flex ">
    
  <img className={`transition-transform duration-700 ease-in-out      shrink-0   w-full h-full object-cover ${val===false ? '-translate-x-[0%]':'-translate-x-[100%]'}`}   src="https://plus.unsplash.com/premium_photo-1664036154109-31e0624d29c7?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />


  <img className={`transition-transform duration-700 ease-in-out      shrink-0 w-full h-full object-cover ${val===false ? '-translate-x-[0%]':'-translate-x-[100%]'}`}    src="https://plus.unsplash.com/premium_photo-1664036154108-31ff4c5501c4?w=300&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1pbi1zYW1lLXNlcmllc3wxfHx8ZW58MHx8fHx8" alt="" />



  
  <span onClick={handel}   className={`h-8 w-8 absolute bottom-1 left-1/2 ${val==false ? 'bg-red-300' : 'bg-sky-300'} justify-center items-center flex rounded-full     ${val==true ? 'rotate-180':'val'}       `} >
  <FaArrowRight />
  </span>


  </div>
</div>




</>







)






}


  export default Ass