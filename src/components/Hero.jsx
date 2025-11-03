import React from 'react'
import Navbar from './Navbar'

const Hero = () => {
  return (
    <>
    <div className=' lg:h-[44.5em] md:h-[44em] h-[34em] '
            style={{
                background: "linear-gradient(80deg, black, transparent), url(https://assets.nflxext.com/ffe/siteui/vlv3/a73c4363-1dcd-4719-b3b1-3725418fd91d/fe1147dd-78be-44aa-a0e5-2d2994305a13/IN-en-20231016-popsignuptwoweeks-perspective_alpha_website_large.jpg)"
            }}>
                <Navbar />
              <div className='container mx-auto flex justify-center items-center h-96'>
                <div>
                  <h1 className='text-white text-center mb-5 lg:text-5xl md:text-5xl font-bold text-3xl px-5'>biggest Indian hits. The best Indian stories. All streaming here.</h1>
                    <p className='text-white text-center lg:text-2xl md:text-2xl text-xl mb-5'>Watch anywhere. Cancel anytime.</p>

                    <p className='text-white mb-5 text-center lg:text-xl md:text-xl text-lg'>Ready to watch? Enter your email to <br className='lg:hidden md:hidden sm:hidden'/>
                     create or restart your membership.</p>
                    <div className='flex flex-wrap justify-center items-center space-x-3'>
                      <input type="text" className='bg-[#1d1e1e] text-white py-3 px-3 text-lg lg:w-96 md:w-96 rounded-md w-80 mb-10 lg:mb-0 md:mb-0 opacity-80 border border-gray-300 hover:ring-1 hover:ring-gray-50' placeholder='Email address' />
                      <button className='bg-[#e50815] flex gap-2 items-center py-3 px-3 rounded-lg'><p className='text-white font-bold text-xl text-xl'>Get Started</p>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-white ">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                            </svg></button>
                    </div>
                </div>
              </div>
        
        </div>

        <div className='height-line'></div>
        </>
  )
}

export default Hero