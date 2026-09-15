import React from 'react'
import WhoIsJP from './subsections/who_is_jp';
import JPMeaning from './subsections/jp_meaning';
import Certificates from './subsections/certificates';
import TechStacks from './subsections/tech_stacks';
import Section from '../components/section';
import { Constants } from '../constants';

const About = () => {
    return (
        <Section header="ABOUT" background="about_bg.webp" id={Constants.ABOUT} credit="opal" href="https://minecraftstorage.com/shaders/opal">
            <WhoIsJP />
            <JPMeaning />
            <Certificates />
            <TechStacks />
        </Section>
    )
}

export default About
