// import React, { useState } from "react";
// import Card from "./componet/Card";
// import State from "./componet/Ass";
// // import Ass from "./componet/Ass";

// // import Show from "./componet/Show";

// function App(){

//   let data=[
//     {name:"shanker",role:"Assitent Enginner", image:"https://images.unsplash.com/photo-1551022372-0bdac482b9d6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Ym95c3xlbnwwfHwwfHx8MA%3D%3D",friends:false},

//     {name:"rahul",role:"Oprator", image:"https://images.unsplash.com/photo-1546512565-39d4dc75e556?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGJveXN8ZW58MHx8MHx8fDA%3D",friends:false},



//     {name:"Mahendra",role:"Coder", image:"https://images.unsplash.com/photo-1604073536770-8a33e332f830?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGJveXN8ZW58MHx8MHx8fDA%3D",friends:false},


//     {name:"nikhil",role:"Senier oprator", image:"https://images.unsplash.com/photo-1614975058789-41316d0e2e9c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGJveXN8ZW58MHx8MHx8fDA%3D",friends:false}
    
    
    
    
//   ]

// let [realData,setRealData]=useState(data)

// let handler=(setIndex)=>{ setRealData((prev)=>{return prev.map((item,index)=>{
//   if(index==setIndex) return{...item,friends:!item.friends}
//   return item
// })})






// }





// return(


// <>
// <div className="w-full h-screen bg-zinc-300 flex justify-center items-center gap-10">{realData.map((item,index)=><Card value={item}  index={index}  handler={handler} />)}
// </div>



// </>







// )





// }

// export default App


// practice compo componet

// import Compo from "./componet/Compo";
// import React, { useState } from "react";



// function App(){


  

//  let data=[
//   {name:'shanker',role:"asstent Engineer",image:"https://plus.unsplash.com/premium_photo-1677231559666-53bed9be43ba?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Ym95c3xlbnwwfHwwfHx8MA%3D%3D",title:"Card ke title ko emphasize karne ke liye font-bold class ka istemal kiya gaya hai. ",friends:false},

//   {name:'rahul',role:" Engineer",image:"https://images.unsplash.com/photo-1519764622345-23439dd774f7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Ym95c3xlbnwwfHwwfHx8MA%3D%3D",title:"Card ke title ko emphasize karne ke liye font-bold class ka istemal kiya gaya hai. ",friends:false},

//   {name:'mahendra',role:"oprator Engineer",image:"https://images.unsplash.com/photo-1602546005687-372f3c6455ed?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGJveXN8ZW58MHx8MHx8fDA%3D",title:"Card ke title ko emphasize karne ke liye font-bold class ka istemal kiya gaya hai.",friends:false}, 
  
//  ] 

//  let [val,setval]=useState(data)

//  let handel=(setIndex)=>{setval((prev)=>{return prev.map((item,index)=>{if(index===setIndex) return{...item,friends:!item.friends}
 
//  return item
 
 
 
//  })
//  })
//  }


// //et handler=(setIndex)=>{ setRealData((prev)=>{return prev.map((item,index)=>{
// //   if(index==setIndex) return{...item,friends:!item.friends}
// //   return item






// return(



// <div className="bg-gray-300 flex justify-center items-center w-full h-screen gap-10">{val.map((item,index)=> <Compo value={item}  index={index}    handel={handel} />)}
 
// </div>



// )



// }
// export default App


// making music project


// import React, { useState } from "react";
// import Navbar from "./componet/Navbar";
// import Card from "./componet/Card";



// function App(){

//   let data=[
//     {image:"https://images.unsplash.com/photo-1501854140801-50d01698950b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bmF0dXJlfGVufDB8fDB8fHww",name:"Challenger",artist:"Nikhil",added:false},

//     {image:"https://plus.unsplash.com/premium_photo-1675368244123-082a84cf3072?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bmF0dXJlfGVufDB8fDB8fHww",name:"fuck off",artist:"rahul",added:false},

//     {image:"https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bmF0dXJlfGVufDB8fDB8fHww",name:"one day",artist:"shanker",added:true},

//     {image:"https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fG5hdHVyZXxlbnwwfHwwfHx8MA%3D%3D",name:"lover",artist:"mahendra",added:false},







//   ]


//   let[song,setsong]=useState(data)

//     let Handelclicked=(index)=>{  setsong((prev)=>{return prev.map((item,setindex)=>{
//       if(setindex===index) return{...item,added:!item.added}
//       return item;
//     })})
      
//     }




//   return(

//    <>
//    <div className="w-full h-screen bg-zinc-200">
//    <Navbar  data={song} />
  
//   <div className="px-20 gap-5 mt-10 flex flex-wrap">
//   {song.map((item,index)=>  (<Card value={item}  hand={Handelclicked} index={index}  key={index} />))}  
//   </div>

 
   
//    </div>
//    </>




//   )
// }

// export default App




import React from "react";
import Rout from "./router/Rout";
import Nav from "./router/Nav";

function App(){

return(
<>

<Nav/>
<Rout/>


</>

)

}

export default App