'use client'
import React from 'react'
import ProjectChoice from '../components/project_choice_card';
import { Project } from '../components/project_props';

export const ProjectsOverview = ({ project_list, onClick }: { project_list: Project[], onClick: (project: Project) => void }) => {
  return (
    <div className="p-10 grid grid-cols-1 place-items-center md:grid-cols-2 gap-5 w-full items-stretch">
      {project_list.map((project) => (
        <ProjectChoice
          key={project.name}
          project={project}
          onClick={(project) => onClick(project)}
        />
      ))}
    </div>
  )
}

export default ProjectsOverview
