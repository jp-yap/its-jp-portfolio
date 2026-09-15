"use client"
import React, { useState } from 'react'
import styles from '../about.module.css'
import Pagination from '@/app/components/pagination';
import about from '@/data/about.json';
import TextColor from '@/app/components/text_color';

type TextInfo = {
    text: string
}

const textList: TextInfo[] = about.meetJp;

const InfoCard = () => {
    const [page, setPage] = useState(0);

    return (
        <div className="w-full max-w-160">
            <div className={styles.infoCardOuter}>
                <div className={styles.infoCardInner}>
                    <div className={styles.infoCardText}> MEET JP</div>
                    <div className={styles.infoCardContent}>
                        <div className={`${styles.contentText} overflow-y-auto`}><TextColor text={textList[page].text}/></div>
                        <Pagination currentPage={page} maxPage={textList.length} 
                        onPrevious={() => {
                            setPage(page - 1)
                        }
                        }
                        onNext={() => {
                            setPage(page + 1)
                        }
                        }
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default InfoCard
