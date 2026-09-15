import React, { ReactNode } from 'react'

const Menu = ({text, children} : {text : string, children? : ReactNode}) => {
    return (
        <div className="loadMenu flex flex-col gap-5" style={{ backgroundImage: `url(/dirt.webp)` }}>
            {text}
            {children}
        </div>
    );
}

export default Menu