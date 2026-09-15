import React from 'react'
import ContactInformation from './subsections/contact_information';
import Section from '../components/section';
import ContactForm from './subsections/contact_form';
import ScrollAnimation from '../scroll_animation';
import { Constants } from '../constants';

const Contact = () => {
  return (
    <Section header="Contact Me" background="contact.webp" id={Constants.CONTACT} credit="Badlion" href="https://www.badlion.net/minecraft-blog/minecraft-rarest-structures">
      <ScrollAnimation>
        <div className="flex flex-wrap items-stretch justify-center gap-20 text-start">
          <ContactInformation />
          <ContactForm />
        </div>
      </ScrollAnimation>
    </Section>
  )
}

export default Contact
