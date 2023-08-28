import React from 'react'
import Image from 'next/image';
import Link from 'next/link';


const About = () => {
  return (
    <div >
    <div style={{
      zIndex:-1,
      position:"fixed",
      width:"100vw",
      height:"100vh",
    }}>

   
    <Image
      src="/Abouts.jpg"
      alt="About"
      layout="fill"
      objectFit ="cover"
     />
    
     </div>
     <section className='px-10 py-20 pr-[700px]  backdrop-blur-sm'>
     <div className="grid  grid-cols-1 ">
    <div className="grid place-items-center bg-white rounded-3xl pb-[93px] ">
      <Link className='text-xl font-bold italic text-cyan-500  mr-2 mt-1 border-cyan-500 hover:text-blue-500 underline underline-offset-2 px-1 py-7'href='./' >
            Natural care
      </Link>
        <div className='text-cyan-500 font-bold text-lg underline underline-offset-2 mt-5 '>
          About
        </div>

        <div className='text-center text-sm m-10'>
        <p> All its products are made from nature inspired by scientific innovations as far as possible from the 
            chemical structures and are in line with international standards and standards in a safe environment 
            with unmatched quality at moderate prices. All this gave Natural Care® this competitive advantage and 
            global competitiveness. We invite you to enjoy the use of these products, and we can tell you that 
            there are more surprises waiting for you to be prepared in an unconventional way. We look forward to a 
            real partnership with people who believe in our goals and aspirations, to be partners with us in our 
            successes and to reap the benefits and commercial benefits we gain from our joint efforts. </p>
        </div>

      </div>
      </div>

     </section>
    </div>
    
    
   
  )
  }

export default About