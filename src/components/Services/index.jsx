import React, { useEffect, useRef, useLayoutEffect } from "react";
import "./Service.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";
import videography from "../../assets/images/image1.jpg";
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
      opacity: 0,
      // rotateX:90,
      // stagger: 0.05,
      ease: "power2.out",
      scrollTrigger: {
        trigger: servicesWrap.current,
        start: "top 10%",
        end: "+=200",
        scrub: true,
      },
    });
  }, []);

  useEffect(() => {
    const serviceTL = gsap.timeline();
    serviceTL
      .to(
        servicesSec.current,
        {
          backgroundColor: "#000",
        },
        "a"
      )
      .to(
        servicesHead.current,
        {
          color: "#fff",
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
          x: "-75%",
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
        <div className="card">
          <h3 className="space">Videography</h3>
          <img src={videography} alt="" />
        </div>
      </div>
    </section>
  );
}
