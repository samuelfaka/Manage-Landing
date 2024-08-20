import React from 'react'
import Img2 from '../../assets/image/ali.png';
import Img1 from '../../assets/image/anisha.png';
import Img3 from '../../assets/image/richard.png';
import Img4 from '../../assets/image/shanai.png';
import Slider from 'react-slick';


const TestimoinalData = [

  {
    id: 1,
    img: Img2,
    name: "Ali Bravo",
    text: " “We have been able to cancel so many other subscriptions since using Manage. There is no more cross-channel confusion and everyone is much more focused.” ",
  },
  {
    id: 1,
    img: Img1,
    name: "Anisha Li",
    text: " “Manage has supercharged our team’s workflow. The ability to maintain visibility on larger milestones at all times keeps everyone motivated.” ",
  },
  {
    id: 1,
    img: Img3,
    name: "  Richard Watts",
    text: " “Manage allows us to provide structure and process. It keeps us organized and focused. I can’t stop recommending them to everyone I talk to!”",
  },
  {
    id: 1,
    img: Img4,
    name: "  Shanai Gough",
    text: "  “Their software allows us to track, manage and collaborate on our projects from anywhere. It keeps the whole team in-sync without being intrusive.”",
  },
]

const Testimoinal = () => {

  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
    responsive: [
      {
        breakpoint: 10000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className='py-10 mb-10'> 
      <div className=''>
        {/* Header section */}
        <div className='text-center mb-10 max-[600px] mx-auto'>
                <h1 data-aos="zoom-in" className='text-3xl font-bold'>
                What they’ve said
                </h1>
            </div>

            {/* Testimoinal card */}

            <div>
              <Slider {... settings}>
                {
                  TestimoinalData.map((data) => (

                    <div
                    data-aos="zoom-in"
                    data-aos-delay={data.aosDelay}
                    className='my-6'>
                         <div key={data.id} className='flex flex-col gap-4 shadow-lg py-8 px-6 mx-4 rounded-xl
                           bg-red-50 relative'>
                         <div className='mb-4'>
                        <img src={data.img} alt="" 
                        className='rounded-full w-16'
                        />
                       </div>
                       <div  className='flex items-center gap-4 flex-col'>
                       <div className='space-y-3'>
                       <h1 className='text-xl font-bold text-black/80 dark:text-light'>{data.name}</h1>
                        <p className='text-xs text-gray-500'>{data.text}</p>
                       </div>
                       </div>
                       <p className='text-black/20 text-9xl font-serif absolute top-0 right-0'>,,</p>

                    </div>
                    </div>

                 
                  ))
                }
              </Slider>
            </div>
            <div className='py-10 lg:py-12 flex flex-col items-center justify-center'>
              <button
              data-aos="zoom-in"
              className="bg-red-500 hover:scale-105 text-xs shadow-lg
              duration-200 text-white py-2 px-4 rounded-full"
              >
                Get started
              </button>
            </div>
      </div>
    </div>
  )
}

export default Testimoinal