import Haircut from "../components/Haircut";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Story from "../components/Story";
import Tprices from "../components/Tprices";
import { FaStar } from "react-icons/fa";
import instra5 from '../images/gallery/instra2.jpg';
import instra1 from '../images/gallery/instra1.jpg';
import instra2 from '../images/gallery/instra2.jpg';
import instra3 from '../images/gallery/instra3.jpg';
import instra4 from '../images/gallery/instra4.jpg';
import Customers from "../components/Customers";



function HomePage () {
  return (
   <section>
    <Hero/>
    <Story/>
    <Tprices/>
    <Services/>
    <Haircut/>
    <div className='flex grow h-57 w-120'>
          <img src={instra5} alt="instra5-img" />
          <img src={instra1} alt="instra1-img" />
          <img src={instra2} alt="instra2-img" />
          <img src={instra3} alt="instra3-img" />
          <img src={instra4} alt="instra4-img" />
        
        </div>
        <Customers icon={<FaStar className="text-secondary"/>}/>
    </section>
   

   
    
   



  )
}

export default HomePage;