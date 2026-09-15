import { ReactNode } from 'react'
import ScrollAnimation from '../scroll_animation';

const Subsection = ({ header, children, id}: { header: string, children: ReactNode, id? : string}) => {
    return (
        <ScrollAnimation>
            <div className="mx-[clamp(1rem,3vw,3rem)] flex flex-col justify-center">
                <div className="subsectionHeader" id={id}>
                    {header}
                </div>
                <div className="subsection">
                    {children}
                </div>
            </div>
        </ScrollAnimation>
    )
}

export default Subsection
