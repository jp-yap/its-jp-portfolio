import { ReactNode } from 'react'
import ScrollAnimation from '../scroll_animation';

const Section = ({ children, header, background, id, credit, href}: { children: ReactNode, header: string, background: string, id?: string, credit?: string, href?: string}) => {
    return (
        <div className="relative w-full overflow-hidden bg-cover bg-center bg-fixed" style={{ backgroundImage: `url(/${background})` }}>
            <div className="absolute inset-0 bg-black/30 backdrop-blur-sm" />
            <div className="relative z-10">
                <ScrollAnimation sound={`${id}.mp3`}>
                <div className="py-30 section text-center w-full" id={id}>
                    <div className="sectionHeader">
                        <h2>{header}</h2>
                    </div>
                    <div className="sectionContent">
                        {children}
                    </div>
                </div>
                </ScrollAnimation>
                {credit && <div className="justify-self-end self-end credit"><a href={href} target="_blank"
                    rel="noopener noreferrer">@{credit}</a></div>}
            </div>
        </div>
    )
}

export default Section
