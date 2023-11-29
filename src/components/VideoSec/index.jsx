import React, { useEffect, useRef } from "react";
import "./VideoSec.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import videosrc from "../../assets/video1.mp4";

// Register ScrollTrigger with GSAP
gsap.registerPlugin(ScrollTrigger);

export default function VideoSec() {
    const videoSec = useRef();
    const videoRef = useRef();

  useEffect(() => {
    gsap.to(videoRef.current, {
      width:"100%",
      height:"100%",
      scrollTrigger: {
        trigger: videoSec.current,
        start: "top 80%",
        end: "top top",
        scrub: true,
    },
    });
  }, []);

  return (
    <section ref={videoSec} className="VideoSec">
      <video
      ref={videoRef}
        src={videosrc}
        className="videoRef"
        autoPlay ={true}
        muted ={true}
        loop={true}
        controls={false}
      ></video>
    </section>
  );
}
