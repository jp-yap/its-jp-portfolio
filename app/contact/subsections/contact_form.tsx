'use client'
import React, { useState } from 'react'
import ContactInputField from '../components/contact_input_field';
import styles from '../contact.module.css';
import ContactSection from '../components/contact_section';

const ContactForm = () => {
    const [message, setMessage] = useState("");

    return (
        <ContactSection header="SEND A MESSAGE">
            <form className={styles.contactForm}
                onSubmit={
                    (e) => {
                        e.preventDefault();
                        e.currentTarget.reset();
                        setMessage("Message sent!");
                        setTimeout(() => {
                            setMessage("");
                        }, 2000);
                    }
                }>
                <ContactInputField name="Name" />
                <ContactInputField name="Email" type="email" />
                <ContactInputField name="Message" big={true} />
                <div className={`${styles.contactInputCard} flex items-center justify-start h-20`}>
                    <div className={styles.formResponse}>
                        {message}
                    </div>
                </div>
                <div className={`${styles.contactInputCard} flex items-end justify-end h-20`}>
                    <button type="submit" className={`${styles.contactInputFieldBorder} justify-self-end cursor-pointer`}
                        onMouseDown={
                            () => {
                                new Audio("/click.mp3").play().catch(() => { });
                            }
                        }
                    >
                        <div className={styles.submitButtonBottom}>
                            <div className={styles.submitButton}>
                                Submit
                            </div>
                        </div>
                    </button>
                </div>
            </form>
        </ContactSection>
    )
}

export default ContactForm
