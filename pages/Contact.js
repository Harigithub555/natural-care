import React from 'react'
import Image from 'next/image';
import Link from 'next/link';


const Contact = () => {
  return (

    <div>
      <>
    <div style={{
      zIndex:-1,
      position:"fixed",
      width:"100vw",
      height:"100vh",
    }}>

   
    <Image
      src="/Contact.jpg"
      alt="Contact"
      layout="fill"
      objectFit ="cover"
     />
    
     </div>
     </>
     <section className='px-10 py-20 pl-[700px]  backdrop-blur-sm'>
     <div className="grid  grid-cols-1 ">
    <div className="grid place-items-center bg-white rounded-3xl pb-[113px] ">
      <Link className='text-xl font-bold italic text-cyan-500  mr-0 mt-1 border-cyan-500 hover:text-blue-500 underline underline-offset-2 px-1 py-7'href='./' >
            Natural care
      </Link>
        <div className='text-cyan-500 font-bold text-lg underline underline-offset-2 mt-5 '>
          Contact
        </div>

        <div className='grid grid-cols-2 pt-[40px] '>
        <img className='rounded-3xl pt-10 h-[200px] w-[300px] mr-[280px]'src="./con.png " alt='con'></img>
        <div className='pt-[60px] pr-6 text-center'>
        <p>Have a question about our products?</p> 
          <p>we want to hear from you!</p>
        <p>you can reach our team via phone at</p>
        <p>8248436506 or email at</p>
        <p>harimarch5@gmail.com</p>
        </div>

        </div>
        

      </div>
      </div>

     </section>
     
    </div>

  )
}

export default Contact