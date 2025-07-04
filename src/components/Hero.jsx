import heroImg from "../images/hero/h1_hero1.jpg";
import scissor from "../images/icons/scissors.svg"


const Hero = () => {
  return (

    <section className="md:flex md:h-[600px]">
        <div className="md:flex md:items-center md:justify-end w-full
        md:w-1/2 lg:w-2/5 md:pl-24 pr-0  bg-primary text-white
        py-8 md:py-0">
            <div className="flex flex-col justify-center items-start pr-20">
                <img src={scissor} alt="scissor" />
                <h1 className="text-3xl md:text-4xl lg:text-6xl font-[800] font-chivo uppercase pr-12 my-4">
                    we're the <br /> last of <br /> breed
                </h1>
                <p className="text-base sm:text-2xl mb-4 ">Achieve your Dream Style</p>
                <button className="text-white bg-secondary w-[150px]  sm:w-[200px] h-[70px] uppercase 
                font-bold text-base cursor-pointer hover:bg-white hover:text-secondary 
                transition duration-300">
                     Book Now </button>
            </div>
        </div>

        <div className="hidden md:block md:w-1/2 lg:w-3/5 md:h-[600px]">
            <img src={heroImg} 
            alt="hero image" className="object-full w-full h-full " />
        </div>

    </section>
  )
}

export default Hero