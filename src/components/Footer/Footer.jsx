import React from 'react'
import Img from '../../assets/image/logo.svg';
import Img1 from '../../assets/image/icon-f.svg';
import Img2 from '../../assets/image/icon-in.svg';
import Img3 from '../../assets/image/icon-p.svg';
import Img4 from '../../assets/image/icon-t.svg';
import Img5 from '../../assets/image/icon-y.svg';






const FooterLink = [
    {
      tittle: "Home",
      link: "/#",
    },
    {
      tittle: "Pricing",
      link: "/#pricing",
    },
    {
      tittle: "Products",
      link: "/#products",
    },
    {
      tittle: "About Us",
      link: "/#about Us",
    },
    
  ]





const Footer = () => {
  return (
    <div
     className='text-white  bg-black'>
        <div className='container'>
           <div className='flex lg:items-start justify-between p-10 lg:flex-row flex-col-reverse items-center lg:gap-0 gap-10'>
           <div className=''>
                {/* logo detail */}
                <div className='flex items-center lg:flex-col  flex-col-reverse gap-5 lg:gap-20'>
                   <div>
                   <img src={Img} alt=""
                    />
                   </div>
                   <h1 className='flex items-center lg:gap-3 gap-10'>
                   
                    <img src={Img1} alt="" />

                    <img src={Img2} alt="" />

                    <img src={Img3} alt="" />

                    <img src={Img4} alt="" />

                    <img src={Img5} alt="" />
                   </h1>
                </div>
                 {/* Navbar detail */}
            </div>
            

           <div className='flex gap-9'>
           <div>
            <ul className='flex flex-col gap-3 items-center '>
                  {
                    FooterLink.map((link) => (
                      <li className='cursor-pointer hover:text-primary
                      hover:translate-x-1 duration-300 text-gray-300 ' key={link.tittle}>

                        <span>{link.tittle}</span>
                      </li>
                      
                      
                    ))
                  }
                  </ul>
            </div>

            <div>
            <ul className='flex flex-col gap-3 items-center '>
                <li className='cursor-pointer hover:text-primary
                      hover:translate-x-1 duration-300 text-gray-300'>Careers</li>
                <li className='cursor-pointer hover:text-primary
                      hover:translate-x-1 duration-300 text-gray-300'>Community</li>
                <li className='cursor-pointer hover:text-primary
                      hover:translate-x-1 duration-300 text-gray-300'>Privacy Policy</li>
            </ul>
            </div>
           </div>


           <div className="flex items-center gap-5">
                        <input type="text" placeholder="Updates in your inbox"
                         className="w-72 h-10 p-2 rounded-3xl text-black text-xs font-semibold"
                         />

                         <div>
                            <button
                            className="bg-red-600 hover:scale-125 text-xs shadow-lg text-white
                            duration-200 py-2 px-4 rounded-full font-bold overflow-hidden"
                            >Go</button>
                         </div>
                    </div>
           </div>
           <div>
            <p className='text-center lg:text-end'>
            Copyright 2020. All Rights Reserved
            </p>
           </div>
        </div>
    </div>
  )
}

export default Footer