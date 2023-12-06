import { useEffect, useState } from 'react';
import Lenis from '@studio-freight/lenis'
import Header from './components/Header';
import VideoSec from './components/VideoSec';
import Services from './components/Services';
import Work from './components/Work';
import Logos from './components/Logos';
import Marquee from './components/Marquee';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ColorWheel from './components/colorWheel';


// Register ScrollTrigger with GSAP
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

function App() {
  useEffect(() => {
    const lenis = new Lenis()

    lenis.on('scroll', ScrollTrigger.update)

    gsap.ticker.add((time)=>{
      lenis.raf(time * 600)
    })

    gsap.ticker.lagSmoothing(0)
  
  });

  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });
  
  useEffect(() => {
    const handleResize = () => {
      // Check if the width has changed
      const newWidth = window.innerWidth;
      if (newWidth !== windowSize.width) {
        // Reload the page if the width has changed
        setWindowSize({
          width: newWidth,
          height: window.innerHeight,
        });
  
        window.location.reload();
      } else {
        // Update the state without reloading if only the height has changed
        setWindowSize({
          width: newWidth,
          height: window.innerHeight,
        });
      }
    };
  
    // Add event listener for window resize
    window.addEventListener('resize', handleResize);
  
    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [windowSize.width]); // Dependency array now includes windowSize.width
  
  

  return (
    <div>
      <Header/>
      <VideoSec/>
      <Services/>
      <Work/>
      <Logos/>
      <Marquee direction={"left"} speed={.5}/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
