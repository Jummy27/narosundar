import Bimg from "../images/gallery/section-bg.jpg";
import Icon1 from "../images/icons/services1.svg";
import Icon2 from "../images/icons/services2.svg";
import Icon3 from "../images/icons/services3.svg";



const Haircut = () => {
  return(
    <section className="relative flex items-center justify-center w-full h-[800px] xl:h-[500px] md:w-full">
        <img src={Bimg} alt="Background img" className="w-full h-[550px]" />


        
           <div className="absolute flex items-center justify-center gap-10 md:flex-wrap md:justify-start">
             <div className="hover:bg-white flex flex-col justify-center items-center rounded-2xl  border-black bg-primary w-[350px] h-2/3 py-10 px-10">
                <img src={Icon1} alt="Service Icon1" className=""/>
                <h1 className="text-white my-7 text-2xl cursor-pointer font-bold hover:text-black">Stylish hair cut</h1>
                <p className="text-gray-500 text-[19px] text-center">Available be the majority have suffered alteration in some form, by injected humour.</p>
            </div>
            <div className="hover:bg-white flex flex-col justify-center items-center rounded-2xl  border-black bg-primary w-[350px] h-2/3 py-10 px-10">
                <img src={Icon2} alt="Service Icon1" className=""/>
                <h1 className="text-white my-7 text-2xl font-bold  hover:text-black">Cut & hair style</h1>
                <p className="text-gray-500 text-[19px] text-center">Available be the majority have suffered alteration in some form, by injected humour.</p>
            </div>
            <div className="hover:bg-white flex flex-col justify-center items-center rounded-2xl  border-black bg-primary w-[350px] h-2/3 py-10 px-10">
                <img src={Icon3} alt="Service Icon1" className=""/>
                <h1 className="text-white text-center my-7 text-2xl font-bold  hover:text-black">Color & hair wash</h1>
                <p className="text-gray-500 text-[19px] text-center">Available be the majority have suffered alteration in some form, by injected humour.</p>
            </div>

            </div>
           
        

    </section>

  )
}

export default Haircut;