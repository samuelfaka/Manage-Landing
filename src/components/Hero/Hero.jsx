import React from 'react'
import Image1 from '../../assets/image/illu-intro.svg';


const ImageList = [
    {
        id: 1,
        img: Image1,
        title: "Bring everyone together to build better products",
        description: " Manage makes it simple for software teams to plan day-to-day tasks while keeping the larger team goals in view.",
    },
]

const Hero = () => {
  return (
    <div className='flex items-center justify-center'>
        {/* background */}
        <div className=''> 
        </div>
        {/* Hero */}
        <div className='container pb-8 sm:pb-0'>
            <div>
             <div className='flex flex-col-reverse lg:flex-row py-10 gap-10 lg:gap-60'>
                    {/* text contain section */}
                    <div className='flex flex-col justify-center lg:gap-10 gap-5 pt-12 sm:pt-0 items-center lg:items-start'>
                        <h1
                         data-aos="zoom-out"
                         data-aos-once="true"
                         data-aos-duration="500"
                        className='text-4xl sm:text-6xl text-center lg:text-left lg:text-5xl font-bold lg:w-96'> Bring everyone together to build better products.</h1>
                        <p 
                          data-aos="zoom-out"
                          data-aos-delay="100"
                          data-aos-duration="500"
                        className='text-sm w-72 text-center lg:text-left text-gray-500'>  Manage makes it simple for software teams to plan day-to-day 
                        tasks while keeping the larger team goals in view.</p>
                        <div>
                        <button
                         data-aos="zoom-out"
                         data-aos-delay="300"
                         data-aos-duration="500"
                        className="bg-red-500 hover:scale-105 text-xs shadow-lg
                        duration-200 text-white py-2 px-4 rounded-full"
                        >Get Started</button>
                        </div>
                    </div>
                    
                    {/* Image section */}
                    <div>
                        <div>
                            <img
                             data-aos="zoom-out"
                             data-aos-once="true"
                             data-aos-duration="500"
                            src={Image1} alt=""
                            className='lg:w-[500px]'
                            />
                        </div>
                    </div>

                </div>
            </div>
        </div>

    </div>
  )
}

export default Hero