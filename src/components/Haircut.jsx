import { NavLink } from "react-router-dom";
import Bimg from "../images/gallery/section-bg.jpg";
import Icon1 from "../images/icons/services1.svg";
import Icon2 from "../images/icons/services2.svg";
import Icon3 from "../images/icons/services3.svg";



const Haircut = () => {
  return(
    <section className="relative flex items-center justify-center  xl:h-[500px]  ">
        <img src={Bimg} alt="Background img" className="lg:w-full lg:h-[600px] md:w-full md:h-[800px] md:object-cover" />


        
           <div className="absolute flex items-center justify-center gap-7 md:flex-wrap md:h-[470px] md:justify-start md:mb-50 lg:mb-10">
             <div className="hover:bg-white flex flex-col justify-center items-center rounded-2xl  border-black bg-primary lg:w-[280px] lg:h-2/3 py-10 px-10">
                <img src={Icon1} alt="Service Icon1" className=""/>
                <a href='#'><h1 className="text-white my-7 text-2xl cursor-pointer font-bold hover:text-black">Stylish hair cut</h1></a>
                <p className="text-gray-500 text-[19px] text-center">Available be the majority have suffered alteration in some form, by injected humour.</p>
            </div>
            <div className="hover:bg-white flex flex-col justify-center items-center rounded-2xl  border-black bg-primary lg:w-[280px] lg:h-2/3 py-10 px-10">
                <img src={Icon2} alt="Service Icon1" className=""/>
                <a href="#"><h1 className="text-white my-7 text-2xl font-bold  hover:text-black">Cut & hair style</h1></a>
                <p className="text-gray-500 text-[19px] text-center">Available be the majority have suffered alteration in some form, by injected humour.</p>
            </div>
            <div className="hover:bg-white flex flex-col justify-center items-center rounded-2xl  border-black md:mb-25 lg:mb-8 bg-primary mt-7 lg:w-[280px] lg:h-2/3 py-10 px-10 ">
                <img src={Icon3} alt="Service Icon1" className=""/>
                <a href="#"><h1 className="text-white text-center my-7 text-2xl font-bold  hover:text-black">Color & hair wash</h1></a>
                <p className="text-gray-500 text-[19px] text-center">Available be the majority have suffered alteration in some form, by injected humour.</p>
            </div>

            </div>
           
        

    </section>

  )
}

export default Haircut;