import React, { useState } from 'react';
import { FaUserAlt } from "react-icons/fa";
import Link from 'next/link';
import { BiSearch } from "react-icons/bi";
import { CiFacebook } from "react-icons/Ci";
import { CiInstagram } from "react-icons/Ci";
import { CiYoutube } from "react-icons/Ci";





const Header = () => {
  const [input, setInput] = useState("");
 

  

  
  return (
  <div className="px-3 py-3 text-gray-800">
    <section className="bg-blue-100 rounded-2xl p-2 mb-5">
      <div className=' container mx-auto  '>
       <div className="flex ">
         <a className="text-xl font-bold italic text-cyan-500 pr-8 border-r-2 my-8 mr-2 mt-1 border-cyan-500 underline underline-offset-2 px-1 py-7" href='./'>NATURAL CARE</a>
            <div className="my-1">
                <div className='flex font-bold text-cyan-500 px-5 py-5 gap-5' > 
      
          <Link href='./' className='px-3 py-3 cursor-pointer hover:bg-blue-200 rounded-2xl'><h4>Home</h4></Link>
          <Link href='./About' className='px-3 py-3 cursor-pointer hover:bg-blue-200 rounded-2xl'><h4>About</h4></Link> 
          <Link href='./OnlineBuy' className='px-3 py-3 cursor-pointer hover:bg-blue-200 rounded-2xl'><h4>Online Buy</h4></Link>
          <Link href='./Contact' className='px-3 py-3 cursor-pointer hover:bg-blue-200 rounded-2xl'><h4>Contact</h4></Link>
          <Link href='./Post' className='px-3 py-3 cursor-pointer hover:bg-blue-200 rounded-2xl'><h4>Post</h4></Link>
     
                </div>
            </div>
        <div className='ml-auto '>

      <div className='  flex  my-7 px-8 space-x-1'>
    
      <Link href='/Search'className=" flex items-center mx-1 text-medium font-bold bg-blue-100 px-3 py-3 cursor-pointer hover:bg-blue-200 rounded-2xl">
      <BiSearch className='text-[20px]' /></Link>
    
      

        <Link href='/Login'className=" flex items-center mx-10 text-medium font-bold bg-blue-100 px-3 py-3 space-x-1 cursor-pointer hover:bg-blue-200 rounded-2xl">
        <FaUserAlt className='text-[20px] '/></Link>
        </div>
        </div>
      </div>
      <div className='flex py-28 pt-20 '>
        <div className='w-1/2'>
          <h2 className='text-7xl font-bold pl-10 text-cyan-500 '>
                  Nature is our beauty
          </h2>
          <p className=' p-10 text-cyan-700'>
          The happiness of your life depends upon the quality of your thoughts: therefore, guard accordingly, and take care that you entertain no notions unsuitable to virtue and reasonable nature.
          </p>
          <div className='px-10'>
          <Link href="/OnlineBuy" className=" px-5 py-5 text-medium font-bold text-cyan-500 curser-pointer hover:bg-blue-200 rounded-2xl">
            
            Buy Now
          
          </Link>
        </div>

        </div>
        <div className='w-1/2 pr-10 pt-1 pl-2 w-[700px] h-[500px] '>
        <img className='rounded-3xl'src="./Home1.jpg " alt=''></img>
        </div>
        
      </div>
      <div className='flex animate-bounce p-8 mt-[-260px] mx-[550px]'>
               <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
               <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 5.25l-7.5 7.5-7.5-7.5m15 6l-7.5 7.5-7.5-7.5" />
                 </svg>

                 <span className=''>
                  Scroll Down
                 </span>

        </div>
      
      </div>
    </section>

    <section className="bg-blue-100 rounded-2xl px-3 py-3 mb-5">
    <div className=' container mx-auto  '>
      <div className='py-10'>
        <h2 className='text-center text-3xl font-bold text-cyan-500'>
          About
        </h2>
        <div className='  mx-auto pb-2 w-[30px] mt-5 border-b-2 border-cyan-500 '>
        
        </div>
        <p className='text-center text-sm w-1/2 pt-8 mx-auto'>
            All its products are made from nature inspired by scientific innovations as far as possible from the 
            chemical structures and are in line with international standards and standards in a safe environment 
            with unmatched quality at moderate prices. All this gave Natural Care® this competitive advantage and 
            global competitiveness. We invite you to enjoy the use of these products, and we can tell you that 
            there are more surprises waiting for you to be prepared in an unconventional way. </p>
      </div>
    </div>


    </section>

    <section className="bg-blue-100 rounded-2xl px-3 py-3 h-[550px] mb-5">
       <div className=' container mx-auto m-3 '>
        <div className='grid grid-cols-2'>
          <div className='w-[500px] h-[500px] mx-[40px] my-[20px] contrast-125'>
          <img className='rounded-3xl' src="./pro1.jpg " alt=''></img>
          </div>
          <div className='mx-[120px] my-5 text-5xl text-cyan-500  '>
            <div className='mx-[-50px] font-bold'>
            Our New Products
            </div>
            <div className='mx-[110px] pb-6 w-[60px] mt-5 border-b-2 border-cyan-500 '></div>
            <div className=' text-xl mx-[-12px] my-10 text-gray-500 text-bold  '>
              Sukrie Sensitive calming night cream
              </div>

            <div className=' text-lg my-10 mx-[90px] '>
              $63.43 USD
              </div>
              <div className='mx-[110px] pb-2 w-[60px] mt-5 border-b-2 border-cyan-500 '></div>

              <div className='mx-[75px] pt-8 '>
          <Link href="/OnlineBuy" className=" px-5 py-5 text-xl font-bold text-cyan-500 curser-pointer hover:bg-blue-200 rounded-2xl">
            
            Buy Now
          
          </Link>
        </div>
        
        <div className='mx-[75px] pt-8 '>
        

          <Link href="/OnlineBuy" className=" px-5 py-5 text-lg text-gray-500 hover:text-cyan-500 curser-pointer rounded-2xl">
          
            
            Full Details

            <div className=' mx-[110px] my-[-25px] '>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                                            </svg>

                          </div>
                    </Link>
                </div>
            </div>
          </div>
       </div>
    </section>

    <section className="bg-blue-100 rounded-2xl px-3 py-3 h-[700px] mb-5">
    <div className='mx-[500px] my-5 text-3xl text-cyan-500  '>
        <div className='font-bold'>
             Best selling products
          </div>
          
            <div className='mx-[110px] pb-4 w-[60px] mt-5 border-b-2 border-cyan-500 '></div>
              <section className="bg-blue-200 rounded-2xl px-3 py-3 h-[500px] w-[690px] ml-[-450px] mt-10 mb-5">
                    <img className='h-[400px] w-[300px] mt-[40px] ml-[20px] rounded-3xl' src="./pro2.jpg " alt=''></img>
                  <Link href='/OnlineBuy'> 
                      <div className=' flex-wrap text-gray-500 text-bold text-2xl hover:text-cyan-500 ml-[320px] my-[-250px] text-center  w-[1/2] '>
                          Aloe-vera-Powder(200gm)-$32.45 USD
                        <div className='mx-[130px] pb-2 w-[80px] mt-5 border-b-2 border-cyan-500 '></div>
                      </div>
                  </Link>
              </section>

                <section className="bg-blue-200 rounded-2xl px-3 py-3 h-[245px] w-[490px] ml-[250px] mt-[-520px] pb-15">
                    <img className='h-[220px] w-[200px] ml-5 rounded-3xl'src="./pro3.jpg " alt=''></img>
                     <Link href='/OnlineBuy'> 
                          <div className=' flex-wrap text-gray-500 text-bold text-xl hover:text-cyan-500 ml-[220px] my-[-150px] text-center  w-[1/2] '>
                                 Hibiscus-Powder(100gm)-$16.45 USD
                              <div className='mx-[90px] pb-2 w-[60px] mt-5 border-b-2 border-cyan-500 '></div>
                          </div>
                       </Link>
                </section>

                    <section className="bg-blue-200 rounded-2xl px-3 py-3 h-[245px] w-[490px] ml-[250px] mt-[10px] pb-15">
                        <img className='h-[220px] w-[200px] ml-5 rounded-3xl'src="./pro4.jpg " alt=''></img>
                        <Link href='/OnlineBuy'> 
                              <div className=' flex-wrap text-gray-500 text-bold text-xl hover:text-cyan-500 ml-[220px] my-[-150px] text-center  w-[1/2] '>
                                          indigo-Powder(100gm)-$18.45 USD
                                  <div className='mx-[90px] pb-2 w-[60px] mt-5 border-b-2 border-cyan-500 '></div>
                              </div>
                        </Link>
                    </section>            
              
            </div>
            

    </section>

    <section className="bg-blue-100 rounded-2xl px-3 py-3 h-[300px] mb-5">
        <div>
          <div className='text-blue-800 font-bold text-2xl text-center'>
                Subscribe to our Site
          </div>
          <div className='text-gray-500 text-center mt-5'>
                Promotions, new products and sales. Directly to your inbox.
          </div>

          <div className='px-[450px] py-10 m-5'>
            <input className="outline-none border-none w-[100%] text-[18px] p-2 rounded-xl bg-gray-300  placeholder:text-gray-500"
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Your Email"

                   
            
            />
            <div className='mt-[-35px] mx-[100px]'>
            <Link href='/' className='text-xl text-white bg-blue-800 py-2 px-2 rounded-xl ml-[160px] hover:bg-blue-700 '>Subscribe
            </Link>

            
            </div>
          </div>

        </div>
        <div className='mx-[610px] pb-4 w-[60px] mt-5 border-b-2 border-cyan-500 '></div>
     
          
     

    </section>

    <footer className='footer py-[-2px] bg-blue-100 rounded-2xl my-[-5px] '>
      <div className='container'>
        <div className='flex flex-cols '>
            <div className='footer-col px-[150px] pt-[32px] place-items-center '>
                
                <ul className='space-y-2 '> 
                  <li><a href='./Search' className='hover:text-cyan-500'>Search</a></li>
                  <li><a href='./About' className='hover:text-cyan-500'>About</a></li>
                  <li><a href='./Contact' className='hover:text-cyan-500'>Contact</a></li>
                </ul>
            </div>
            <div className='footer-col px-[50px] my-[30px] place-items-center '>
               
                <ul className='space-y-2'>
                  <li><a href='#' className='hover:text-cyan-500'>FRANCHISE</a></li>
                  <li><a href='#' className='hover:text-cyan-500'>Privacy Policy</a></li>
                  <li><a href='#' className='hover:text-cyan-500'>Refund Policy</a></li>
                  <li><a href='#' className='hover:text-cyan-500'>Terms of Service</a></li>
                </ul>
            </div>
          
            <div className='footer-col px-[130px] pt-[30px] '>
                
                <ul className='space-y-2'>
                  <li><a href='#' className='flex hover:text-cyan-500'><CiFacebook className='m-1' />Facebook</a></li>
                  <li><a href='#' className='flex hover:text-cyan-500'><CiInstagram className='m-1' />Instagram</a></li>
                  <li><a href='#' className='flex hover:text-cyan-500'><CiYoutube className='m-1'/>Youtube</a></li>
                </ul>
            </div>
            </div>


      </div>

    </footer>
    
    </div>

    
    
 
 
 

   
    
  )
}

export default Header