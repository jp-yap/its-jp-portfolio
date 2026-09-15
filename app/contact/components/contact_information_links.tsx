import React from 'react'
import { ContactInformationLink } from '../components/contact_information_props';
import ContactInformationButton from '../components/contact_information_button';
import contacts from '@/data/contacts.json';

const contact_link_list: ContactInformationLink[] = contacts.links;

const ContactInformationLinks = () => {
  return (
    <div className="flex flex-row gap-5">
      {contact_link_list.map(contact_link => <ContactInformationButton key={contact_link.icon} icon={contact_link.icon} url={contact_link.url} />)}
    </div>
  )
}

export default ContactInformationLinks
