import React, { useEffect, useRef } from "react";
import ArrayData from "./Data";
import "./Marquee.css"
import { gsap } from "gsap";

export default function Marquee({ direction, speed, ...props }) {
  const marquee = useRef();
  const first = useRef();
  const second = useRef();
  let xPercent = 0;

  const rightAnimation = () => {
    if (xPercent > 0) {
      xPercent = -100;
    }
    gsap.to([first.current, second.current], { xPercent: xPercent, duration: 0 });
    requestAnimationFrame(rightAnimation);
    xPercent += speed / 10;
  };

  const leftAnimation = () => {
    if (xPercent < -100) {
      xPercent = 0;
    }
    gsap.to([first.current, second.current], { xPercent: xPercent, duration: 0 });
    requestAnimationFrame(leftAnimation);
    xPercent -= speed / 10;
  };

  useEffect(() => {
    if (direction === "left") {
      requestAnimationFrame(leftAnimation);
    } else {
      requestAnimationFrame(rightAnimation);
    }
  }, [direction]);

  useEffect(() => {
    const handleResize = () => {
      // On resize, reposition the second div based on the first div's width
      gsap.set(second.current, { left: first.current.offsetWidth });
    };

    // Attach the event listener for resize
    window.addEventListener("resize", handleResize);

    // Initial setup
    gsap.set(second.current, { left: first.current.offsetWidth });

    // Cleanup on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section className="marqueeSec bigShoulder">
      <div ref={marquee} className="marqueeCon">
        <div
          className="marqueeDiv"
          ref={first}
        >
          {
            ArrayData.map((item, index) => (
              <div key={index}>
                {item}<span>|</span>
              </div>
            ))
          }
        </div>
        <div
          ref={second}
          className="marqueeDiv2"
        >
          {ArrayData.map((item, index) => (
            <div key={index}>
              {item}<span>|</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
