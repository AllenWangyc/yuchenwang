import React from 'react';
import { SectionHeader } from '../../components';
import './skill.styl';
import {
  csIcon, cssIcon, htmlIcon, jsIcon, nodejsIcon, awsIcon,
  reactIcon, postgreIcon, typescriptIcon, dockerIcon, mongodbIcon, pythonIcon,
  githubIcon2
} from '../../assets';

const skills = [
  { name: 'HTML5', Icon: htmlIcon },
  { name: 'CSS3', Icon: cssIcon },
  { name: 'JavaScript', Icon: jsIcon },
  { name: 'TypeScript', Icon: typescriptIcon },
  { name: 'React', Icon: reactIcon },
  { name: 'Node.js', Icon: nodejsIcon },
  { name: 'C#', Icon: csIcon },
  { name: 'Python', Icon: pythonIcon },
  { name: 'PostgreSQL', Icon: postgreIcon },
  { name: 'MongoDB', Icon: mongodbIcon },
  { name: 'AWS', Icon: awsIcon },
  { name: 'Docker', Icon: dockerIcon },
  { name: 'GitHub', Icon: githubIcon2 },
]

const Skill = () => {
  return (
    <div id='skill' className='P-skill'>
      <SectionHeader title='Skill' />
      <div className="skills-grid">
        {skills.map(({ name, Icon }, idx) => (
          <div className="skill-item" key={idx}>
            <img src={Icon} alt={name} className="skill-icon" />
            <span className="skill-tooltip">{name}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Skill;