import React from "react";

function Love(){

let clickDownload=()=>{alert('dowonold now')}

let data=[
  { name:"mai tenu samjawawa ki " ,desc:'mai tenu samjawawa ki na teri vajao lagtha ji'},
  {name:"kayasy huwa",desc:"mai barsih ki boodyai samjatha nhi tha kya haal ho gaya hai mera"}




]



return(

<>
<div className="w-full h-screen bg-zinc-300 flex flex-col gap-10 items-center justify-center">
{data.map((item,index)=>(<div className="song px-3 py-2  bg-zinc-100 rounded w-60"><h3 className="font-semibold text-xl">{item.name}</h3>
<p className="text-[10px] mt-2 font-semibold">{item.desc}</p>
<button   onMouseOver={clickDownload}  className="px-2 py-1 bg-blue-400 font-semibold text-zinc-100 mt-5 rounded">Download now</button>

</div>
))}

</div>




</>

)



}


export default Love;