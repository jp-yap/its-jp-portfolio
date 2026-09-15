import React from 'react'
import styles from '../about.module.css'
import InfoCard from '../components/info_card';
import ScrollAnimation from '@/app/scroll_animation';
import { Constants } from '@/app/constants';

const WhoIsJP = () => {
    return (
        <ScrollAnimation>
            <div className="flex flex-wrap gap-10 justify-center" id={Constants.COMMERCIAL}>
                <InfoCard />
            </div>
        </ScrollAnimation>
    )
}

export default WhoIsJP
