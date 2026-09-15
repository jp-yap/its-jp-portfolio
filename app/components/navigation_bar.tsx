"use client"
import React, { useEffect, useState } from 'react'
import { Constants } from '../constants';
import nav from './nav.module.css';

export type Section = {
  name: string;
  section_id: string;
  subsections?: Section[];
}

//Subsections
const commercial_section: Section = { name: "Commercial", section_id: Constants.COMMERCIAL };
const meaning_section: Section = { name: "Roy Meaning", section_id: Constants.MEANING };
const certificates_section: Section = { name: "Certificates", section_id: Constants.CERTIFICATES };
const tech_stacks_section: Section = { name: "Tech Stacks", section_id: Constants.TECH_STACKS };

//Sections
const home_section: Section = { name: "Home", section_id: Constants.HOME };
const about_section: Section = { name: "About", section_id: Constants.ABOUT, subsections: [commercial_section, meaning_section, certificates_section, tech_stacks_section] };
const projects_section: Section = { name: "Projects", section_id: Constants.PROJECTS };
const contact_section: Section = { name: "Contact", section_id: Constants.CONTACT };

const section_list: Section[] = [
  home_section,
  about_section,
  projects_section,
  contact_section
];

const SectionItem = ({
  section,
  hamburger,
  isCurrent = false,
}: {
  section: Section,
  hamburger: boolean,
  isCurrent?: boolean
}) => {
  const hasSubsections = section.subsections && section.subsections.length > 0;

  function playSound() {
    const audio = new Audio("/teleport.mp3");
    audio.volume = 0.5;
    audio.play().catch(() => { });
  }

  return (
    <li>
      {hasSubsections ? (
        hamburger ? (
          <>
            <a href={`#${section.section_id}`} className={`${nav.navText} ${(isCurrent != null && isCurrent) ? 'text-green-400' : 'text-white'}`} onClick={playSound}>
              {section.name}
            </a>

            <ul className="p-2">
              {section.subsections!.map((subsection) => (
                <SectionItem
                  key={subsection.section_id}
                  section={subsection}
                  hamburger={hamburger}
                />
              ))}
            </ul>
          </>
        ) : (
          <details name="navigation" className={`${nav.navText} ${(isCurrent != null && isCurrent) ? 'text-green-400' : 'text-white'}`}>
            <summary className={nav.navText}>{section.name}</summary>

            <ul className="p-2 bg-[rgb(43_45_49)] rounded-none w-max z-1 right-0">
              {section.subsections!.map((subsection) => (
                <SectionItem
                  key={subsection.section_id}
                  section={subsection}
                  hamburger={hamburger}
                />
              ))}
            </ul>
          </details>
        )
      ) : (
        <a href={`#${section.section_id}`} className={`${nav.navText} ${(isCurrent) ? 'text-green-400' : 'text-white'}`} onClick={playSound}>
          {section.name}
        </a>
      )}
    </li>
  );
}

const NavigationBar = () => {

  const [currentSection, setSection] = useState("home");
  const section_id = section_list.map(
    section => section.section_id
  );

  useEffect(() => {
    const elements = section_id.map(id => document.getElementById(id)).filter((element): element is HTMLElement => element !== null);

    if (elements.length === 0) return;

    const orderedIds = elements.map(el => el.id);
    const visibleSections = new Set<string>();

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          const id = entry.target.id;
          if (entry.isIntersecting) {
            visibleSections.add(id);
          } else {
            visibleSections.delete(id);
          }
        }

        const current = orderedIds.filter(id => visibleSections.has(id)).pop();

        if (current) {
          setSection(current);
        }
      },
      {
        rootMargin: `-150px 0px -100% 0px`,
        threshold: 0,
      }
    );

    elements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, [section_id]);

  return (
    <div className="navbar fixed top-0 left-0 z-50 backdrop-blur-md bg  bg-[rgb(43_45_49)]/60 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="white"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
          </div>
          <ul
            tabIndex={-1}
            className="menu menu-sm dropdown-content bg-[rgb(43_45_49)] z-1 mt-3 w-52 p-2 shadow">
            {section_list.map((section) => (
              <SectionItem
                key={section.section_id}
                section={section}
                hamburger={true}
                isCurrent={currentSection == section.section_id}
              />
            ))}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">daisyUI</a>
      </div>
      <div className="navbar-end hidden lg:flex">
        <ul className="menu menu-horizontal flex-nowrap gap-10">
          {section_list.map((section) => (
            <SectionItem
              key={section.section_id}
              section={section}
              hamburger={false}
              isCurrent={currentSection == section.section_id}
            />
          ))}
        </ul>
      </div>
    </div>
  )
}

export default NavigationBar
