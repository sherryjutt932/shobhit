import React, { useEffect, useRef, useState } from "react";
import "./Service.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";
import data from "./Data";
// Register ScrollTrigger with GSAP
gsap.registerPlugin(ScrollTrigger);

export default function VideoSec() {
  const servicesSec = useRef();
  const servicesWrap = useRef();
  const servicesHead = useRef();

  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  const handleResize = () => {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  };

  useEffect(() => {
    // Set initial window size
    handleResize();

    // Add event listener for window resize
    window.addEventListener('resize', handleResize);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // useEffect(() => {
  //   var myText = new SplitType(servicesHead.current, {
  //     types: "lines, words, chars",
  //   });

  //   gsap.from(myText.chars, {
  //     opacity: 0,
  //     ease: "power2.out",
  //     scrollTrigger: {
  //       trigger: servicesWrap.current,
  //       start: "top 10%",
  //       end: "+=200",
  //       scrub: true,
  //     },
  //   });
  // }, []);

  useEffect(() => {
    var myText = new SplitType(servicesHead.current, {
      types: "lines, words, chars",
    });

      gsap.to(servicesSec.current, {
        backgroundColor: "#000",
      ease: "none",
      scrollTrigger: {
        trigger: servicesSec.current,
        start: "top 90%",
        end: "top top",
        scrub: true,
      },
    });

    const serviceTL = gsap.timeline();
    serviceTL
      .to(
        servicesHead.current,0.1,
        {
          color: "#fff",
        },
        "a"
      )
      .from(
        myText.chars,
        {
          duration:0.2,
          opacity: 0,
          ease: "power2.out",
        },
        "a"
      )
      .from(
        servicesHead.current,0.1,
        {
          filter: "blur(20px)",
        },
        "a"
      )
      .fromTo(
        servicesWrap.current,
        {
          x: 0,
          ease: "none",
        },
        {
          x: (windowSize>750)? (-((servicesWrap.current.children[1].offsetWidth*(servicesWrap.current.children.length - 1)) +  windowSize.width * 0.3)) : (-((servicesWrap.current.children[1].offsetWidth*(servicesWrap.current.children.length - 1)) - 100)),
          ease: "none",
        }
      );

    ScrollTrigger.create({
      trigger: servicesSec.current,
      start: "top top",
      pin: true,
      scrub: true,
      end: () => `+=${servicesWrap.current.offsetWidth}`,
      animation: serviceTL,
    });
  }, []);

  return (
    <section ref={servicesSec} className="ServicesSec">
      <div ref={servicesWrap} className="Serviceswrapper">
        <div className="head">
          <h2 ref={servicesHead} className="bigShoulder">
            {" "}
            Our
            <br />
            Services{" "}
          </h2>
        </div>
        {
          data.map((item, i)=>{
            return(
              <div key={i} className="card">
                <h3 className="space">{item.title}</h3>
                <img src={item.image} alt="" />
                <p>{item.detail}</p>
              </div>
            )
          })
        }
        
      </div>
    </section>
  );
}
