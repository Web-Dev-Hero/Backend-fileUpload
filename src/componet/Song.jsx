import React from "react";
let data=[
{name:'nadiyo sa',desc:'very good song',instock:true},
{name:'junoon',desc:'outsome music',instock:false}



]

let handler=()=>(data.map((item,index)=>{
 if(item.instock===true){
  return alert('download now')
  }}))


function Song(){
return (
<>

<div className="w-full h-screen bg-zinc-300 flex  justify-center items-center gap-10 ">
  {data.map((item,index)=>(<div  className="w-60 h-[190px] bg-zinc-200 py-1 px-2 rounded">
  <h3 className="font-semibold text-xl mb-5 mt-2 mx-14">{item.name}</h3>
  <p className="mt-5 font-[12px]  mx-12">{item.desc}</p>
  <button  onClick={handler}  className={`mt-7   mx-12 ${item.instock ? 'bg-sky-300':'bg-red-400'} text-white p-2  rounded font-semibold  ${item.instock ? 'hover:bg-sky-500':'hover:bg-red-600'}      `  } >{item.instock ? 'Download ':'Not Available'}</button>
  </div>))}

</div>










</>


)
}
export default Song