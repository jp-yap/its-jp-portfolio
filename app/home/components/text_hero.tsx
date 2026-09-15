import React, { ReactNode } from 'react'
import HeroSection from './hero_section';
import styles from '../home.module.css';

const TextHero = ({top, bottom,} : {top: ReactNode, bottom: ReactNode, className? : string}) => {
  return (
    <HeroSection className='p-0 py-6'>
      <div className="flex flex-col">
        <div className={styles.textHeroTop}>
            {top}
        </div>
        <div className={styles.textHeroBottom}>
            {bottom}
        </div>
      </div>
    </HeroSection>
  )
}

export default TextHero
