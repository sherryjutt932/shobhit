import { useEffect } from 'react';
import Lenis from '@studio-freight/lenis'
import Header from './components/Header';
import VideoSec from './components/VideoSec';
import Services from './components/Services';
import Work from './components/Work';
import Logos from './components/Logos';
import Marquee from './components/Marquee';
import Contact from './components/Contact';
import Footer from './components/Footer';


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
  
  })
  

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
