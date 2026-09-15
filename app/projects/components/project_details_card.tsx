'use client'
import React, { useState } from 'react'
import { Project, ProjectDetail, ProjectTabDetail } from './project_props';
import styles from '../projects.module.css';
import Image from 'next/image';
import { Constants } from '@/app/constants';
import StackCard from '@/app/components/stack_card';
import Divider from '@/app/components/divider';
import MinecraftButton from '@/app/components/minecraft_button';
import ImagePopup from '@/app/components/image_popup';
import Pagination from '@/app/components/pagination';
import TextColor from '@/app/components/text_color';

const ButtonDetail = ({ projectTabDetail, onChangeTab, selected }: { projectTabDetail: ProjectTabDetail, onChangeTab: (projectTabDetail: ProjectTabDetail) => void, selected: string }) => {
    return (
        <button className={`${styles.button} ${styles.optionText} w-full ${selected == projectTabDetail.tab && styles.buttonSelected}`} onClick={() => onChangeTab(projectTabDetail)}>{projectTabDetail.tab}</button>
    )
}

export const ProjectNavigationCard = ({ project, onExit, onChangeTab }: { project: Project, onExit: () => void, onChangeTab: (projectTabDetail: ProjectTabDetail) => void }) => {

    const [selected, setSelected] = useState("Description");

    const selectTab = (projectTabDetail: ProjectTabDetail) => {
        onChangeTab(projectTabDetail);
        setSelected(projectTabDetail.tab);
        new Audio("/click.mp3").play().catch(() => { });
    };

    return (
        <StackCard>

            <div className="grid items-start w-full lg:w-100 grid-cols-[auto_1fr]">
                <div className="self-center mx-1">
                    <MinecraftButton className={`col-span-1 self-center max-w-10 max-h-10 ${styles.choiceInfo}`} onClick={onExit}>
                        {"<"}
                    </MinecraftButton>
                </div>
                <div className={`${styles.choiceTitle} p-3 self-center`}>{project.name}</div>
                <div className="col-span-2"><Divider /></div>
                <div className="col-start-2 pt-5 flex flex-col w-full max-h-150 overflow-y-auto">
                    <ButtonDetail projectTabDetail={{ tab: "Description", path: Constants.DESC_PATH, projectDetail: project.description }} onChangeTab={selectTab} selected={selected} />
                    <div className={styles.optionText}>
                        {`Features (${project.features.length}):`}
                    </div>
                    <div className="pl-5 flex flex-col">
                        {project.features.map(feature => <ButtonDetail key={feature.label} projectTabDetail={{ tab: feature.label, path: Constants.FEATURE_PATH, projectDetail: feature.detail }} onChangeTab={selectTab} selected={selected} />)}
                    </div>
                    <ButtonDetail projectTabDetail={{ tab: "Tech Used", path: Constants.TECH_USED_PATH, projectDetail: project.tech_used }} onChangeTab={selectTab} selected={selected} />
                    <ButtonDetail projectTabDetail={{ tab: "Source Code", path: Constants.SOURCE_CODE_PATH, projectDetail: project.source_code }} onChangeTab={selectTab} selected={selected} />
                </div>
            </div>
        </StackCard>
    )
}


export const ProjectDetailsCard = ({ projectTabDetail, page, setPage }: { projectTabDetail: ProjectTabDetail, page: number, setPage: (page: number) => void }) => {
    const detail: ProjectDetail = projectTabDetail.projectDetail;
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const image = `${projectTabDetail.path}${detail.image[page]}`;
    return (
        <StackCard className="max-w-200 w-full">
            <div className="flex flex-col gap-5 h-200 md:h-180">
                <div className={`${styles.optionText} self-center`}>{projectTabDetail.tab}</div>
                <Divider />
                <div className="h-80 flex flex-col gap-2">
                    <div className="relative flex-1 min-h-0 cursor-pointer">
                        <Image
                            src={image}
                            alt={projectTabDetail.tab}
                            fill
                            className="object-contain"
                            onClick={() => setIsPopupOpen(true)}
                        />
                    </div>
                    <div className="h-15 shrink-0 flex items-center justify-center">
                        <Pagination
                            currentPage={page}
                            maxPage={detail.image.length}
                            onNext={() => setPage(page + 1)}
                            onPrevious={() => setPage(page - 1)}
                        />
                    </div>
                </div>
                <Divider />
                <div className="flex-1 min-h-0 overflow-y-auto text-start">
                    <div className={styles.tabParagraph}>
                        <TextColor text={detail.description} />
                    </div>
                </div>
                {
                    <ImagePopup key={`${isPopupOpen}-${page}`} isOpen={isPopupOpen}
                        onClose={() => setIsPopupOpen(false)}
                        start={page}
                        path={projectTabDetail.path}
                        src={detail.image}
                        alt={projectTabDetail.tab}
                    />
                }
            </div>
        </StackCard>
    )
}
