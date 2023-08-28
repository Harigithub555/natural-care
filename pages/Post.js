import React,  {useRef, useState } from 'react'
import Image from 'next/image';
import { MdOutlinePhotoLibrary } from "react-icons/md";
import Button from '@/components/Button'
import { useSession } from "next-auth/react";
import { MdOutlineClose } from "react-icons/md";

import { deleteDoc, doc } from "firebase/firestore";

import {
  addDoc,
  collection,
  serverTimestamp,
  updateDoc,
} from "firebase/firestore";
import { db, storage } from "../firebase";
import { getDownloadURL, ref, uploadString } from "firebase/storage";



const Post = () => {

  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const [selectedFile, setSelectedFile] = useState(null);

  const fPicker = useRef(null);

  const { data: session } = useSession();


  const addImageToPost = (e) => {
    const reader = new FileReader();
    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0]);
    }

    reader.onload = (readerEvent) => {
      setSelectedFile(readerEvent.target.result);
    };
  };

  const sendPost = async () => {
    if (loading) return;

    setLoading(true);

    const docRef = await addDoc(collection(db, "posts"), {
      id: session.user.uid,
      username: session.user.name,
      userImg: session.user.image,
      text: input,
      timestamp: serverTimestamp(),
    });

    const imageRef = ref(storage, `posts/${docRef.id}/image`);

    if (selectedFile) {
      await uploadString(imageRef, selectedFile, "data_url").then(async () => {
        const downloadURL = await getDownloadURL(imageRef);
        await updateDoc(doc(db, "posts", docRef.id), {
          image: downloadURL,
        });
      });
    }
    setLoading(false);
    setInput("");
    setSelectedFile(null);
  };



    

  return (

    <>
    <div style={{
      zIndex:-1,
      position:"fixed",
      width:"100vw",
      height:"150vh",
    }}>

   
    <Image
      src="/Signin.jpg"
      alt="Signin"
      layout="fill"
      objectFit ="cover"
     />
    
     </div>
     

    
    
     <div className='py-[50px]'> </div>
    <div className="px-5 py-5 my-[0px]  mx-[450px] bg-white rounded-3xl shadow-md ">
       <section className=" p-5 my-8">
         <div>
            <a className="text-xl font-bold italic text-cyan-500 hover:text-blue-800 text-align:center underline underline-offset-2 px-[110px] py-[5px]" href='./'>NATURAL CARE</a>
          </div>
      <div className=' flex mx-auto pb-8 mt-5 border-b-2 border-cyan-500 '>
      <input
          className="outline-none border-none w-[100%] text-[18px] p-2 rounded-xl bg-gray-200 hover:bg-blue-100 placeholder:text-gray-400"
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="TypeSomeThings!"
        />
        
       
      </div>

        <div className=' flex  mx-auto pb-5 mt-5 border-gray-300 '>
        
        <label htmlFor="filePicker">
          <div className="flex items-center px-[120px] gap-2 cursor-pointer">
            <MdOutlinePhotoLibrary className="text-[#41B35D] text-[30px]" />
            <p className="text-gray-500 font-medium">Photo/video</p>
          </div>
         
          
          <input
            type="file"
            name="filePicker"
            id="filePicker"
            accept="image/*"
            onChange={addImageToPost}
            ref={fPicker}
            hidden
          />
         
            
           

            <Button input={input} selectedFile={selectedFile} onClick={sendPost} />

       
        </label>
        </div>
        </section>
        </div>
        
        
  
     </>
      
      
      
   
    
  )
}


export default Post;