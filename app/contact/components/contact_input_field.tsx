import React from 'react'
import styles from '../contact.module.css';

const ContactInputField = ({ name, type = "text", big = false }: { name: string, type?: string, big?: boolean }) => {
  return (
    <div className={`${styles.contactInputCard} ${!big ? 'md:col-span-1' : 'md:col-span-2'}`}>
      <div className={styles.contactInputLabel}>{name}</div>
      <div className={styles.contactInputFieldBorder}>
        {big ? (
          <textarea
            id={name}
            name={name}
            className={`${styles.contactInputField} block h-40 w-full resize-none`}
            required
          />
        ) : (
          <input
            id={name}
            name={name}
            type={type}
            className={`${styles.contactInputField} w-full`}
            required
          />
        )}
      </div>
    </div>
  )
}

export default ContactInputField
