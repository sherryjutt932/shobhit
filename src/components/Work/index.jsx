import React, { useEffect, useRef, useState } from "react";
import { useDraggable } from "react-use-draggable-scroll";
import "./Work.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import headerImg1 from "../../assets/images/image1.jpg";
import headerImg2 from "../../assets/images/image2.jpg";
import headerImg3 from "../../assets/images/image3.jpg";
import headerImg4 from "../../assets/images/image4.jpg";
import headerImg5 from "../../assets/images/image5.jpg";
const ImagesArray = [
  headerImg1,
  headerImg2,
  headerImg3,
  headerImg4,
  headerImg5,

];
const ImagesArrayR = [
  headerImg1,
  headerImg2,
  headerImg3,
  headerImg4,
  headerImg5,
];

// Register ScrollTrigger with GSAP
gsap.registerPlugin(ScrollTrigger);

const ImagePopup = ({ imageUrl, onClose }) => {
  return (
    <div id="imagePopup">
      <span className="close-button" onClick={onClose}>&times;</span>
      <img src={imageUrl} alt="Popup Image" />
    </div>
  );
};

export default function Work() {
  const imageRowRef = useRef();
  const imageRowRef2 = useRef();
  const imageRowRefR = useRef();
  const SecRef = useRef();
  const [popupImageUrl, setPopupImageUrl] = useState(null);

  const { events } = useDraggable(imageRowRef); 
  const { events:eventsR } = useDraggable(imageRowRefR); 
  const { events:events2 } = useDraggable(imageRowRef2); 

  const openPopup = (imageSrc) => {
    setPopupImageUrl(imageSrc);
  };

  const closePopup = () => {
    setPopupImageUrl(null);
  };


  useEffect(() => {

    const workTL = gsap.timeline();
    workTL.fromTo(
      [imageRowRef.current, imageRowRef2.current],
        {
          xPercent: -15,
          ease: "none",
        },
        {
          xPercent: 0,
          ease: "none",
        },"a"
      ).fromTo(
        imageRowRefR.current,
          {
            xPercent: 0,
            ease: "none",
          },
          {
            xPercent: -30,
            ease: "none",
          },"a"
        );

    ScrollTrigger.create({
      trigger: SecRef.current,
      start: "top 90%",
      end: "bottom top",
      scrub: true,
      animation: workTL,
    });
}, [])

  return (
    <section ref={SecRef} className="WorkSec">
    <div className="heading">
      <h2 className="bigShoulder">Featured Work</h2>
      <button className="label space">View all</button>
    </div>

    <div className="imageRow customScroller" 
    {...events}
    ref={imageRowRef}>
    {ImagesArray.map((src, index) => (
               <img 
               onClick={() => openPopup(src)}
               key={index} 
               alt="" 
               src={src}
               ></img>
            ))}
    </div>
    <div className="imageRow customScroller" 
    style={{width:"135vw"}}
    {...eventsR}
    ref={imageRowRefR}>
    {ImagesArrayR.map((src, index) => (
               <img 
               onClick={() => openPopup(src)}
               key={index} 
               alt="" 
               src={src}
               ></img>
            ))}
    </div>
    <div className="imageRow customScroller" 
    {...events2}
    ref={imageRowRef2}>
    {ImagesArray.map((src, index) => (
               <img 
               onClick={() => openPopup(src)}
               key={index} 
               alt="" 
               src={src}
               ></img>
            ))}
    </div>

    {popupImageUrl && <ImagePopup imageUrl={popupImageUrl} onClose={closePopup} />}
    </section>
  )
}
