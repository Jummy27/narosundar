import Customers from "../components/Customers";
import Haircut from "../components/Haircut"
import Services from "../components/Services"
import ServiceImg from "../images/gallery/instra2.jpg"
import { FaStar } from "react-icons/fa";

const Service = () => {
  return (
    <section className=''>
          <div className='flex grow mb-20'>
            <div className='bg-primary px-10 justify-center items-center'> 
              <h1 className='text-white p-3 pt-40 px-47 text-center text-5xl font-chivo font-extrabold items-center'>Services</h1>
            </div>
          <div className='flex grow cursor-default'>
            <img src={ServiceImg} alt="About Picture" className='object-cover w-full h-110 font-chivo'/>
          </div>
          </div>
    

    <Services/>

    <Haircut/>

    <Customers icon={<FaStar className="text-secondary"/>}/>



   </section>


  )
}

export default Service