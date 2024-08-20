import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero/Hero'
import Track from './components/Track/Track'
import Testimoinal from './components/Testimoinal/Testimoinal'
import AOS from 'aos';
import "aos/dist/aos.css";
import Background from './components/Background/Background'
import Footer from './components/Footer/Footer'

const App = () => {

  React.useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  } , []);

  return (
    <div className='bg-white'>
      <Navbar/>
      <Hero/>
      <Track/>
      <Testimoinal/>
      <Background/>
      <Footer/>
    </div>
  )
}

export default App