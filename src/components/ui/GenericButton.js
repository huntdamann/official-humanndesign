import React from "react";

export default function GenericButton({ text, link  }) {
    
  
  
    return (
    <>

    <a href={link}>

    <button className="border-3 border-white hover:text-white w-[10rem] transition-all bg-[#4dc9c9] text-white hover:border-[#30ffffaf] hover:bg-black active:bg-[#41a4a4af] p-2 rounded-md shadow-[0_0_12px_rgba(48,255,255,0.6)] hover:shadow-[0_0_20px_rgba(48,255,255,0.9)] active:shadow-[0_0_8px_rgba(48,255,255,0.4)]">
        {text}
    </button>

    </a>
       
    </>
    );
  }