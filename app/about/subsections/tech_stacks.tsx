import React from 'react'
import TechStackCard, { TechStackSection } from '../components/tech_stack_card'
import Subsection from '@/app/components/subsection';
import { Constants } from '@/app/constants';
import about from '@/data/about.json';

const techStackSectList: TechStackSection[] = about.techStacks;

const TechStacks = () => {
  return (
    <Subsection header="Tech Stacks" id={Constants.TECH_STACKS}>
        <div className="grid grid-cols-1 gap-10 py-2 px-[clamp(0.2rem,1vw,1.5rem)] sm:grid-cols-2">
          {techStackSectList.map((techStackSect) => (
            <TechStackCard
              key={techStackSect.header}
              techStackSect={techStackSect}
            />
          ))}
        </div>
    </Subsection>
  )
}

export default TechStacks
