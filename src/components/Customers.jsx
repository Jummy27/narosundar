import Customer1 from "../images/gallery/customer1.png";
import Customer2 from "../images/gallery/customer2.png";
import Customer3 from "../images/gallery/customer3.png";



const Customers = ({icon}) => {
  return (
    <section className="mb-40">
        <h1 className="text-4xl text-center uppercase font-extrabold text-primary mt-30 mb-15">customers say about us</h1>
        <div className="flex ml-7 mr-15">
            <div className="ml-10 border-gray-200 border-1 p-10 pb-30">
            <span className="block mb-2">{icon}</span>
            <h4 className="text-2xl my-7">"Consectetur adipiscing elit, sed do eiusmod tempor dunt ulter labore et dolore magna.</h4>
           <div className="flex">
            <img src={Customer1} alt="customer1-image"/>
           <div className="text-left ml-5 pt-3 text-[18px]">Wilma Mumduya</div> 
           </div>
            
            </div>

            <div className="border-gray-200 border-1 p-10 pb-30">
            <span className="block mb-2">{icon}</span>
            <h4 className="text-2xl my-7">"Consectetur adipiscing elit, sed do eiusmod tempor dunt ulter labore et dolore magna.</h4>
            <div className="flex">
            <img src={Customer2} alt="customer1-image"/>
           <div className="text-left ml-5 pt-3 text-[18px]">Jimmy Changa</div> 
           </div>
            </div>

            <div className="border-gray-200 border-1 p-10 pb-30">
            <span className="block mb-2">{icon}</span>
            <h4 className="text-2xl my-7">"Consectetur adipiscing elit, sed do eiusmod tempor dunt ulter labore et dolore magna.</h4>
            <div className="flex">
            <img src={Customer3} alt="customer1-image"/>
           <div className="text-left ml-5 pt-3 text-[18px]">Pastor Joshua</div> 
           </div>
            </div>
            
            
        </div>

    </section>
  )
}

export default Customers