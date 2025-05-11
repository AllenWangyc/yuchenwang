import React from 'react';
import './Project.styl';
import { githubIcon } from '@/assets';

/**
 * Project Card component
 * @param {string} title     Project title
 * @param {string} description Project description text
 * @param {string} githubUrl GitHub repo url
 * @param {string} demoUrl   Demo page url
 * @param {string} image     Demo image
 * @param {string} glowColor Card glow colour
 */
const Project = ({
  title,
  description,
  githubUrl,
  demoUrl,
  image,
  glowColor = '#1DA57A',
}) => {
  return (
    <div className="project-container">
      {/* Demo card */}
      <div
        className="project-demo"
        style={{ boxShadow: `0 0 1rem ${glowColor}` }}
      >
        <img src={image} alt={`${title} demo`} />
      </div>
      {/* Base info card */}
      <div className="project-base">
        <h3 className="project-title">{title}</h3>
        <p className="project-desc">{description}</p>
        <div className="project-links">
          <a href={githubUrl} target="_blank" rel="noreferrer">
            <img src={githubIcon} alt="GitHub" className="github-logo" /> GitHub
          </a>
          {demoUrl && (
            <a href={demoUrl} target="_blank" rel="noreferrer">
              Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
export default Project;