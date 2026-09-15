import React from 'react'
import ProjectSubsection from './subsections/project_subsection';
import Section from '../components/section';
import { Constants } from '../constants';

const Projects = () => {
  return (
    <Section header="Projects" background="projects_bg.webp" id={Constants.PROJECTS} credit="TheOldRelic" href="https://www.facebook.com/groups/3696398070485713/posts/23897549043277318/">
        <ProjectSubsection />
    </Section>
  )
}

export default Projects
