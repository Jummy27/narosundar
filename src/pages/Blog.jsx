import Blog1 from '../components/Blog1';
import Hero1 from '../images/hero/h1_hero1.jpg';




 function Blog() {
return (

      <section>
        <div className='flex grow mb-30'>
                                    <div className='bg-primary px-10 justify-center items-center'> 
                                      <h1 className='text-white p-3 pt-40 px-47 text-center text-5xl font-chivo font-extrabold items-center'>Blog</h1>
                                    </div>
                                  <div className='flex grow cursor-default'>
                                    <img src={Hero1} alt="Gallery Picture" className='object-cover w-full h-110 font-chivo'/>
                                  </div>
                                  </div>

  <Blog1/>

    </section>
  )
}

export default Blog




      
    
    
 