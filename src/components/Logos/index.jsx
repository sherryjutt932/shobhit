import React, { useEffect, useRef, useState } from "react";
import "./Logos.css";
import { gsap } from "gsap";
import carrera from "../../assets/logos/carrera.png";
import skimmer from "../../assets/logos/skimmer.png";
import suzuki from "../../assets/logos/suzuki.png";
import dargel from "../../assets/logos/dargel.png";
import landau from "../../assets/logos/landau.png";
const LogosArray = [
  suzuki,
  carrera,
  landau,
  skimmer,
  dargel,
];

export default function Logos() {
    const SecRef = useRef();

  return (
    <section ref={SecRef} className="LogosSec">
    <div className="heading">
      <h2 className="bigShoulder">We craft for the biggest brand’s <br />in the world of motorsports.</h2>
    </div>

    <div className="LogosRow">
    {LogosArray.map((src, index) => (
               <div>
                <img 
               key={index} 
               alt="" 
               src={src}
               ></img>
               </div>
            ))}
    </div>

    </section>
  )
}
