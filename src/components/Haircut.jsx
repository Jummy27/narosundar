import Bimg from "../images/gallery/section-bg.jpg";
import Icon1 from "../images/icons/services1.svg";
import Icon2 from "../images/icons/services2.svg";
import Icon3 from "../images/icons/services3.svg";



const Haircut = () => {
  return(
    <section className="w-full h-[600px] relative flex object-cover object-right">
        <img src={Bimg} alt="Background img" className="bg" />


        
            <div className="hover:bg-white flex flex-col justify-center items-center rounded-2xl border-black bg-primary absolute w-[300px] h-2/3 my-22 ml-40 py-10 px-12">
                <img src={Icon1} alt="Service Icon1" className=""/>
                <h1 className="text-white my-7 text-2xl cursor-pointer font-bold hover:text-black">Stylish hair cut</h1>
                <p className="text-gray-500 text-[19px] text-center">Available be the majority have suffered alteration in some form, by injected humour.</p>
            </div>
            <div className="hover:bg-white flex flex-col justify-center items-center rounded-2xl border-black bg-primary absolute w-[300px] h-2/3 my-22 ml-123 py-10 px-12">
                <img src={Icon2} alt="Service Icon1" className=""/>
                <h1 className="text-white my-7 text-2xl font-bold  hover:text-black">Cut & hair style</h1>
                <p className="text-gray-500 text-[19px] text-center">Available be the majority have suffered alteration in some form, by injected humour.</p>
            </div>
            <div className="hover:bg-white flex flex-col justify-center items-center rounded-2xl border-black bg-primary absolute w-[300px] h-2/3 my-22 ml-205 py-10 px-12">
                <img src={Icon3} alt="Service Icon1" className=""/>
                <h1 className="text-white text-center my-7 text-2xl font-bold  hover:text-black">Color & hair wash</h1>
                <p className="text-gray-500 text-[19px] text-center">Available be the majority have suffered alteration in some form, by injected humour.</p>
            </div>
        

    </section>

  )
}

export default Haircut;