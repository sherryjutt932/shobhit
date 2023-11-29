import React, { useEffect, useRef, useLayoutEffect } from "react";
import "./Header.css";
import { gsap } from "gsap";
import headerImg from "../../assets/images/image1.jpg";
import SplitType from "split-type";

export default function Header() {
  const imgCon = useRef();
  const imgRef = useRef();
  const bgslider = useRef();
  const textRef = useRef();
  const controlsRef = useRef();
  const navRef = useRef();
  const headerText = useRef();


  useEffect(() => {
    var myText = new SplitType(textRef.current, {
      types: "lines, words, chars",
    });

    gsap.set(imgRef.current, {
        scale: 1.1,
      });
      gsap.set(myText.chars, {
        yPercent: 100,
      });
      gsap.set(controlsRef.current.children, {
        yPercent: 100,
      });
      gsap.set(navRef.current.children, {
        yPercent: -200,
      });
      gsap.set(headerText.current, {
        opacity:1,
      });

    gsap
      .timeline()
      .fromTo(
        imgCon.current,
        1,
        {
          height: 0,
        },
        {
          height: "calc(100vh - 200px)",
          ease: "power2.inOut",
        }
      )
      .fromTo(
        imgCon.current,
        1.2,
        {
          width: "100%",
        },
        {
          width: "calc(100% - 320px)",
          ease: "power2.inOut",
        },
        "a"
      )
      .to(
        imgRef.current,
        1.2,
        {
          scale: 1,
          ease: "power2.inOut",
        },
        "a"
      )
      .fromTo(
        bgslider.current,
        1.2,
        {
          xPercent: -100,
        },
        {
          xPercent: 0,
          ease: "power2.inOut",
        },
        "a"
      )
      .fromTo(
        myText.chars,
        {
          yPercent: 100,
        },
        {
            yPercent: 0,
            delay:0.5,
            stagger: 0.02,
            ease: "power2.out",
          },
        "a"
      )
      .fromTo(
        controlsRef.current.children,
        {
          yPercent: 100,
        },
        {
          yPercent: 0,
          delay:0.5,
          stagger: 0.3,
          ease: "power2.out",
        },
        "a"
      )
      .fromTo(
        navRef.current.children,
        {
          yPercent: -200,
        },
        {
          yPercent: 0,
          delay:0.6,
          ease: "power2.out",
        },
        "a"
      );
  });

  return (
    <header>
      <nav ref={navRef}>
        <div className="logo">FLY MEDIA</div>
        <ul className="space">
          <li>About</li>
          <li>Work</li>
          <li>Contact</li>
        </ul>
      </nav>
      <div ref={bgslider} className="bgslider"></div>
      <div ref={imgCon} className="animimg">
        <img ref={imgRef} src={headerImg} alt="" />
        <div ref={headerText} className="headertext">
          <h2>
            <div ref={textRef} className="bigShoulder">
              GET YOUR BRANCH A VISION
            </div>
          </h2>
          <div ref={controlsRef} className="controls">
            <button className="label space">Get in touch</button>
            <div className="dots">
              <button data-index="1"  className="active"></button>
              <button data-index="2" ></button>
              <button data-index="3" ></button>
              <button data-index="4" ></button>
              <button data-index="5" ></button>
            </div>
            <span>
              <button className="arrows">
                <svg
                  width="22"
                  height="15"
                  viewBox="0 0 22 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M6.89587 14.5714L0.531906 8.2074C0.141382 7.81688 0.141382 7.18371 0.531906 6.79319L6.89587 0.429229C7.28639 0.0387044 7.91956 0.0387044 8.31008 0.429229C8.70061 0.819753 8.70061 1.45292 8.31008 1.84344L3.65323 6.5003L21.239 6.5003V8.5003L3.65323 8.5003L8.31008 13.1572C8.70061 13.5477 8.70061 14.1808 8.31008 14.5714C7.91956 14.9619 7.28639 14.9619 6.89587 14.5714Z"
                    fill="white"
                  />
                </svg>
              </button>
              <button className="arrows">
                <svg
                  width="22"
                  height="15"
                  viewBox="0 0 22 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M14.5822 0.428638L20.9461 6.7926C21.3366 7.18312 21.3366 7.81629 20.9461 8.20681L14.5822 14.5708C14.1916 14.9613 13.5585 14.9613 13.1679 14.5708C12.7774 14.1802 12.7774 13.5471 13.1679 13.1566L17.8248 8.49971L0.239012 8.4997L0.239013 6.4997L17.8248 6.49971L13.1679 1.84285C12.7774 1.45233 12.7774 0.819162 13.1679 0.428638C13.5585 0.0381134 14.1916 0.0381135 14.5822 0.428638Z"
                    fill="white"
                  />
                </svg>
              </button>
            </span>
          </div>
        </div>
      </div>
    </header>
  );
}
