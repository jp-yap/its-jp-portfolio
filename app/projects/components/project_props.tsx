export type ProjectDetail = {
    image: string[],
    description: string
}

export type ProjectFeature = {
    label: string,
    detail: ProjectDetail
}

export type Project = {
    logo: string,
    name: string,
    info: string,
    description: ProjectDetail
    features: ProjectFeature[],
    tech_used: ProjectDetail,
    source_code: ProjectDetail
}

export type ProjectTabDetail = {
    tab: string,
    path: string,
    projectDetail: ProjectDetail
}