import React from 'react'
import styles from '../contact.module.css';

const ContactInformationCard = ({ label, contact, }: { label: string, contact: string }) => {
    return (
        <div className="flex flex-col">
            <div className={styles.contactInfoLabel}>{label}</div>
            <div className={styles.contactInfoValue}>{contact}</div>
        </div>
    )
}

export default ContactInformationCard

