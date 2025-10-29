import React, { useState } from "react";
import Sidebar from "../common/Sidebar.jsx";
import './About.css'
import { FaPhone } from "react-icons/fa";
// import { FaEnvelope } from "react-icons/fa";
// import { Outlet } from "react-router-dom";
const About = () => {

    
  return (
    <>
    
<section className="about-me">
    <div>
        <h1 className="top">About me</h1>
        <p>I'm Creative Director and UI/UX Designer from Sydney, Australia, working in <br />
             web development and print media. I enjoy turning complex problems into <br />
             simple, beautiful and intuitive designs. My job is to build your website so that it <br />
              is functional and user-friendly but at the same time attractive. Moreover, I add <br />
              personal touch to your product and make sure that is eye-catching and easy to <br />
              use. My aim is to bring across your message and identity in the most creative <br />
               way. I created web design for many famous brand companies.</p>
    </div>
    <h3>What i do</h3>
<section className="component">
<div className="design">
    <h4>Web design</h4>
    <p>The most modern and <br />
         high-quality design made <br />
         at a professional level.</p>
</div>


<div className="design">
  <p><FaPhone /></p>
<h4>Web development</h4>
<p>High-quality development <br />
    of sites at the professional <br />level.</p>
</div>

<div className="design">
<h4>Mobile app</h4>
<p>Professional development <br /> of applications for iOS and <br />Android.</p>
</div>
<div className="design">
<h4>Content writer</h4>
<p>Professional content <br /> writing with appropriate <br />use of words and rules</p>
</div>
</section>
<h3>Testimonial</h3>
<section className="component">
    <div className="component1">
<div>
    <img src="/smart.png" alt="" />
</div>
<div>
<h4>Dammy Smith</h4>
<p>I enjoy working with <br />geek as partner..</p>
</div>
    </div>
        <div className="component1">
<div>
    <img src="/pinky.png" alt="" />
</div>
<div>
<h4>Presh Presh</h4>
<p>I enjoy working with <br />geek as partner..</p>
</div>
    </div>
</section>
<div className="range-container">
  <div className="range-bar1">
    <div className="range-fill1"></div>
  </div>
  </div>
<section>
  <div className="range-container">
  <h1 className="range-title">Clients</h1>
  <div className="range-bar">
    <div className="range-fill"></div>
  </div>
</div>


</section>

</section>








    

    </>
  )
}

export default About