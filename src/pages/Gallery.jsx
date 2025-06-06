
import Hero3 from "../images/gallery/hero3.jpg";
import instra1 from "../images/gallery/instra1.jpg";
import instra2 from "../images/gallery/instra2.jpg";
import instra3 from "../images/gallery/instra3.jpg";
import instra4 from "../images/gallery/instra4.jpg";
import instra5 from "../images/gallery/instra5.jpg";
import instra6 from "../images/gallery/instra6.jpg";

const Gallery=() => {
  return (
    <section>
      <div className='flex grow'>
                  <div className='bg-primary px-10 justify-center items-center'> 
                    <h1 className='text-white p-3 pt-40 px-47 text-center text-5xl font-chivo font-extrabold items-center'>Gallery</h1>
                  </div>
                <div className='flex grow cursor-default'>
                  <img src={Hero3} alt="Gallery Picture" className='object-cover w-full h-110 font-chivo'/>
                </div>
                </div>


                 <div className='border-3 border-secondary w-13 mt-25 lg:ml-160 md:ml-90 '></div>

                <div className="uppercase text-primary text-center text-5xl font-bold mt-10 mb-10 md:text-center">gallery</div>

                <div className="flex gap-6 lg:h-85 lg:w-100 mx-15 mb-8 md:w-50 md:h-45">
                  <img src={instra1} alt="Gallery Img1" />
                  <img src={instra2} alt="Gallery Img2" />
                  <img src={instra3} alt="Gallery Img3" />
                  </div>
                  <div className="flex gap-6 lg:h-85 mx-15 mb-40 md:w-50 md:h-45">
                  <img src={instra4} alt="Gallery Img4" className="w-100" />
                  <img src={instra5} alt="Gallery Img5" className="w-105" />
                  <img src={instra6} alt="Gallery Img6"  className="w-100"/>
                  </div>

                

                
    </section>




  )
}

export default Gallery