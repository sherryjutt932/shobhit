import React, { useEffect, useRef, useLayoutEffect } from "react";
import "./Contact.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";
import videography from "../../assets/images/image1.jpg";
// Register ScrollTrigger with GSAP
gsap.registerPlugin(ScrollTrigger);

export default function Contact() {
  const contactSec = useRef();
  
  useEffect(() => {
    gsap.to(contactSec.current, {
      opacity:1,
      scrollTrigger: {
        trigger: contactSec.current,
        start: "top top",
        end: "+=500",
        pin:true,
        scrub: true,
    },
    });
  }, []);

  return (
    <section ref={contactSec} className='ContactSec'>
        <div className="heading">
          <h2 className="bigShoulder">Discuss the solution<br />you need.</h2>
        </div>

        <form className="space" action="">
            <div className="double">
                <input type="text" name="Name" placeholder="Name" />
                <input type="email" name="Email" placeholder="Email" />
            </div>
            <textarea type="text" name="Message" placeholder="Message" rows={2}/>
            <button type="submit" className="label space">Submit</button>
        </form>
    </section>
  )
}
