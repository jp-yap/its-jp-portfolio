import React from 'react'
import Image from 'next/image';
import styles from '../about.module.css'
import StackCard from '@/app/components/stack_card';
import Divider from '@/app/components/divider';

export type TechStackSection = {
  header: string;
  path: string;
  techStacks: TechStack[];
}

export type TechStack = {
  icon: string;
  name: string;
}

const TechStackRow = ({ icon, path, name }: { icon: string, path : string, name: string }) => {
  return (
    <div className={styles.techStack}>
      <div className={styles.techStackImage}>
        <Image src={`${path}${icon}`} alt={`${name}_img`} width={64} height={64}></Image>
      </div>
      <div>{name}</div>
    </div>
  )
}

const TechStackCard = ({techStackSect}: {techStackSect : TechStackSection}) => {
  return (
    <StackCard>
      <div className="p-5">
        <h2 className={styles.techStackHeader}>{`${techStackSect.header} (${techStackSect.techStacks.length})`}</h2>
      </div>
      <Divider/>
      <div className="grid lg:grid-cols-2 p-5">
        {techStackSect.techStacks.map(techStack => <TechStackRow key={techStack.name} icon={techStack.icon} path={techStackSect.path} name={techStack.name} />)}
      </div>
    </StackCard>
  )
}

export default TechStackCard
