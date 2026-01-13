import React from 'react'
import './About.css'

import about_img from '../../assets/about.png'
import play_icon from '../../assets/play-icon.png'
const About = ({setPlayState}) => {
  return (
    <div className='about'>
      <div className="about-left">
<img src={about_img} alt='' className='about-img'/>
<img src={play_icon} alt='' className='play-img' onClick={()=>{setPlayState(true)}}/>
      </div>
      <div className="about-right">
<h3>ABOUT UNIVERSITY</h3>
<h2>Nurturing Tomorrow's Leaders Today</h2>
<p>University education systems are designed to provide advanced knowledge, critical thinking skills, and professional preparation across a wide range of disciplines. Most universities offer structured degree programs such as bachelor’s, master’s, and doctoral levels, combining theoretical learning with practical applications. Students attend lectures, seminars, and laboratory sessions, while also completing assignments, projects, and examinations. This system encourages independent learning, research skills, and intellectual curiosity, helping students develop a deeper understanding of their chosen fields.</p>
    <p>In addition to academics, universities play an important role in personal and social development. Many institutions offer extracurricular activities, research opportunities, internships, and student organizations that enhance leadership, teamwork, and communication skills. Modern university education systems also emphasize innovation, technology, and global perspectives, preparing graduates to adapt to changing job markets and societal needs. Through this balanced approach, universities aim to produce knowledgeable, responsible, and skilled individuals who can contribute positively to society.</p>  
      </div>
    </div>
  )
}

export default About
