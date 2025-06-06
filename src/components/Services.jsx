import Img2 from "../images/gallery/about2.jpg";

const Services = () => {
  return (
    <section className="mx-15 mt-40 mb-35">
        <div className="lg:flex justify-between">
            <div className="">
              <div className='border-3 border-secondary w-13 mb-10'></div>
                <h1 className="text-4xl uppercase font-bold">All we do for you </h1>
                <div className="border-2 text-white font-bold text-2xl mt-10 cursor-pointer border-secondary bg-secondary pl-8 pr-110 py-5 my-5">For Hair</div>
                
                <section className="text-[20px]">
                <div className="flex border-b-1 border-gray-300 pb-3 mb-3 mt-10 font-chivo">
                <h4 className="cursor-pointer">Trim your Hair</h4> 
                <h5 className="ml-88 text-gray-600">From</h5>
                <p className="ml-2 text-secondary font-bold">$40</p>
                
                </div>
                
                <div className="flex border-b-1 border-gray-300 pb-3 mb-3 font-chivo">
                <h4 className="cursor-pointer">Special Beard Treatment</h4> 
                <h5 className="ml-64 text-gray-600">From</h5>
                <p className="ml-2 text-secondary font-bold">$40</p>

                </div>
                <div className="flex border-b-1 border-gray-300 pb-3 mb-3 font-chivo">
                <h4 className="cursor-pointer">Color your Beard</h4> 
                <h5 className="ml-82 text-gray-600">From</h5>
                <p className="ml-2 text-secondary font-bold">$40</p>

                </div>
                <div className="flex border-b-1 border-gray-300 pb-3 mb-3 font-chivo">
                <h4 className="cursor-pointer">Wax your Beard</h4> 
                <h5 className="ml-84 text-gray-600">From</h5>
                <p className="ml-2 text-secondary font-bold">$40</p>

                </div>
                </section>
                
                <div className="border-2 cursor-pointer text-white font-bold text-2xl border-secondary bg-secondary pl-8 pr-110 py-5 mt-12">For Beard</div>
            </div>
            <div className="w-[500px] md:mt-10">
                <img src={Img2} alt="About Img2" />
            </div>
        </div>
    </section>
  )
}

export default Services