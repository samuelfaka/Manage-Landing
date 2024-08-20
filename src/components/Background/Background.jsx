import React from 'react'

const Background = () => {
  return (
    <div
    data-aos="zoom-in"
    className='bg-red-400 text-white'>
        <div className='container py-10'>
            <div className='flex flex-col items-center justify-center gap-10 lg:flex-row lg:justify-between'>
                <h1 
                data-aos="zoom-in"
                className='text-3xl lg:text-2xl font-bold lg:w-72 w-60 text-center lg:text-left'>
                implify how your team works today.
                </h1>

                <div>
                <button
              data-aos="zoom-in"
              className="bg-white hover:scale-125 text-xs shadow-lg text-red-500
              duration-200 py-2 px-4 rounded-full"
              >
                Get started
              </button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Background