import React, { useEffect, useRef, useState } from "react";
import "./Service.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";
import videography from "../../assets/images/image1.jpg";
// Register ScrollTrigger with GSAP
gsap.registerPlugin(ScrollTrigger);

export default function VideoSec() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const servicesSec = useRef();
  const servicesWrap = useRef();
  const servicesHead = useRef();
  const servicesCard = useRef();


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
        }
      )
      .from(
        servicesHead.current,0.1,
        {
          filter: "blur(20px)",
        },
      )
      .fromTo(
        servicesWrap.current,
        {
          x: 0,
          ease: "none",
        },
        {
          x: -((servicesCard.current.offsetWidth*(servicesWrap.current.children.length - 1)) +  windowWidth * 0.3),
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
        <div ref={servicesCard} className="card">
          <h3 className="space">Videography</h3>
          <img src={videography} alt="" />
        </div>
        <div className="card">
          <h3 className="space">Videography</h3>
          <img src={videography} alt="" />
        </div>
        <div className="card">
          <h3 className="space">Videography</h3>
          <img src={videography} alt="" />
        </div>
        <div className="card">
          <h3 className="space">Videography</h3>
          <img src={videography} alt="" />
        </div>
      </div>
    </section>
  );
}
