import React,  { useState, useEffect } from 'react'
import "./colorWheel.css"

export default function ColorWheel() {
  const [array, setArray] = useState([
    { title: "Coral", color: "#FF6F61" },
    { title: "Sky Blue", color: "#87CEEB" },
    { title: "Goldenrod", color: "#DAA520" },
    { title: "MediumPurple", color: "#9370DB" },
    { title: "DarkSeaGreen", color: "#8FBC8F" },
    { title: "SlateBlue", color: "#6A5ACD" },
    { title: "MediumAquaMarine", color: "#66CDAA" },
    { title: "DarkSalmon", color: "#E9967A" },
    { title: "CadetBlue", color: "#5F9EA0" },
    { title: "PaleVioletRed", color: "#DB7093" },
    { title: "LightSkyBlue", color: "#87CEFA" },
    { title: "MediumSpringGreen", color: "#00FA9A" },
    { title: "Lavender", color: "#E6E6FA" },
    { title: "Tomato", color: "#FF6347" },
    { title: "MediumOrchid", color: "#BA55D3" },
    { title: "DarkOliveGreen", color: "#556B2F" },
    { title: "PowderBlue", color: "#B0E0E6" },
    { title: "SlateGray", color: "#708090" },
    { title: "LemonChiffon", color: "#FFFACD" },
    { title: "MediumTurquoise", color: "#48D1CC" },
  ]);

  const array2 = [
    { title: "Red", color: "#FF0000" },
    { title: "Red", color: "#FF3333" },
    { title: "Red", color: "#FF6666" },
    { title: "Green", color: "#00FF00" },
    { title: "Green", color: "#33FF33" },
    { title: "Green", color: "#66FF66" },
    { title: "Blue", color: "#0000FF" },
    { title: "Blue", color: "#3333FF" },
    { title: "Blue", color: "#6666FF" },
    { title: "Orange", color: "#FFA500" },
    { title: "Orange", color: "#FFB533" },
    { title: "Orange", color: "#FFC966" },
    { title: "Purple", color: "#800080" },
    { title: "Purple", color: "#993399" },
    { title: "Purple", color: "#B266B2" },
    { title: "Yellow", color: "#FFFF00" },
    { title: "Yellow", color: "#FFFF33" },
    { title: "Yellow", color: "#FFFF66" },
    { title: "Cyan", color: "#00FFFF" },
    { title: "Cyan", color: "#33FFFF" },
  ];

  const totalColors = array.length;
  const angleIncrement = (2 * Math.PI) / totalColors;
  const radius = 70; // Adjust the radius as needed
  const startAngle = -Math.PI / 2; // Adjust the starting angle

  const desiredLength = 20;

  
  useEffect(() => {
    const newArray = [...array];
    
    while (newArray.length < desiredLength) {
      newArray.push({ disabled:true, title: "", color: "#777" });
    }
    setArray(newArray);
  }, [array, desiredLength]);
  

  return (
    <section className='colorWheelSec'>
      <div className='colorWheelCon'>
      {array.map((item, index) => {
          const angle = startAngle + index * angleIncrement;
          const x = radius * Math.cos(angle);
          const y = radius * Math.sin(angle);

          const width = (2 * Math.PI * radius) / totalColors; // Calculate width dynamically

          return (
            <button
              key={index}
              className={`palette${item.disabled ? ' disabled' : ''}`}
              style={{
                background: item.color,
                width: `${width*1.5}px`,
                height: `${width*1.04}px`,
                position: 'absolute',
                top: `calc(50% - ${width / 2}px + ${y}px)`,
                left: `calc(50% - ${width / 2}px + ${x}px)`,
                transform: `translate(-5px, -0px) rotate(${angle}rad) perspective(${width+6}px) rotateY(-${width}deg)`, // Apply rotation
                pointerEvents: item.disabled ? 'none' : 'auto', // Disable pointer events if item is disabled
              }}
            ></button>
          );
        })}
      </div>
    </section>
  )
}
