import React, { useState } from 'react';
import { SectionHeader, Project } from "@/components";
import './projects.styl'

const Projects = ({ projects }) => {
  const [current, setCurrent] = useState(0);
  const count = projects.length;
  const prevIndex = (current - 1 + count) % count;
  const nextIndex = (current + 1) % count;

  const handleSelect = (index) => {
    setCurrent(index);
  };

  return (
    <div id='projects' className="P-projects">
      <SectionHeader
        title="Projects"
      />
      <div className="projects-carousel">
        {projects.map((projects, idx) => {
          let position = 'hidden';
          if (idx === current) position = 'active';
          else if (idx === prevIndex) position = 'left';
          else if (idx === nextIndex) position = 'right';
          return (
            <div
              key={idx}
              className={`carousel-item ${position}`}
              onClick={() => handleSelect(idx)}
            >
              <Project {...projects} />
            </div>
          );
        })}
      </div>
      <div className="carousel-controls">
        <button onClick={() => setCurrent(prevIndex)} className="ctrl prev">‹</button>
        <button onClick={() => setCurrent(nextIndex)} className="ctrl next">›</button>
      </div>
    </div>
  )
}

export default Projects;