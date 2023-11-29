import React, { useEffect, useRef, useLayoutEffect } from "react";
import "./Service.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";

// Register ScrollTrigger with GSAP
gsap.registerPlugin(ScrollTrigger);

export default function VideoSec() {
    const servicesSec = useRef();
    const servicesWrap = useRef();
    const servicesHead = useRef();

    // useEffect(() => {
	// 	gsap.to(servicesWrap.current.children, {
    //         xPercent: -100 * (servicesWrap.current.children.length-1),
    //         ease: "none",
    //         scrollTrigger: {
    //             trigger: servicesWrap.current,
    //             start:"top top",
    //             pin: true,
    //             scrub: 1,
    //             snap: 1 / (servicesWrap.current.children.length-1),
    //             end: () => `+=${servicesWrap.current.offsetWidth}`
    //         }
    //     });

	// }, []);

    useEffect(() => {

        var myText = new SplitType(servicesHead.current, {
            types: "lines, words, chars",
          });

		gsap.from(myText.chars, {
            opacity:0,
            // rotateX:90,
            // stagger: 0.05,
            ease: "power2.out",
            scrollTrigger: {
                trigger: servicesWrap.current,
                start:"top 10%",
                end:"top top",
                scrub: true,
            }
        });

	}, []);

  useEffect(() => {

    const serviceTL = gsap.timeline();
    serviceTL.to(
        servicesSec.current,
        {
            backgroundColor:"#000"
        },
      ).fromTo(
        servicesWrap.current.children,
        {
            xPercent: (75),
            ease: "none",
        },
        {
            xPercent: (-75 * (servicesWrap.current.children.length-1)),
            ease: "none",
        },
      );
      
      ScrollTrigger.create({
        trigger: servicesSec.current,
                start:"top top",
                pin: true,
                scrub: true,
                snap: 1 / (servicesWrap.current.children.length-1),
                end: () => `+=${servicesWrap.current.offsetWidth}`,
        animation: serviceTL,
      });

  }, []);

  return (
    <section ref={servicesSec} className="ServicesSec">
      <div ref={servicesWrap} className="Serviceswrapper">
        <div className="">
            <h2 ref={servicesHead}> ANV </h2>
        </div>
        <div className="center">SFS</div>
        <div className="center">ASCA</div>
      </div>
    </section>
  );
}
