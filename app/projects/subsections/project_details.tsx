'use client'
import React, { useState } from 'react'
import { ProjectDetailsCard, ProjectNavigationCard } from '../components/project_details_card';
import { Project, ProjectTabDetail } from '../components/project_props';
import { Constants } from '@/app/constants';

const ProjectDetails = ({ project, onExit }: { project: Project, onExit: () => void }) => {

  const desc: ProjectTabDetail = { tab: "Description", path: Constants.DESC_PATH, projectDetail: project.description };
  const [currentProjectTabDetail, setProjectTabDetail] = useState(desc);
  const [page, setPage] = useState(0);

  const selectTab = (tab: ProjectTabDetail) => {
    setPage(0);
    setProjectTabDetail(tab);
  };

  return (
    <div className="p-5 flex flex-wrap justify-between gap-y-5">
      <ProjectNavigationCard project={project} onExit={onExit} onChangeTab={selectTab} />
      <ProjectDetailsCard projectTabDetail={currentProjectTabDetail} page={page} setPage={setPage} />
    </div>
  )
}

export default ProjectDetails
