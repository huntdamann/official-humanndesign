import React from "react";

export default function GenericButton({ text, link  }) {
    
  
  
    return (
    <>

    <a href={link}>

    <button  className="border-3 hover:text-white w-[10rem] transition-all bg-[#30ffffaf] hover:border-[#30ffffaf] hover:bg-black active:bg-[#41a4a4af] p-2 rounded-md">
            {text}
    </button>

    </a>
       
    </>
    );
  }