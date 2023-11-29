import { useEffect } from 'react';
import Lenis from '@studio-freight/lenis'
import Header from './components/Header';
import VideoSec from './components/VideoSec';
import Services from './components/Services';


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

    // const lenis = new Lenis()

    // function raf(time) {
    //   lenis.raf(time)
    //   requestAnimationFrame(raf)
    // }

    // requestAnimationFrame(raf)
  
  })
  

  return (
    <div>
      <Header/>
      <VideoSec/>
      <Services/>
      <div style={{minHeight:"100vh"}}></div>
    </div>
  );
}

export default App;
