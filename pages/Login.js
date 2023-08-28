import React from 'react'
import { signIn } from "next-auth/react";
import { FcGoogle } from "react-icons/fc";
import Image from 'next/image';







const Login = () => {
  
  


  return (
    
    <div ><>
    <div  style={{
      zIndex:-1,
      position:"fixed",
      width:"100vw",
      height:"100vh",
    }}>

   
    <Image
      src="/sign.jpg"
      alt="sign"
      layout="fill"
      objectFit ="cover"
     />
    
     </div>
     </>

    

    
    

    <section className=" ">

    <div className="grid backdrop-blur-sm grid-cols-1">
    <div className="grid place-items-center bg-white px-[100px] py-[150px] my-[130px] mx-[450px] rounded-3xl">
    
   
        
    
    
  <div
         className="flex gap-4 text-white text-bold bg-blue-600 p-4 px-4  items-center rounded-2xl cursor-pointer hover:bg-blue-500"
         onClick={() => signIn("google")}
        >  
          <FcGoogle className="text-[30px]  bg-[#fff]" />
     SignIn with Google 
          
          
    </div>
    </div>
        </div>
        </section>
        </div>      
                
        
  )
}

export default Login





