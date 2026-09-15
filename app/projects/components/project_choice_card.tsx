'use client'
import React from 'react'
import Image from 'next/image';
import { Project } from './project_props';
import { Constants } from '@/app/constants';
import MinecraftButton from '@/app/components/minecraft_button';
import styles from '../projects.module.css';


const ProjectChoice = ({ project, onClick }: { project: Project, onClick: (project: Project) => void }) => {

  return (
    <MinecraftButton onClick={() => onClick(project)} parentClassName="w-full h-full max-w-80 max-h-80" className="w-full h-full max-w-80 h-w-80">
      <div className="p-5 flex flex-col justify-center gap-5 items-center">
        <Image src={`${Constants.LOGOS_PATH}${project.logo}`} alt={project.name} width={64} height={64} />
        <div className={styles.choiceTitle}>{project.name}</div>
        <div className={styles.choiceInfo}>{project.info}</div>
      </div>
    </MinecraftButton>
  )
}

export default ProjectChoice
