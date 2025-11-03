import React, { useState } from 'react'
import { FaPlus , FaMinus } from "react-icons/fa";

const Faq = ({title , desc}) => {
    const [open , setOpen] = useState(false);
  return (
    <div>
        <div className='faq-main px-5 mx-auto lg:max-w-6xl md:max-w-6xl px-5 text-white'>
            <div>
                <div className='main mb-2 top bg-[#2d2d2d] hover:bg-[#414141] flex justify-between items-center px-5 py-5 cursor:pointer' onClick={()=> setOpen(!open)}>
                    <div className="left">
                        <h1 className='lg:text-2xl md:text-2xl text-xl'>{title}</h1>
                    </div>
                    <div className="right">
                        {open ?
                        <button type='button'>
                         <FaMinus className='lg:text-4xl md:text-4xl text-2xl'/>
                            </button>
                            :
                             <button type='button'>
                        <FaPlus  className='lg:text-4xl md:text-4xl text-2xl'/>
                             </button>
}

                           


                    </div>
                </div>
               { open && <div className='main bottom text-2xl cursor:pointer text-justify bg-[#2d2d2d] px-5 py-4 my-[1px] lg:text-start md:text-start'>
                        <p>{desc}</p>
                </div> }
            </div>
        </div>
    </div>
  )
}

export default Faq