import React from 'react'
import styles from '../home.module.css';
import TextColor from '@/app/components/text_color';
import home from '@/data/home.json';

const NameTag = () => {
    return (
        <div className={`bg-[rgb(0,0,0)]/10 p-1 ${styles.nameTag} w-fit`}>
            <TextColor text={home.nameTag}/>
        </div>
    )
}

export default NameTag