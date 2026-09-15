import React, { ReactNode } from 'react'
import styles from '../contact.module.css';

const ContactSection = ({ header, children }: { header: string, children: ReactNode }) => {
    return (
         <div className="flex flex-col">
            <div className={styles.contactHeader}>
                {header}
            </div>
            <div className="flex flex-1 flex-col">
                {children}
            </div>
        </div>
    )
}

export default ContactSection
