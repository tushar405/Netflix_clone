import React from 'react'

const Watch = () => {
  return (
    <div>
        <div className='main flex flex-wrap justify-evenly py-10 px-5 items-center lg:py-20 md:py-20'>

            <div className='left mb-10 lg:mb-0 md:mb-0 sm:mb-0'>
                <h2 className='text-white lg:text-5xl md:text-5xl text-center text-3xl lg:text-start md:text-start sm:text-start font-bold mb-5'>Watch everywhere</h2>
              <p className='text-white lg:text-2xl text-center text-lg lg:text-start md:text-start sm:text-start md:text-2xl '> 
                Stream unlimited movies and TV shows on your <br className=' hidden lg:block md:block' /> phone, tablet, laptop, and TV.
              </p>

            </div>

            <div className="right">
         <video className="lg:w-[35em] md:w-[35em] w-[30em]" autoPlay muted> <source src='/video/v3.mp4' type='video/mp4'/></video>
            </div>
        </div>
        <div className='height-line'></div>
    </div>
  )
}

export default Watch