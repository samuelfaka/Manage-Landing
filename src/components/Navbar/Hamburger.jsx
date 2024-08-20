import React from 'react'
import HamburgerButton from '../../assets/image/icon-ham.svg'

const Hamburger = () => {
  return (
    <div className='lg:hidden'>
        <img src={HamburgerButton} alt="" 
        className='w-6 cursor-pointer'
        />

      
    </div>
  )
}

export default Hamburger