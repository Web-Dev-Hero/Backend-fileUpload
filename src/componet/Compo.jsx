import React from "react";



  const Compo = ({value,index,handel}) => {
    let {name,image,role,title,friends}=value

    

    return (
      <div className="max-w-[250px] rounded overflow-hidden shadow-lg">
        <img className="w-full object-cover " src={image} alt="Placeholder" />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{name}</div>
          <h5 className="font-bold text-xs mb-2">{role}</h5>
          <p className="text-zinc-800 text-base">
            {title}
          </p>
        </div>
        <button onClick={()=>handel(index)} className={`px-3 py-1 mt-5 mx-5 ${friends==true ? 'bg-sky-300' : 'bg-green-500' } rounded-md mb-5 m-auto font-semibold`}>{friends==true ? 'friends': 'Add friend'}   </button>
        </div>
   
    );
  };
  
  export default Compo;