import { SectionHeader, Project } from "../../components";
import './projects.styl'
import { factvax } from "../../assets";

const Projects = () => {
  return (
    <div className="P-projects">
      <SectionHeader
        title="Projects"
      />
      <Project
        title='FactVax - Vaccine Misinformation Detector'
        description='FactVax is a scalable, AI-driven misinformation detection platform: a browser extension using GPT-4 and DeBERT-v3 offers real-time credibility assessments, while the React dashboard provides voice-activated queries and interactive trend visualizations.'
        githubUrl='https://github.com/AllenWangyc/factvax'
        demoUrl=''
        image={factvax}
        glowColor='rgb(85,189,244)'
      // glowColor=''
      />
    </div>
  )
}

export default Projects;