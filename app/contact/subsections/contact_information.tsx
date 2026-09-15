import React from 'react'
import ContactInformationCard from '../components/contact_information_card';
import ContactInformationLinks from '../components/contact_information_links';
import styles from '../contact.module.css';
import ContactSection from '../components/contact_section';
import { ContactInformationSocial } from '../components/contact_information_props';
import contacts from '@/data/contacts.json';

const socials : ContactInformationSocial[] = contacts.socials;

const ContactInformation = () => {
    return (
        <ContactSection header="SOCIALS">
            <div className={`${styles.contactInfo} flex flex-1 flex-col`}>
                <div className="flex flex-1 flex-col">
                    <div className={`${styles.contactInputCard} flex flex-1 flex-col gap-5`}>
                        {
                            socials.map(social => <ContactInformationCard key={social.label} label={social.label} contact={social.contact} />)
                        }
                    </div>

                    <div className={`${styles.contactInputCard} mt-auto`}>
                        <ContactInformationLinks />
                    </div>
                </div>
            </div>
        </ContactSection>
    )
}

export default ContactInformation
