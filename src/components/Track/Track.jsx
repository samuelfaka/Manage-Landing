import React from 'react'

const Track = () => {
  return (
    <div 
     data-aos="zoom-out"
    className='container'>
        <div className='flex flex-col gap-10 lg:flex-row lg:gap-96'>

            <div className='flex flex-col items-center gap-6 lg:items-start'>
                <h1
                 data-aos="zoom-in"
                className='lg:text-2xl font-bold text-gray-800 lg:w-80 sm:text-6xl text-center lg:text-left text-4xl'>
                   What’s different about Manage?
                </h1>
                <p 
                 data-aos="zoom-in"
                className='text-sm w-72 text-center lg:text-left lg:text-sm text-gray-500'>
                Manage provides all the functionality your team needs, without 
                the complexity. Our software is tailor-made for modern digital 
                product teams.
                </p>
            </div>



           <div className='flex flex-col gap-6 '>
           <div className='flex flex-col gap-5 lg:gap-2'>
            <div className='flex items-center gap-3 bg-red-100 lg:w-64 rounded-2xl lg:bg-white p-1'>
                <h1 
                 data-aos="zoom-in"
                className='lg:text-xs bg-red-400 w-10 text-center text-white font-semibold rounded-2xl'>01</h1>
                <h1 
                 data-aos="zoom-in"
                className='lg:text-xs'>
                Track company-wide progress
                </h1>
            </div>
            <div >
                <p
                 data-aos="zoom-in"
                className='text-sm w-80 lg:w-80 lg:text-left lg:text-xs text-gray-500'>
                See how your day-to-day tasks fit into the wider vision. Go from 
                tracking progress at the milestone level all the way done to the 
                smallest of details. Never lose sight of the bigger picture again.
                </p>
            </div>
            </div>
            <div className='flex flex-col gap-5 lg:gap-2'>
            <div className='flex items-center gap-3 bg-red-100 lg:w-64 rounded-2xl lg:bg-white p-1'>
                <h1 
                 data-aos="zoom-in"
                className='lg:text-xs bg-red-400 w-10 text-center text-white font-semibold rounded-2xl'>02</h1>
                <h1 
                 data-aos="zoom-in"
                className='lg:text-xs'>
                Advanced built-in reports
                </h1>
            </div>
            <div >
                <p
                 data-aos="zoom-in"
                className='text-sm w-80 lg:w-80 lg:text-left lg:text-xs text-gray-500'>
                Set internal delivery estimates and track progress toward company 
                goals. Our customisable dashboard helps you build out the reports 
                you need to keep key stakeholders informed.
                </p>
            </div>
            </div>
            <div className='flex flex-col gap-5 lg:gap-2'>
            <div className='flex items-center gap-3 bg-red-100 lg:w-64 rounded-2xl lg:bg-white p-1'>
                <h1 
                 data-aos="zoom-in"
                className='lg:text-xs bg-red-400 w-10 text-center text-white font-semibold rounded-2xl'>03</h1>
                <h1 
                 data-aos="zoom-in"
                className='lg:text-xs'>
                Everything you need in one place
                </h1>
            </div>
            <div >
                <p 
                 data-aos="zoom-in"
                className='text-sm w-80 lg:w-80 lg:text-left lg:text-xs text-gray-500'>
                Everything you need in one place
                Stop jumping from one service to another to communicate, store files, 
                track tasks and share documents. Manage offers an all-in-one team 
                productivity solution.
                </p>
            </div>
            </div>
           </div>









        </div>
    </div>
  )
}

export default Track