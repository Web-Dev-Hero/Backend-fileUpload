// import React from "react";

// function Card(){


//   let data=[

//   {image:'https://images.unsplash.com/photo-1620288627223-53302f4e8c74?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YW16b24lMjBsb2dvfGVufDB8fDB8fHww',name:'Amazon basics',desc:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates modi cupiditate mollitia!',
//   instock:true

// },


//   {image:'https://images.unsplash.com/photo-1609840112855-9ab5ad8f66e4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGRhaWx5JTIwb2JqZWN0fGVufDB8fDB8fHww',name:'daily onject',desc:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates modi cupiditate mollitia!',
//   instock:true  },



//   {image:'https://images.unsplash.com/photo-1542496658-e33a6d0d50f6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8d2F0Y2h8ZW58MHx8MHx8fDA%3D',name:'watch',desc:'Lorem ipsum dolor sit amet consectetur adipisicing elit.Voluptates modi cupiditate mollitia!',
//   instock:false
// }






//   ]
//   return(
   
//     <div className="w-full h-screen bg-zinc-200 flex items-center justify-center gap-10" >
//    {data.map((no,In)=>(<div key={In}  className="w-52  bg-zinc-100  ">
//   <div className="w-full h-32 bg-zinc-300"><img className="w-full h-full object-cover" src={no.image}></img></div>
//   <div className="w-full px-3 py-4">

// <h1 className="font-semibold text-xl">{no.name} </h1>
// <p className="text-1xs mt-5 justify-normal">{no.desc}</p>
// <button className={`px-4 py-1 ${no.instock ? 'bg-sky-600':'bg-green-600'} text-xs rounded text-black-100 mt-3 font-bold   ${no.instock ? 'hover:bg-sky-800 text-white hover:text-[16px] hover:ease-in duration-300 ' :'hover:bg-green-800 text-white hover:text-[16px] hover:ease-in-out duration-300 '} `}>{no.instock ? "in stock":
// "out of stock"}</button>


// </div>
//   </div>
// ))}
//     </div>
//   )
// }

// export default Card

// import { FaArrowLeft } from "react-icons/fa";
// import { FaArrowRight } from "react-icons/fa";

// import React, { useState } from "react";

// function Card(){

// let [Val,setVal]=useState(false)


// let handel=()=>setVal(()=>!Val)


// return(
// <>

// <div className="w-full h-screen bg-zinc flex justify-center items-center ">

//   <div className="   w-80 h-40 bg-zinc-500 rounded-md  relative flex overflow-hidden">
//    <img className={`shrink-0 transition-transform duration-700 ease-in-out  ${Val===false ? "-translate-x-[0%]":"-translate-x-[100%]"}   w-full h-full object-cover`} src="https://images.unsplash.com/photo-1712609934576-083090663a8f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5Nnx8fGVufDB8fHx8fA%3D%3D" alt="" />

//    <img className={`shrink-0 transition-transform  duration-700  ease-in-out    ${Val===false ? "-translate-x-[0%]":"-translate-x-[100%]"}   w-full h-full object-cover`}  src="https://images.unsplash.com/photo-1562129756-3094f14e1f50?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D" alt="" />



//   <span   onClick={handel}     className={`right    h-8 w-8 ${Val==false ? 'bg-sky-400' :'bg-red-300'} absolute  bottom-[0%] left-1/2 -translate-x-[50%] -translate-y-[50%] flex justify-center items-center rounded-full ${Val===true ? 'rotate-180' : 'Val'}     bg-[#dadada7b] mt-40`}>
//   <FaArrowRight size={".7em"}/>
  
//   </span>

  




//   </div>

// </div>


// </>







// )





// }

// export default Card;




/// props deling with react 

// import React from "react";

// function Card({value,handler,index}){
//   let{name,image,role,friends}=value
// return(

// <div className="w-52 bg-white rounded overflow-hidden">

//   <div className="w-full  bg-sky-200"></div>
//   <img className="w-full h-full object-cover object-center" src={image} alt="" />
//   <div className="w-full p-3">
  
//     <h3 className="text-xl font-semibold">{name}</h3>
//     <h5 className="text-xs">{role}</h5>
//     <button  onClick={()=>handler(index)}  className={`px-3 py-1 text-white ${friends===false ? "bg-sky-400":'bg-green-400'} text-sm rounded-xl mt-4`}>{friends===true? 'friend':'Add Friend'}</button>
//   </div>







// </div>








// )












// }

// export default Card



// making music player

import React from "react";

function Card({value,hand,index}){
  let {image,name,added,artist}=value
  return(
    <>
    <div className="w-60 bg-zinc-100 p-4 rounded-md  flex gap-5 pb-10 relative">
    <div className="w-20 h-20 bg-orange-600 rounded-md overflow-hidden">
     <img className="w-full h-full object-cover" src={image} alt="" /> 
    </div>
     <div className="">
      <h3 className="text-xm font-semibold leading-none mb-5">{name}</h3>
      <h6 className="text-sm">{artist}</h6>
     </div>
     <button  onClick={()=>hand(index)}    className={`px-4 py-4 ${added==true ? "bg-sky-300":'bg-orange-300'} absolute text-white  rounded-full  font-semibold  bottom-0 translate-y-[50%] translate-x-[50%]`}>{added==false ? 'add to fav':'added'}</button>
    </div>

    
    
    </>
  )
}
export default Card