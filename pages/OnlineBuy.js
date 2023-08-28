import React, {useState} from 'react'
import Link from 'next/link';


const OnlineBuy = () => {
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const sendPost = async () => {
    if (loading) return;

    setLoading(true);

    setLoading(false);
  setInput("");
  setSelectedFile(null);
};

  return (

      <div className=''>
        <section className="bg-blue-100 rounded-2xl px-3 py-3 h-[110px] mb-5 mx-3 my-3 pt-10">
        <a className="text-xl font-bold italic text-cyan-500 pr-8 border-r-2 my-5 mr-2 mt-1 border-cyan-500 underline underline-offset-2 px-5 py-7 pt-[-800px]" href='./'>NATURAL CARE</a>
        <div className='mt-[-35px]'>
        <input
          className="outline-none border-none w-[20%] text-[18px] p-2 mx-[230px]  rounded-xl bg-gray-200 placeholder:text-gray-400"
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Search"
        />
        
        </div>


        </section>

        <section className="bg-blue-100 rounded-2xl px-3 py-3 h-[700px] w-[210px] mb-5 mx-3 my-2 mt-[-10px] pt-10">

        </section>

        <section className="bg-blue-100 rounded-2xl px-3 py-3 h-[700px] ml-[230px] mb-5 mx-3 my-2 mt-[-720px] pt-10">
                
                <section className='bg-blue-200 h-[330px] w-[350px] my-[-25px] rounded-2xl'>
                <img className='h-[200px] w-[180px] mx-[80px] pt-2  rounded-2xl' src="./pro1.jpg " alt=''></img>
                <div className='px-5 py-5 mt-[-10px] font-bold  text-cyan-500 hover:text-cyan-600'>
                Sukrie Sensitive calming night cream - $63.43 USD
                </div>
                <div className='  mx-auto pb-2 w-[50px] mt-[-28px] mb-[20px] border-b-2 border-cyan-500 '></div>
                <div className='bg-blue-400 mx-10 my-2 mr-[180px] px-2 py-2 items-center rounded-xl text-gray-800 font-bold hover:bg-blue-500'>
                  <Link href='./'>
                      ADD TO CART
                </Link>
                </div>
                <div className='bg-blue-400 mx-[180px] my-[-48px] mr-[70px] px-2 py-2 items-center text-gray-800 rounded-xl font-bold hover:bg-blue-500'>
                <Link href='./'>
                      BUY NOW
                </Link>
                </div>


                </section>

                <section className='bg-blue-200 h-[330px] w-[350px] mx-[360px] my-[-330px] rounded-2xl'>
                <img className='h-[200px] w-[180px] mx-[80px] pt-2  rounded-2xl' src="./pro2.jpg " alt=''></img>

                <div className='px-5 py-5 mt-[-5px] font-bold  text-cyan-500 hover:text-cyan-600'>
                Aloe-vera-Powder(200gm) - $32.45 USD
                </div>
                <div className='  mx-auto pb-2 w-[50px] mt-[-10px] mb-[20px] border-b-2 border-cyan-500 '></div>
                <div className='bg-blue-400 mx-10 my-2 mr-[180px] px-2 py-2 items-center rounded-xl text-gray-800 font-bold hover:bg-blue-500'>
                  <Link href='./'>
                      ADD TO CART
                </Link>
                </div>
                <div className='bg-blue-400 mx-[180px] my-[-48px] mr-[70px] px-2 py-2 items-center text-gray-800 rounded-xl font-bold hover:bg-blue-500'>
                <Link href='./'>
                      BUY NOW
                </Link>
                </div>

                </section>

                <section className='bg-blue-200 h-[330px] w-[350px] mx-[720px] my-[-10px] mt-[0px] rounded-2xl'>
                <img className='h-[200px] w-[180px] mx-[80px] pt-2  rounded-2xl' src="./pro3.jpg " alt=''></img>

                <div className='px-7 py-5 mt-[-5px] font-bold  text-cyan-500 hover:text-cyan-600'>
                Hibiscus-Powder(100gm) - $16.45 USD
                </div>
                <div className='  mx-auto pb-2 w-[50px] mt-[-10px] mb-[20px] border-b-2 border-cyan-500 '></div>
                <div className='bg-blue-400 mx-10 my-2 mr-[180px] px-2 py-2 items-center rounded-xl text-gray-800 font-bold hover:bg-blue-500'>
                  <Link href='./'>
                      ADD TO CART
                </Link>
                </div>
                <div className='bg-blue-400 mx-[180px] my-[-48px] mr-[70px] px-2 py-2 items-center text-gray-800 rounded-xl font-bold hover:bg-blue-500'>
                <Link href='./'>
                      BUY NOW
                </Link>
                </div>

                </section>

                <section className='bg-blue-200 h-[330px] w-[350px] my-[20px] rounded-2xl'>
                <img className='h-[200px] w-[180px] mx-[80px] pt-2  rounded-2xl' src="./pro4.jpg " alt=''></img>

                <div className='px-8 py-5 mt-[-5px] font-bold  text-cyan-500 hover:text-cyan-600'>
                Indigo-Powder(100gm) - $18.45 USD
                </div>
                <div className='  mx-auto pb-2 w-[50px] mt-[-10px] mb-[20px] border-b-2 border-cyan-500 '></div>
                <div className='bg-blue-400 mx-10 my-2 mr-[180px] px-2 py-2 items-center rounded-xl text-gray-800 font-bold hover:bg-blue-500'>
                  <Link href='./'>
                      ADD TO CART
                </Link>
                </div>
                <div className='bg-blue-400 mx-[180px] my-[-48px] mr-[70px] px-2 py-2 items-center text-gray-800 rounded-xl font-bold hover:bg-blue-500'>
                <Link href='./'>
                      BUY NOW
                </Link>
                </div>


                </section>

                <section className='bg-blue-200 h-[330px] w-[350px] mx-[360px] my-[-350px] rounded-2xl'>
                <img className='h-[200px] w-[180px] mx-[80px] pt-2  rounded-2xl' src="./pro5.jpg " alt=''></img>

                <div className='px-9 py-5 mt-[-5px] font-bold  text-cyan-500 hover:text-cyan-600'>
                  Henna Powder(200gm) - $34.54 USD
                </div>
                <div className='  mx-auto pb-2 w-[50px] mt-[-10px] mb-[20px] border-b-2 border-cyan-500 '></div>
                <div className='bg-blue-400 mx-10 my-2 mr-[180px] px-2 py-2 items-center rounded-xl text-gray-800 font-bold hover:bg-blue-500'>
                  <Link href='./'>
                      ADD TO CART
                </Link>
                </div>
                <div className='bg-blue-400 mx-[180px] my-[-48px] mr-[70px] px-2 py-2 items-center text-gray-800 rounded-xl font-bold hover:bg-blue-500'>
                <Link href='./'>
                      BUY NOW
                </Link>
                </div>


                </section>

                <section className='bg-blue-200 h-[330px] w-[350px] mx-[720px] my-[-10px] mt-[20px] rounded-2xl'>
                <img className='h-[200px] w-[180px] mx-[80px] pt-2  rounded-2xl' src="./pro6.jpg " alt=''></img>

                <div className='px-10 py-5 mt-[-5px] font-bold  text-cyan-500 hover:text-cyan-600'>
                Amla Powder(200gm) - $35.24 USD
                </div>
                <div className='  mx-auto pb-2 w-[50px] mt-[-10px] mb-[20px] border-b-2 border-cyan-500 '></div>
                <div className='bg-blue-400 mx-10 my-2 mr-[180px] px-2 py-2 items-center rounded-xl text-gray-800 font-bold hover:bg-blue-500'>
                  <Link href='./'>
                      ADD TO CART
                </Link>
                </div>
                <div className='bg-blue-400 mx-[180px] my-[-48px] mr-[70px] px-2 py-2 items-center text-gray-800 rounded-xl font-bold hover:bg-blue-500'>
                <Link href='./'>
                      BUY NOW
                </Link>
                </div>


                </section>

        </section>
      </div>
    
  )
}

export default OnlineBuy