import React from 'react';
import SectionHeader from "../../components/SectionHeader";
import './about.styl'
import { avatar } from '../../assets'

const About = () => {
  return (
    <div className="P-about">
      <SectionHeader
        title="About"
      />
      <div className="about-content">
        <div className="about-image-wrapper">
          <img src={avatar} alt="Yuchen Wang" className="about-image" />
        </div>

        <div className="about-text">
          <p>
            Hello! I'm {' '}
            <span className="doodle">Yuchen Wang</span>
            , a Master of Information Technology graduate from the University of Auckland who builds interactive experiences and web applications, leveraging both front-end and back-end technologies.
          </p>
          <p>
            With a strong focus on clean code, collaboration, and continuous learning, I strive to create innovative solutions that enhance user experiences.
          </p>
        </div>
      </div>
    </div>
  )
}

export default About;