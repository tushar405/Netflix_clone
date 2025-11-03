import React from 'react'
import Hero from '../components/Hero'
import Enjoy from '../components/Enjoy'
import Download from '../components/Download'
import Watch from '../components/Watch'
import CreateProfiles from '../components/Createprofile'
import Faq from '../components/Faq'
import { Faqdata } from '../components/data/Faqdata'
import Footer from '../components/Footer' 

const Home = () => {
  return (
    <div>
      <Hero />
      <Enjoy />
      <Download />
      <Watch />
      <CreateProfiles />

      <div className='mb-10'>
        <h2 className='text-white text-center lg:text-5xl md:text-5xl text-3xl font-bold py-10'>
          Frequently Asked <br className='lg:hidden md:hidden sm:hidden' /> Questions
        </h2> 
        <div >
          { 
            Faqdata.map((items, index) => {
              const { title, desc } = items 
              return (
                <Faq 
                  key={index}
                  title={title}
                  desc={desc}
                /> 
              )
            })
          }
        </div>
      </div>
      <div className='lg:mb-16 md:mb-16 mb-10'>
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
      <div className='height-line'></div>
      <Footer />


    </div>
    
  )
}

export default Home
