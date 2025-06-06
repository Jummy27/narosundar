import { FaPlane, FaGlobe } from "react-icons/fa";
import { useState } from "react";
import blogE1 from '../images/blogE/blogE1.webp';
import canada1 from '../images/CanadaPics/canada1.webp';
import canada2 from '../images/CanadaPics/canada2.webp';
import canada3 from '../images/CanadaPics/canada3.webp';
import canada4 from '../images/CanadaPics/canada4.webp';
import canada5 from '../images/CanadaPics/canada5.webp';
import canada6 from '../images/CanadaPics/canada6.webp';
import canada7 from '../images/CanadaPics/canada7.webp';
import canada8 from '../images/CanadaPics/canada8.webp';
import blogE2 from '../images/blogE/blogE2.webp';
import blogE3 from '../images/blogE/blogE3.webp';
import blogE4 from '../images/blogE/blogE4.webp';
import blogE5 from '../images/blogE/blogE5.webp';
import blogE6 from '../images/blogE/blogE6.webp';
import blogE7 from '../images/blogE/blogE7.webp';
import blogE8 from '../images/blogE/blogE8.webp';
import blogE9 from '../images/blogE/blogE9.webp';

function Blog3 ()  {

  const [isChecked, setIsChecked]=useState(false);
  const [selectedOption, setSelectedOption]=useState('option1');
  const[isSwitchOn, setIsSwitchOn]=useState(false);
  const handleChange = ( event ) => {
    setSelectedOption(event.target.value);
  };


  return (
    <section className="mx-15">

       <div className="mb-20">
        <h1 className="text-[25px] text-black my-7 ">Text Sample</h1>
        <p className="lg:text-[19px] md:text-[15px] text-gray-500"> Every avid independent filmmaker has Bold about making that Italic interest documentary, or short film to show off their creative prowess. Many have great ideas and want to “wow” theSuperscript scene, or video renters with their big project. But once you have theSubscript “in the can” (no easy feat), how do you move from a Strike through of master DVDs with the “Underline” marked hand-written title inside a secondhand CD case, to a pile of cardboard boxes full of shiny new, retail-ready DVDs, with UPC barcodes and polywrap sitting on your doorstep? You need to create eye-popping artwork and have your project replicated. Using a reputable full service DVD Replication company like PacificDisc, Inc. to partner with is certainly a helpful option to ensure a professional end result, but to help with your DVD replication project, here are 4 easy steps to follow for good DVD replication results:</p>
       </div>

       <div className="py-10 border-y-1 border-y-gray-100">
         <h1 className="text-[25px] text-black my-7 ">Sample Buttons</h1>
       
       <div className="flex gap-4">
        <button className="border-1 border-gray-100 bg-gray-100 text-blue-800 h-11 w-30">Default</button>
        <button className="border-1 border-blue-800 bg-blue-800 text-white hover:bg-white hover:text-blue-800 h-11 w-30">Primary</button>
        <button className="border-1 border-[#4cd3e3] bg-[#4cd3e3] text-white hover:bg-white hover:text-blue-[#4cd3e3] h-11 w-30">Success</button>
        <button className="border-1 border-blue-400 bg-blue-400 text-white hover:bg-white hover:text-blue-400 h-11 w-24">Info</button>
        <button className="border-1 border-[#f4e700] bg-[#f4e700] text-white hover:bg-white hover:text-[#f4e700] h-11 w-30">Warning</button>
        <button className="border-1 border-[#f44a40] bg-[#f44a40] text-white hover:bg-white hover:text-[#f44a40] h-11 w-30">Danger</button>
        <button className="border-1 border-gray-100 bg-gray-100 text-blue-800 h-11 w-24 underline">Link</button>
        <button className="border-1 border-gray-100 bg-gray-100 text-white h-11 w-30">Disable</button>
       </div>
       <div className="flex gap-4 mt-5">
        <button className="border-1 border-gray-100 bg-white h-11 w-30"></button>
        <button className="border-1 border-blue-800 text-blue-800 bg-white hover:bg-blue-800 hover:text-white h-11 w-30">Primary</button>
        <button className="border-1 border-[#4cd3e3] text-[#4cd3e3] bg-white hover:bg-[#4cd3e3] hover:text-white h-11 w-30">Success</button>
        <button className="border-1 border-blue-400 text-blue-400 bg-white hover:text-white hover:bg-blue-400 h-11 w-24">Info</button>
        <button className="border-1 border-[#f4e700] text-[#f4e700] bg-white hover:text-white hover:bg-[#f4e700] h-11 w-30">Warning</button>
        <button className="border-1 border-[#f44a40] text-[#f44a40] bg-white hover:text-white hover:bg-[#f44a40] h-11 w-30">Danger</button>
        <button className="border-1 border-gray-100 bg-gray-100 text-blue-800 h-11 w-24 underline">Link</button>
        <button className="border-1 border-gray-100 bg-gray-100 text-white h-11 w-30">Disable</button>
       </div>
       <div className="flex gap-4 mt-15">
        <button className="border-1 border-gray-100 bg-gray-100 text-blue-800 h-11 w-30">Default</button>
        <button className="border-1 border-blue-800 bg-blue-800 text-white hover:bg-white hover:text-blue-800 h-11 w-30">Primary</button>
        <button className="border-1 border-[#4cd3e3] bg-[#4cd3e3] text-white hover:bg-white hover:text-blue-[#4cd3e3] h-11 w-30">Success</button>
        <button className="border-1 border-blue-400 bg-blue-400 text-white hover:bg-white hover:text-blue-400 h-11 w-24">Info</button>
        <button className="border-1 border-[#f4e700] bg-[#f4e700] text-white hover:bg-white hover:text-[#f4e700] h-11 w-30">Warning</button>
        <button className="border-1 border-[#f44a40] bg-[#f44a40] text-white hover:bg-white hover:text-[#f44a40] h-11 w-30">Danger</button>
        <button className="border-1 border-gray-100 bg-gray-100 text-blue-800 h-11 w-24 underline">Link</button>
        <button className="border-1 border-gray-100 bg-gray-100 text-white h-11 w-30">Disable</button>
       </div>
       <div className="flex gap-4 mt-5">
        <button className="border-1 border-gray-100 bg-white h-11 w-30"></button>
        <button className="border-1 border-blue-800 text-blue-800 bg-white hover:bg-blue-800 hover:text-white h-11 w-30">Primary</button>
        <button className="border-1 border-[#4cd3e3] text-[#4cd3e3] bg-white hover:bg-[#4cd3e3] hover:text-white h-11 w-30">Success</button>
        <button className="border-1 border-blue-400 text-blue-400 bg-white hover:text-white hover:bg-blue-400 h-11 w-24">Info</button>
        <button className="border-1 border-[#f4e700] text-[#f4e700] bg-white hover:text-white hover:bg-[#f4e700] h-11 w-30">Warning</button>
        <button className="border-1 border-[#f44a40] text-[#f44a40] bg-white hover:text-white hover:bg-[#f44a40] h-11 w-30">Danger</button>
        <button className="border-1 border-gray-100 bg-gray-100 text-blue-800 h-11 w-24 underline">Link</button>
        <button className="border-1 border-gray-100 bg-gray-100 text-white h-11 w-30">Disable</button>
       </div>
       <div className="flex gap-4 mt-15">
        <button className="border-1 border-gray-100 bg-gray-100 text-blue-800 h-11 w-30 rounded-3xl">Default</button>
        <button className="border-1 border-blue-800 bg-blue-800 text-white hover:bg-white hover:text-blue-800 h-11 w-30 rounded-3xl">Primary</button>
        <button className="border-1 border-[#4cd3e3] bg-[#4cd3e3] text-white hover:bg-white hover:text-blue-[#4cd3e3] h-11 w-30 rounded-3xl">Success</button>
        <button className="border-1 border-blue-400 bg-blue-400 text-white hover:bg-white hover:text-blue-400 h-11 w-24 rounded-3xl">Info</button>
        <button className="border-1 border-[#f4e700] bg-[#f4e700] text-white hover:bg-white hover:text-[#f4e700] h-11 w-30 rounded-3xl">Warning</button>
        <button className="border-1 border-[#f44a40] bg-[#f44a40] text-white hover:bg-white hover:text-[#f44a40] h-11 w-30 rounded-3xl">Danger</button>
        <button className="border-1 border-gray-100 bg-gray-100 text-blue-800 h-11 w-24 underline rounded-3xl">Link</button>
        <button className="border-1 border-gray-100 bg-gray-100 text-white h-11 w-30 rounded-3xl">Disable</button>
       </div>
       <div className="flex gap-4 mt-5">
        <button className="border-1 border-gray-100 bg-white h-11 w-30 rounded-3xl"></button>
        <button className="border-1 border-blue-800 text-blue-800 bg-white hover:bg-blue-800 hover:text-white h-11 w-30 rounded-3xl">Primary</button>
        <button className="border-1 border-[#4cd3e3] text-[#4cd3e3] bg-white hover:bg-[#4cd3e3] hover:text-white h-11 w-30 rounded-3xl">Success</button>
        <button className="border-1 border-blue-400 text-blue-400 bg-white hover:text-white hover:bg-blue-400 h-11 w-24 rounded-3xl">Info</button>
        <button className="border-1 border-[#f4e700] text-[#f4e700] bg-white hover:text-white hover:bg-[#f4e700] h-11 w-30 rounded-3xl">Warning</button>
        <button className="border-1 border-[#f44a40] text-[#f44a40] bg-white hover:text-white hover:bg-[#f44a40] h-11 w-30 rounded-3xl">Danger</button>
        <button className="border-1 border-gray-100 bg-gray-100 text-blue-800 h-11 w-24 underline rounded-3xl">Link</button>
        <button className="border-1 border-gray-100 bg-gray-100 text-white h-11 w-30 rounded-3xl">Disable</button>
       </div>
       <div className="flex gap-4 mt-15">
        <button className="border-1 border-gray-100 bg-gray-100 text-blue-800 h-11 w-30 rounded-3xl">Default</button>
        <button className="border-1 border-blue-800 bg-blue-800 text-white hover:bg-white hover:text-blue-800 h-11 w-30 rounded-3xl">Primary</button>
        <button className="border-1 border-[#4cd3e3] bg-[#4cd3e3] text-white hover:bg-white hover:text-blue-[#4cd3e3] h-11 w-30 rounded-3xl">Success</button>
        <button className="border-1 border-blue-400 bg-blue-400 text-white hover:bg-white hover:text-blue-400 h-11 w-24 rounded-3xl ">Info</button>
        <button className="border-1 border-[#f4e700] bg-[#f4e700] text-white hover:bg-white hover:text-[#f4e700] h-11 w-30 rounded-3xl">Warning</button>
        <button className="border-1 border-[#f44a40] bg-[#f44a40] text-white hover:bg-white hover:text-[#f44a40] h-11 w-30 rounded-3xl">Danger</button>
        <button className="border-1 border-gray-100 bg-gray-100 text-blue-800 h-11 w-24 underline rounded-3xl">Link</button>
        <button className="border-1 border-gray-100 bg-gray-100 text-white h-11 w-30 rounded-3xl">Disable</button>
       </div>
       <div className="flex gap-4 mt-5">
        <button className="border-1 border-gray-100 bg-white h-11 w-30 rounded-3xl"></button>
        <button className="border-1 border-blue-800 text-blue-800 bg-white hover:bg-blue-800 hover:text-white h-11 w-30 rounded-3xl">Primary</button>
        <button className="border-1 border-[#4cd3e3] text-[#4cd3e3] bg-white hover:bg-[#4cd3e3] hover:text-white h-11 w-30 rounded-3xl">Success</button>
        <button className="border-1 border-blue-400 text-blue-400 bg-white hover:text-white hover:bg-blue-400 h-11 w-24 rounded-3xl">Info</button>
        <button className="border-1 border-[#f4e700] text-[#f4e700] bg-white hover:text-white hover:bg-[#f4e700] h-11 w-30 rounded-3xl">Warning</button>
        <button className="border-1 border-[#f44a40] text-[#f44a40] bg-white hover:text-white hover:bg-[#f44a40] h-11 w-30 rounded-3xl">Danger</button>
        <button className="border-1 border-gray-100 bg-gray-100 text-blue-800 h-11 w-24 underline rounded-3xl">Link</button>
        <button className="border-1 border-gray-100 bg-gray-100 text-white h-11 w-30 rounded-3xl">Disable</button>
       </div>
       <div className="flex gap-4 mt-15">
         <button className="border-1 border-blue-800 bg-blue-800 text-white hover:bg-white hover:text-blue-800 h-15 w-45">Extra Large</button>
        <button className="border-1 border-[#4cd3e3] bg-[#4cd3e3] text-white hover:bg-white hover:text-blue-[#4cd3e3] h-13 w-25">Large</button>
         <button className="border-1 border-blue-800 bg-blue-800 text-white hover:bg-white hover:text-blue-800 h-11 w-30">Default</button>
        <button className="border-1 border-[#4cd3e3] bg-[#4cd3e3] text-white hover:bg-white hover:text-blue-[#4cd3e3] h-9 w-30">Medium</button>
         <button className="border-1 border-blue-800 bg-blue-800 text-white hover:bg-white hover:text-blue-800 h-7 w-30">Small</button>
       </div>
       <div className="flex gap-4 mt-5 mb-10">
        <button className="border-1 border-blue-800 text-blue-800 bg-white hover:bg-blue-800 hover:text-white h-15 w-45">Extra Large</button>
        <button className="border-1 border-[#4cd3e3] text-[#4cd3e3] bg-white hover:bg-[#4cd3e3] hover:text-white h-13 w-25">Large</button>
        <button className="border-1 border-blue-800 text-blue-800 bg-white hover:bg-blue-800 hover:text-white h-11 w-30">Default</button>
        <button className="border-1 border-[#4cd3e3] text-[#4cd3e3] bg-white hover:bg-[#4cd3e3] hover:text-white h-9 w-30">Medium</button>
        <button className="border-1 border-blue-800 text-blue-800 bg-white hover:bg-blue-800 hover:text-white h-7 w-30">Small</button>
       </div>
       </div>

        <div className="pt-10 pb-20 border-b-1 border-b-gray-100">
         <h1 className="text-[30px] text-black my-7 ">Left Aligned</h1>
         <div className="flex gap-10 mt-5">
          <img src={blogE1} alt="blogE1-image" className="md:h-20 w-30"/>
          <p className='lg:text-[18px] md:[14px] mt-2 text-gray-500'>Recently, the US Federal government banned online casinos from operating in America by making it illegal to transfer money to them through any US bank or payment system. As a result of this law, most of the popular online casino networks such as Party Gaming and PlayTech left the United States. Overnight, online casino players found themselves being chased by the Federal government. But, after a fortnight, the online casino industry came up with a solution and new online casinos started taking root. These began to operate under a different business umbrella, and by doing that, rendered the transfer of money to and from them legal. A major part of this was enlisting electronic banking systems that would accept this new clarification and start doing business with me. Listed in this article are the electronic banking systems that accept players from the United States that wish to play in online casinos.</p>
         </div>
         </div>

          <div className="pt-10 pb-20 border-b-1 border-b-gray-100">
         <h1 className="text-[30px] text-black my-7 ">Right Aligned</h1>
         <div className="flex gap-10 mt-5">
          <p className='lg:text-[18px] md:[14px] mt-2 text-gray-500'>Recently, the US Federal government banned online casinos from operating in America by making it illegal to transfer money to them through any US bank or payment system. As a result of this law, most of the popular online casino networks such as Party Gaming and PlayTech left the United States. Overnight, online casino players found themselves being chased by the Federal government. But, after a fortnight, the online casino industry came up with a solution and new online casinos started taking root. These began to operate under a different business umbrella, and by doing that, rendered the transfer of money to and from them legal. A major part of this was enlisting electronic banking systems that would accept this new clarification and start doing business with me. Listed in this article are the electronic banking systems that accept players from the United States that wish to play in online casinos.</p>
          <img src={blogE1} alt="blogE1-image" className="md:h-20 w-30"/>
         </div>
         </div>

          <div className="pt-10 pb-20 border-b-1 border-b-gray-100">
         <h1 className="text-[30px] text-black my-7 ">Definition</h1>
         <div className='flex gap-10'>
          <div>
             <h1 className="text-[30px] text-black">Definition 01</h1>
            <p className='text-[18px] text-gray-500'>Recently, the US Federal government banned online casinos from operating in America by making it illegal to transfer money to them through any US bank or payment system. As a result of this law, most of the popular online casino networks</p>
          </div>
          <div>
             <h1 className="text-[30px] text-black">Definition 02</h1>
            <p className='text-[18px] text-gray-500'>Recently, the US Federal government banned online casinos from operating in America by making it illegal to transfer money to them through any US bank or payment system. As a result of this law, most of the popular online casino networks</p>
          </div>
          <div>
          <h1 className="text-[30px] text-black">Definition 03</h1>
            <p className='text-[18px] text-gray-500'>Recently, the US Federal government banned online casinos from operating in America by making it illegal to transfer money to them through any US bank or payment system. As a result of this law, most of the popular online casino networks</p>
          </div>
          </div>
          
         </div>

         <div className="pt-10 pb-20 border-b-1 border-b-gray-100">
         <h1 className="text-[30px] text-black my-7 ">Black Quotes</h1>
         <div className='h-60 w-300 bg-gray-100 border-l-blue-800  mt-5 p-8 text-[18px] text-gray-500'>
          “Recently, the US Federal government banned online casinos from operating in America by making it illegal to transfer money to them through any US bank or payment system. As a result of this law, most of the popular online casino networks such as Party Gaming and PlayTech left the United States. Overnight, online casino players found themselves being chased by the Federal government. But, after a fortnight, the online casino industry came up with a solution and new online casinos started taking root. These began to operate under a different business umbrella, and by doing that, rendered the transfer of money to and from them legal. A major part of this was enlisting electronic banking systems that would accept this new clarification and start doing business with me. Listed in this article are the electronic banking”
         </div>
         </div>

         <div className="py-10 border-b-1 border-b-gray-100">
          <h1 className='text-[30px] text-black my-7 '>Table</h1>
          <div className='h-175 w-300 bg-gray-100 my-5 py-6 text-[18px] text-gray-500'>
            <div className='flex text-blue-800 uppercase border-b-1 border-b-gray-200 pb-2'>
              <p className='pl-10'>#</p>
              <h1 className='pl-20'>Countries</h1>
              <h2 className='pl-60'>Visits</h2>
              <h3 className='pl-50'>Percentages</h3>
            </div>
            <div className='flex text-gray-700 py-6 border-b-1 border-b-gray-200 pb-2'>
              <p className='pl-10'>01</p>
              <div className='flex gap-3 pl-18'>
                <img src={canada1} alt="canada1-pic" className='pb-3' />
                <h1 className=''>Canada</h1>
              </div>
              <h2 className='pl-55'>645032</h2>
              <div className='ml-49 h-1.5 w-70 bg-blue-500 mt-1'></div>
            </div>
           
           <div className='flex text-gray-700 py-6 border-b-1 border-b-gray-200 pb-2'>
              <p className='pl-10'>02</p>
              <div className='flex gap-3 pl-18'>
                <img src={canada2} alt="canada1-pic" className='pb-3' />
                <h1 className=''>Canada</h1>
              </div>
              <h2 className='pl-55'>645032</h2>
              <div className='ml-49 h-1.5 w-30 bg-red-600 mt-1'></div>
            </div>
            <div className='flex text-gray-700 py-6 border-b-1 border-b-gray-200 pb-2'>
              <p className='pl-10'>03</p>
              <div className='flex gap-3 pl-18'>
                <img src={canada3} alt="canada1-pic" className='pb-3' />
                <h1 className=''>Canada</h1>
              </div>
              <h2 className='pl-55'>645032</h2>
              <div className='ml-49 h-1.5 w-50 bg-orange-500 mt-1'></div>
            </div>
            <div className='flex text-gray-700 py-6 border-b-1 border-b-gray-200 pb-2'>
              <p className='pl-10'>04</p>
              <div className='flex gap-3 pl-18'>
                <img src={canada4} alt="canada1-pic" className='pb-3' />
                <h1 className=''>Canada</h1>
              </div>
              <h2 className='pl-55'>645032</h2>
              <div className='ml-49 h-1.5 w-55 bg-green-300 mt-1'></div>
            </div>
            <div className='flex text-gray-700 py-6 border-b-1 border-b-gray-200 pb-2'>
              <p className='pl-10'>05</p>
              <div className='flex gap-3 pl-18'>
                <img src={canada5} alt="canada1-pic" className='pb-3' />
                <h1 className=''>Canada</h1>
              </div>
              <h2 className='pl-55'>645032</h2>
              <div className='ml-49 h-1.5 w-35 bg-green-300 mt-1'></div>
            </div>
            <div className='flex text-gray-700 py-6 border-b-1 border-b-gray-200 pb-2'>
              <p className='pl-10'>06</p>
              <div className='flex gap-3 pl-18'>
                <img src={canada6} alt="canada1-pic" className='pb-3' />
                <h1 className=''>Canada</h1>
              </div>
              <h2 className='pl-55'>645032</h2>
              <div className='ml-49 h-1.5 w-60 bg-blue-500 mt-1'></div>
            </div>
            <div className='flex text-gray-700 py-6 border-b-1 border-b-gray-200 pb-2'>
              <p className='pl-10'>07</p>
              <div className='flex gap-3 pl-18'>
                <img src={canada7} alt="canada1-pic" className='pb-3' />
                <h1 className=''>Canada</h1>
              </div>
              <h2 className='pl-55'>645032</h2>
              <div className='ml-49 h-1.5 w-30 bg-purple-500 mt-1'></div>
            </div>
            <div className='flex text-gray-700 py-6  pb-2'>
              <p className='pl-10'>08</p>
              <div className='flex gap-3 pl-18'>
                <img src={canada8} alt="canada1-pic" className='pb-3' />
                <h1 className=''>Canada</h1>
              </div>
              <h2 className='pl-55'>645032</h2>
              <div className='ml-49 h-1.5 w-55 bg-red-600 mt-1'></div>
            </div>
            
          </div>
         </div>

         <div className='pt-10 pb-20 border-b-1 border-b-gray-100'>
          <h1 className='text-[30px] text-black my-5'>Image Gallery</h1>
          <div className='flex gap-7 h-55 w-115'>
            <img src={blogE2} alt="blogE2-image" />
            <img src={blogE3} alt="blogE3-image" />
            <img src={blogE4} alt="blogE4-image" />
           </div>
          <div className='flex gap-7 mt-5 h-55'>
             <img src={blogE5} alt="blogE5-image" className='w-152 object-cover' />
            <img src={blogE6} alt="blogE6-image" className='w-152 object-cover' />
            </div>
          <div className='flex gap-7 mt-5 h-55 w-98'>
             <img src={blogE7} alt="blogE7-image" />
            <img src={blogE9} alt="blogE8-image" />
            <img src={blogE8} alt="blogE9-image" />
          </div>
         </div>

         <div className='pt-10 pb-20 border-b-1 border-b-gray-100 h-200'>
          <div className='flex gap-10'>
          
             <div className='w-1/3'>
              <p className="text-[30px] text-black mb-5">Image Gallery</p>
            <h1 className='text-blue-400 text-[40px]'>This is header 01</h1>
            <h2 className='text-blue-400 text-4xl'>This is header 02</h2>
            <h3 className='text-blue-400 text-3xl'>This is header 03</h3>
            <h4 className='text-blue-400 text-2xl'>This is header 04</h4>
            <h5 className='text-blue-400 text-[20px]'>This is header 05</h5>
            <h6 className='text-blue-400 text-[16px]'>This is header 06</h6>
             </div>
          
          <div className='w-1/3'>
             <h1 className="text-[30px] text-black">Unordered List</h1>
            <div className='mt-5 ml-5 text-[18px] text-gray-800 leading-10'>
              <ul className='list-[circle]'>
                <li>Fta Keys</li>
                <li>For Women Only Your Computer Usage</li>
                <li>Facts Why Inkjet Printing Is Very Appealing</li>
                <li className='ml-8'>Addiction When Gambling Becomes</li>
                <li className='ml-18'>Protective Preventative Maintenance</li>
                <li>Dealing With Technical Support 10 Useful Tips</li>
                <li>Make Myspace Your Best Designed Space</li>
                <li>Cleaning And Organizing Your Computer</li>
              </ul>
            </div>
          </div>
          <div className='w-1/3'>
          <h1 className="text-[30px] text-black ml-5">Ordered List</h1>
           <div className='mt-5 text-[18px] leading-10 text-blue-300 ml-20'>
              <ul className='list-decimal'>
                <li>Fta Keys</li>
                <li>For Women Only Your Computer Usage</li>
                <li>Facts Why Inkjet Printing Is Very <br />Appealing</li>
                <li className='ml-20'>Addiction When Gambling Becomes</li>
                <li className='ml-35'>Protective Preventative Maintenance</li>
                <li>Dealing With Technical Support 10 <br />Useful Tips</li>
                <li>Make Myspace Your Best Designed <br />Space</li>
                <li>Cleaning And Organizing Your <br />Computer</li>
              </ul>
            </div>
          </div>
          </div>
         </div>

         <div className="flex justify-between pt-10 h-270 lg:my-2 md:my-100">
          <div className='text-[30px] text-black mt-7 lg:w-2/3 md:w-1/3'>
          <h1>Form Element</h1>
          <div className='h-10 lg:w-200 md:w-100 bg-gray-100 mt-10 mb-2 text-gray-500 text-[18px] pl-5 pt-2'>First Name</div>
          <div className='h-10 lg:w-200 md:w-100 bg-gray-100  mb-2 text-gray-500 text-[18px] pl-5 pt-2'>Last Name</div>
          <div className='h-10 lg:w-200 md:w-100 bg-gray-100  mb-2 text-gray-500 text-[18px] pl-5 pt-2'>Last Name</div>
          <div className='h-10 lg:w-200 md:w-100 bg-gray-100  mb-2 text-gray-500 text-[18px] pl-5 pt-2'>Email Address</div>
          <div className='h-10 lg:w-200 md:w-100 bg-gray-100  mb-2 text-gray-500 text-[18px] pl-10 pt-2'>Address</div>
          <div className='border-1 border-gray-500 h-10 lg:w-200 md:w-100 bg-white rounded-[4px] absolute'></div>
          <div className='h-10 lg:w-190 md:w-95 bg-gray-100   text-gray-500 text-[18px] ml-3 pt-2 pl-2 relative mt-4 flex gap-4'><FaPlane/>City</div>
          <div className='border-1 border-gray-500 h-10 lg:w-200 md:w-100 bg-white rounded-[4px] absolute mt-1'></div>
          <div className='h-10 lg:w-190 md:w-95 bg-gray-100   text-gray-500 text-[18px] pl-2 ml-3 pt-2 relative mt-4 flex gap-4'><FaGlobe/>Country</div>
          <div className='h-30 lg:w-200 md:w-100 bg-gray-100  mb-2 text-gray-500 text-[18px] pl-5 mt-1 pt-2'>Message</div>
          <div className='h-10 lg:w-200 md:w-100 bg-gray-100  mb-2 text-gray-500 text-[18px] pl-5 pt-2'>Primary Color</div>
          <div className='h-10 lg:w-200 md:w-100 bg-gray-100  mb-2 text-gray-500 text-[18px] pl-5 pt-2'>Accent Color</div>
          <div className='h-10 lg:w-200 md:w-100 bg-gray-100  mb-2 text-gray-500 text-[18px] pl-5 pt-2'>Secondary Color</div>
          </div>
          <div className='text-[30px] text-black mt-7 w-1/3 ml-5'>
          <h1>Switches</h1>
          <div className='text-gray-500 text-[18px]'>
           <div className='flex mt-10 mb-5'>
             <p>01. Sample Switch</p>
              <div>
          
            <div onClick={() => setIsSwitchOn(!isSwitchOn)} className="w-12 h-6 flex items-center bg-gray-300 rounded-full p-1 ml-27 cursor-pointer transition-colors duration-300">
              <div className={`bg-white w-4 h-4 rounded-full shadow-md transform transition-transform duration-300 ${
                isSwitchOn ? "translate-x-6 bg-blue-600":'translate-x-0' 
              }`}></div>
            </div>
          </div>
           </div>
           <div className='flex mb-5'>
             <p>02. Primary Color Switch</p>
              <div>
          
            <div onClick={() => setIsSwitchOn(!isSwitchOn)} className="w-12 h-6 flex items-center bg-gray-300 rounded-full p-1 ml-15 cursor-pointer transition-colors duration-300">
              <div className={`bg-white w-4 h-4 rounded-full shadow-md transform transition-transform duration-300 ${
                isSwitchOn ? "translate-x-6 bg-blue-600":'translate-x-0' 
              }`}></div>
            </div>
          </div>
           </div>
           <div className='flex mb-5'>
             <p>03. Confirm Color Switch</p>
              <div>
          
            <div onClick={() => setIsSwitchOn(!isSwitchOn)} className="w-12 h-6 flex items-center bg-gray-300 rounded-full p-1 ml-15 cursor-pointer transition-colors duration-300">
              <div className={`bg-white w-4 h-4 rounded-full shadow-md transform transition-transform duration-300 ${
                isSwitchOn ? "translate-x-6 bg-blue-600":'translate-x-0' 
              }`}></div>
            </div>
          </div>
           </div>
          </div>

         <div className='text-[30px] text-black mt-7'>
          <h1>Selectboxes</h1>
          <div className=" w-80  text-gray-500 text-[18px] pl-5 pt-2 b-0">
          <label htmlFor="fruit-select"></label>
      <select id="fruit-select" value={selectedOption} onChange={handleChange}>
          <div className=''><option value="" className="h-10 w-80 bg-gray-100  mb-2  mt-5">English</option></div>
          <option value="apple">Spanish</option>
        <option value="banana">Arabic</option>
        <option value="orange">Portuguise</option>
        <option value="orange">Bengali</option>
      </select>
    </div>
          </div>
           <div className='text-[30px] text-black mt-5'>
          <h1>Checkboxes</h1>
          <div className='text-gray-500 text-[18px]'>
           <div className='flex mt-5 mb-5'>
             <p>01. Sample Checkbox</p>
             <div>
        <label className="inline-flex items-center space-x-2 cursor-pointer ml-25">
          <input
            type="checkbox"
            className="form-checkbox h-5 w-5 text-blue-600 rounded"
            checked={isChecked}
            onChange={() => setIsChecked(!isChecked)}
          />
          
        </label>
      </div>
           </div>
           <div className='flex mb-5'>
             <p>02. Primary Color Checkbox</p>
               <div>
        <label className="inline-flex items-center space-x-2 cursor-pointer ml-13">
          <input
            type="checkbox"
            className="form-checkbox h-5 w-5 text-blue-600 rounded"
            checked={isChecked}
            onChange={() => setIsChecked(!isChecked)}
          />
          
        </label>
      </div>
           </div>
           <div className='flex mb-5'>
             <p>03. Confirm Color Checkbox</p>
               <div>
        <label className="inline-flex items-center space-x-2 cursor-pointer ml-13">
          <input
            type="checkbox"
            className="form-checkbox h-5 w-5 text-blue-600 rounded"
            checked={isChecked}
            onChange={() => setIsChecked(!isChecked)}
          />
          
        </label>
      </div>
           </div>
           <div className='flex mb-5'>
             <p>04. Disabled Checkbox</p>
               <div>
        <label className="inline-flex items-center space-x-2 cursor-pointer ml-23">
          <input
            type="checkbox"
            className="form-checkbox h-5 w-5 text-blue-600 rounded"
            checked={isChecked}
            onChange={() => setIsChecked(!isChecked)}
          />
          
        </label>
      </div>
           </div>
           <div className='flex mb-5'>
             <p>05. Disabled Checkbox active</p>
               <div>
        <label className="inline-flex items-center space-x-2 cursor-pointer ml-10">
          <input
            type="checkbox"
            className="form-checkbox h-5 w-5 text-blue-600 rounded"
            checked={isChecked}
            onChange={() => setIsChecked(!isChecked)}
          />
          
        </label>
      </div>
           </div>
           
          </div>
          </div>
           <div className='text-[30px] text-black mt-7'>
          <h1>Radios</h1>
           <div className='text-gray-500 text-[18px]'>
           <div className='flex mt-5 mb-5'>
             <p>01. Sample radio</p>
             
             <div className="space-y-2 ml-37">
            {[''].map((option) => (
          <label key={option} className="inline-flex items-center space-x-2 cursor-pointer">
            <input
              type="radio"
              name="options"
              value={option}
              className="form-radio text-blue-600"
              checked={selectedOption === option}
              onChange={(e) => setSelectedOption(e.target.value)}
            />
      </label>
        ))}
      </div>
           </div>
           <div className='flex mb-5'>
             <p>02. Primary Color radio</p>
             <div className="space-y-2 ml-25">
            {[''].map((option) => (
          <label key={option} className="inline-flex items-center space-x-2 cursor-pointer">
            <input
              type="radio"
              name="options"
              value={option}
              className="form-radio text-blue-600"
              checked={selectedOption === option}
              onChange={(e) => setSelectedOption(e.target.value)}
            />
      </label>
        ))}
      </div>
           </div>
           <div className='flex mb-5'>
             <p>03. Confirm Color radio</p>
             <div className="space-y-2 ml-25">
            {[''].map((option) => (
          <label key={option} className="inline-flex items-center space-x-2 cursor-pointer">
            <input
              type="radio"
              name="options"
              value={option}
              className="form-radio text-blue-600"
              checked={selectedOption === option}
              onChange={(e) => setSelectedOption(e.target.value)}
            />
      </label>
        ))}
      </div>
           </div>
           <div className='flex mb-5'>
             <p>04. Disabled radio</p>
             <div className="space-y-2 ml-36">
            {[''].map((option) => (
          <label key={option} className="inline-flex items-center space-x-2 cursor-pointer">
            <input
              type="radio"
              name="options"
              value={option}
              className="form-radio text-blue-600"
              checked={selectedOption === option}
              onChange={(e) => setSelectedOption(e.target.value)}
            />
      </label>
        ))}
      </div>
           </div>
           <div className='flex mb-5'>
             <p>05. Disabled radio active</p>
             <div className="space-y-2 ml-23">
            {[''].map((option) => (
          <label key={option} className="inline-flex items-center space-x-2 cursor-pointer">
            <input
              type="radio"
              name="options"
              value={option}
              className="form-radio text-blue-600"
              checked={selectedOption === option}
              onChange={(e) => setSelectedOption(e.target.value)}
            />
      </label>
        ))}
      </div>
           </div>
           
          </div>
          </div>
          </div>
          </div>

    </section>
    
  )
}

export default Blog3