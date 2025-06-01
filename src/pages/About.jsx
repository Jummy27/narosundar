
import Customers from '../components/Customers';
import Haircut from '../components/Haircut';
import Services from '../components/Services';
import Story from '../components/Story';
import Aboutpic from '../images/gallery/instra3.jpg';
import { FaStar } from "react-icons/fa";
import instra5 from '../images/gallery/instra2.jpg';
import instra1 from '../images/gallery/instra1.jpg';
import instra2 from '../images/gallery/instra2.jpg';
import instra3 from '../images/gallery/instra3.jpg';
import instra4 from '../images/gallery/instra4.jpg';



function About() {
  return (
    <section className=''>
      <div className='flex grow'>
        <div className='bg-primary px-10 justify-center items-center'> 
          <h1 className='text-white p-3 pt-40 px-47 text-center text-5xl font-chivo font-extrabold items-center'>About Us</h1>
        </div>
      <div className='flex grow cursor-default w-1/3'>
        <img src={Aboutpic} alt="About Picture" className='object-center h-100 w-full font-chivo'/>
      </div>
      </div>

      <Story/>

     <Services/>

     <Haircut/>

    <div className='md:grid grid-cols-2 lg:flex grow h-57 w-120'>
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

export default About;