import Hero1 from "../images/hero/h1_hero1.jpg";
import { PiHouseLineLight } from "react-icons/pi";
import { HiMiniDevicePhoneMobile } from "react-icons/hi2";
import { PiEnvelopeThin } from "react-icons/pi";

const Contact = () => {
  return (
    <section>
      <div className='flex grow mb-30'>
                        <div className='bg-primary px-10 justify-center items-center'> 
                          <h1 className='text-white p-3 pt-40 px-47 text-center text-5xl font-chivo font-extrabold items-center'>Contact</h1>
                        </div>
                      <div className='flex grow cursor-default'>
                        <img src={Hero1} alt="Gallery Picture" className='object-cover w-full h-110 font-chivo'/>
                      </div>
                      </div>

                    <div className="ml-15 mb-30">
                    <h1 className="text-primary text-3xl font-bold mb-10">Get in Touch</h1>
                      <div className="flex">
                        <div className="text-gray-400 text-[15px]">
                          <textarea name="" id="" className="border-1 border-gray-300 h-50 w-[800px] pl-5 pt-3 ">Enter Message</textarea>
                          <div className="flex gap-6 mt-6">
                            <button className="border-1 border-gray-300 text-left pl-5 w-[390px] h-13">Enter your name</button>
                            <button className="border-1 border-gray-300 text-left pl-5 w-[390px] h-13">Email</button>
                          </div>
                          <button className="border-1 border-gray-300 text-left pl-5 w-[800px] h-13 mt-7">Enter Subject</button>
                          <div><button className="text-secondary border-1 border-secondary h-16 cursor-pointer w-35 mt-12 uppercase hover:text-white hover:bg-secondary ">Send</button></div>
                        </div>
                        <div className="ml-30 flex gap-5">
                          <div className="">
                          {<PiHouseLineLight className="text-gray-400 w-8 h-10 mb-13"/>}
                          {<HiMiniDevicePhoneMobile className="text-gray-400 w-10 h-10 mb-14"/>}
                          {<PiEnvelopeThin className="text-gray-400 w-10 h-10"/>}
                          </div>
                          <div className="text-[18px]">
                            <h4 className="">Buttonwood, California</h4>
                            <p className=" text-gray-400 mb-10">Rosemead, CA 91770</p>

                            <h4>+1 253 565 2365</h4>
                            <p className="text-gray-400 mb-10">Mon to Fri 9am to 6pm</p>

                            <h4>support@colorlib.com</h4>
                            <p className="text-gray-400">Send us your query anytime!</p>

                          </div>
                        </div>
                      </div>
                    </div>
    </section>
  )
}

export default Contact