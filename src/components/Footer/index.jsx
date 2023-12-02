import React, { useEffect, useRef } from "react";
import "./Footer.css"
import { gsap } from "gsap";
import Logo from "../../assets/FLYMEDIA.png";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";


export default function Footer() {
  return (
    <footer className="space">
        <div className="content">
        <div className="left">
            <div>
            <img  className="logo" src={Logo} alt="" />
            <p>info@flymediaco.com</p>
            <p>Tel: (470)-365-1514</p>
            <div className="socials">
                <a href="/"><FaSquareFacebook/></a>
                <a href="/"><FaLinkedinIn /></a>
                <a href="/"><FaInstagram /></a>
            </div>
            </div>

        </div>
        <div className="right">
            <ul>
                <li><a href="/Home">Home</a></li>
                <li><a href="/Home">Videography</a></li>
                <li><a href="/Home">photography</a></li>
                <li><a href="/Home">web design</a></li>
                <li><a href="/Home">contact</a></li>
            </ul>
        </div>
        </div>
        <p className="copyright">© 2023 FLY MEDIA | Privacy</p>

    </footer>
  )
}
