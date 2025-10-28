import React from 'react'
import './Resume.css'
import { IoBookOutline } from "react-icons/io5";


const Resume = () => {
  return (
<>
<section className="resume">
  <h2 className="section-tit">Resume</h2>
    <h3 className="timeline-tie">Education</h3>
  <div className="timeline">

    <div className="timeline-item">
      <div className="timeline-content">
        <h4>Osun State University</h4>
        <p>Computer Science</p>
        <span>2022 – Present</span>
      </div>
    </div>

    <div className="timeline-item">
      <div className="timeline-content">
        <h4>OICHUB Coding School</h4>
        <p>Front-end Development Student</p>
        <span>2025 – Present</span>
      </div>
    </div>
  </div>
<div>
    <h3> <IoBookOutline className='icon' /> Experience</h3>

</div>
  <div className="timeline">

    <div className="timeline-item">
      <div className="timeline-content">
        <h4>UI/UX Designer</h4>
        <p>A Volunteer Job</p>
        <span>2024 – Present</span>
      </div>
    </div>

    <div className="timeline-item">
      <div className="timeline-content">
        <h4>OICHUB Coding School</h4>
        <p>Front-end Development Student</p>
        <span>2025 – Present</span>
      </div>
    </div>
  </div>
<section className="skills">
  <h2 className="section-title">My Skills</h2>

  <div className="skill">
    <div className="skill-info">
      <span>Web Design 50%</span>
    </div>
    <div className="progress-bar">
      <div className="progress1"></div>
    </div>
  </div>

  <div className="skill">
    <div className="skill-info">
      <span>Web Development 20%</span>
    </div>
    <div className="progress-bar">
      <div className="progress2" ></div>
    </div>
  </div>

  <div className="skill">
    <div className="skill-info">
      <span>UI/UX Design 20%</span>
    </div>
    <div className="progress-bar">
      <div className="progress3"></div>
    </div>
  </div>
</section>

</section>


</>
    )
}

export default Resume