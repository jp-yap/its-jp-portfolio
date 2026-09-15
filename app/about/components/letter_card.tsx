"use client"
import React, { useRef, useState } from 'react'
import styles from '../about.module.css'
import Image from 'next/image'
import { Constants } from '@/app/constants';
import ScrollAnimation from '@/app/scroll_animation';

export type LetterMeaning = {
    letter: string;
    meaning: string;
    blockImg: string;
    itemImg: string;
    color: string;
}

const LetterCard = ({ letter }: { letter: LetterMeaning }) => {

    const [breakState, setBreakState] = useState(false);
    const [flag, setFlag] = useState(false);
    const [showAnimation, setShowAnimation] = useState(true);
    const audioRef = useRef<HTMLAudioElement | null>(null);

    const handleAnimationStart = () => {
        const audio = new Audio(
            `${Constants.ANIMATIONS_PATH}breaking_sound.mp3`
        );

        audio.loop = true;
        audio.play().catch(() => { });

        audioRef.current = audio;
    };

    const handleAnimationEnd = () => {
        if (audioRef.current) {
            audioRef.current.pause();
            audioRef.current.currentTime = 0;
            audioRef.current = null;
        }

        const brokenAudio = new Audio(
            `${Constants.ANIMATIONS_PATH}broken_sound.mp3`
        );

        brokenAudio.play().catch(() => { });
        setBreakState(true);
    };

    return (
        <div className="relative aspect-square">
            {
                !breakState ? <button
                    className={styles.blockCard}
                    style={{ backgroundImage: `url('/${letter.blockImg}')`, cursor: `url('/pickaxe.png'), auto !important` }}
                    onClick={() => {
                        if (flag)
                            return;

                        setFlag(true);
                    }}
                >
                    <div className={`${styles.blockLetter} ${letter.color}`}>
                        {letter.letter}<div className={styles.animateSpin}>
                        </div>
                    </div>
                </button> :
                    <div className={styles.blockCard} style={{ backgroundImage: `url('/stone.webp')` }}>
                        <ScrollAnimation threshold={0} className={`${styles.blockContent} ${letter.color}`}>
                            {letter.meaning}
                            <div className={styles.animateSpin}>
                                <div className="aspect-square w-full" style={{ maxWidth: 'clamp(16px, 5vw + 20px, 64px)' }}>
                                    <Image
                                        src={`/${letter.itemImg}`}
                                        alt=""
                                        fill
                                        className="object-contain"
                                    />
                                </div>
                            </div>
                        </ScrollAnimation>
                    </div>
            }
            {(flag && !breakState) && <div
                className={`${styles.breakAnimation}`}
                onAnimationStart={handleAnimationStart}
                onAnimationEnd={handleAnimationEnd}
            />
            }
            {
                (breakState && showAnimation) && <div className="relative aspect-square w-full">
                    <video
                        src="/animations/broken.webm"
                        autoPlay
                        muted
                        playsInline
                        className="absolute inset-0 h-full w-full object-contain"
                        onEnded={() => setShowAnimation(false)}
                    />
                </div>
            }


        </div>
    )
}

export default LetterCard
