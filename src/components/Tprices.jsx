import barber1 from "../images/gallery/barber1.jpg";
import barber2 from "../images/gallery/barber2.jpg";
import barber3 from "../images/gallery/barber3.jpg";
import barber4 from "../images/gallery/barber4.jpg";
import barber5 from "../images/gallery/barber5.jpg";
import barber6 from "../images/gallery/barber6.jpg";

const Tprices = () => {
  return (
    <section className="flex">
        <div className="grid grid-cols-3 h-100 w-190">
            <img src={barber1} alt="Barber1 Img" />
            <img src={barber2} alt="Barber2 Img" />
            <img src={barber3} alt="Barber3 Img" />
            <img src={barber4} alt="Barber4 Img" />
            <img src={barber5} alt="Barber5 Img" />
            <img src={barber6} alt="Barber6 Img" />
        </div>
        <div className="mx-20">
            <div className="uppercase text-5xl text-primary font-bold py-5 border-b-1 mb-10 ">our top prices</div>
            <div className="text-[20px]">
            <div className="flex border-b-1 pt-5 border-gray-300 pb-5 mb-3 font-chivo">
                <h4 className="cursor-pointer">Special Beard Treatment</h4> 
                <h5 className="ml-30 text-gray-600">From</h5>
                <p className="ml-2 text-secondary font-bold">$40</p>

                </div>

                <div className="flex border-b-1 border-gray-300 pb-5 pt-2 mb-3 font-chivo">
                <h4 className="cursor-pointer">Special Beard Treatment</h4> 
                <h5 className="ml-30 text-gray-600">From</h5>
                <p className="ml-2 text-secondary font-bold">$40</p>

                </div>

                <div className="flex border-b-1 border-gray-300 pb-5 pt-2 mb-3 font-chivo">
                <h4 className="cursor-pointer">Color your Beard</h4> 
                <h5 className="ml-45 text-gray-600">From</h5>
                <p className="ml-2 text-secondary font-bold">$40</p>

                </div>
                <div className="flex border-b-1 border-gray-300 pb-5 pt-2 mb-3 font-chivo">
                <h4 className="cursor-pointer">Wax your Beard</h4> 
                <h5 className="ml-47 text-gray-600">From</h5>
                <p className="ml-2 text-secondary font-bold">$40</p>

                </div>

                
                
                <div className="flex border-b-1 border-gray-300 pb-5 pt-2 mb-3 font-chivo">
                <h4 className="cursor-pointer">Wax your Beard</h4> 
                <h5 className="ml-47 text-gray-600">From</h5>
                <p className="ml-2 text-secondary font-bold">$40</p>

                </div>

          </div>
        </div>
    </section>
  )
}

export default Tprices