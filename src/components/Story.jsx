import StoryImg from '../images/gallery/about1.jpg';
import { story } from "../data";



const Story = () => {
  return (
<section className='mx-10 mt-30 mb-20'>
    <div className='flex justify-between gap-7 p-5 '>
        <div className=' w-100 text-[20px] text-gray-600'>
            {
              story.map((story)=> {
                const {id, img, text} = story;
                return (
                  <article className='flex gap-6' key={id}>
                    <img src={img} alt="arrow-img"className='pt-0 t-0 mb-12' />
                    <p className='mb-5 '>{text}</p>


                  </article>
                )

              })
            }
        </div>
        <div> 
<img src={StoryImg} alt="Abouts img" className='w-100' />
        </div>

        <div className='w-100 mt-15'> 
          <div className=''></div>
<h1 className='text-black uppercase text-4xl font-extrabold font-chivo pt-5'>About Our <br /> Story</h1>
<p className='text-gray-600 text-[20px] mt-10'>There are many variations of passages of <br /> Lorem Ipsum available be the majority <br />have suffered alteration in 
  some form, by <br /> injected humour or randomised words.
</p>
<button className='p-3  px-10 cursor-pointer text-[20px] text-secondary border-2 font-bold mt-7 hover:bg-secondary hover:text-white '>
  Book Now
</button>
        </div>
    </div>
</section>
  )
}

export default Story;