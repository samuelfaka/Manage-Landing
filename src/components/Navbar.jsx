import React from 'react'
import Logo from '../assets/image/logo.svg'
import Hamburger from '../components/Navbar/Hamburger';




const MenuLink = [
    {
        id: 1,
        name: "Pricing",
        link: "/#pricing",
    },
    {
        id: 2,
        name: "Product",
        link: "/#product",
    },
    {
        id: 1,
        name: " About Us",
        link: "/#about us",
    },
    {
        id: 1,
        name: "Careers",
        link: "/#careers",
    },
    {
        id: 1,
        name: "Community",
        link: "/#community",
    },
]

const Navbar = () => {
  return (
    <div className=''>
        {/* upper class */}
        <div className=' py-7'>
            <div className='container flex items-center justify-between'>
                <div>
                    <a href="">
                        <img src={Logo} alt="Logo" 
                        className='h-6 lg:h-8' 
                        />
                    </a>
                </div>
                {/* menu class */}
                <div>
                    <div className='group hidden sm:block'>
                         <ul className='flex items-center gap-4 font-semibold text-xs'>
                            {
                                MenuLink.map((data, index) => (
                                    <li key={index}>
                                        <a href={data.link}
                                        className='inline-block px-4 text-gray-700 hover:text-red-700 dark:hover:text-red-300 duration-200'
                                        >{data.name}</a>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                </div>
                <button
                 className="bg-red-500 hover:scale-105 text-xs hidden sm:block shadow-lg
                 duration-200 text-white py-2 px-4 rounded-full"
                >Get Started</button>
                {/* Hamburger button */}
                <Hamburger />
            </div>
        </div>
         {/* upper class */}
    </div>
  )
}

export default Navbar