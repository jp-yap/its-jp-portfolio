'use client'
import React, { useState } from 'react'
import { Project } from '../components/project_props';
import { ProjectsOverview } from '../subsections/projects_overview';
import ProjectDetails from './project_details';
import Subsection from '@/app/components/subsection';
import projects from '@/data/projects.json';

const project_list: Project[] = projects.featured;

const ProjectSubsection = () => {

  const [currentProject, setCurrentProject] = useState<Project | null>(null);
  return (
    <Subsection header="FEATURED">
      <div className={`min-h-300 md:min-h-200 ${!currentProject && `flex justify-center`}`}>
        {
          currentProject ? <ProjectDetails project={currentProject} onExit={() => setCurrentProject(null)} /> : <ProjectsOverview project_list={project_list} onClick={setCurrentProject} />
        }
      </div>
    </Subsection>
  )
}

export default ProjectSubsection
