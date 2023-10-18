import React, { useRef, useEffect } from 'react'
import Nav from './Nav';
import Top from './SectionTop';
import About from './SectionAbout';
import Projects from './SectionProjects';
import Contact from './SectionContact';

import '../styles/global.css';

function App() {

  const navRef = useRef(null);
  const topRef = useRef(null);
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);
  const observerRef = useRef(null);

  const pages = {
    top: 0,
    about: 1,
    projects: 2,
    contact: 3
  }

  function getPageRef(pageNum) {
    let pageRef;

    switch (pageNum) {
      case pages.top:
        {
          pageRef = topRef;
          break;
        }
      case pages.about:
        {
          pageRef = aboutRef;
          break;
        }
      case pages.projects:
        {
          pageRef = projectsRef;
          break;
        }
      case pages.contact:
        {
          pageRef = contactRef;
          break;
        }
      default:
        {
          pageRef = topRef;
        }
    }

    return pageRef;
  }

  function scrollTo(pageNum) {
    const pageRef = getPageRef(pageNum);
    if (pageRef.current) {
      pageRef.current.scrollIntoView({ block: 'start', inline: 'nearest', behavior: 'smooth' });
    }
  }

  useEffect(() => {
    const elements = [topRef.current, aboutRef.current, projectsRef.current, contactRef.current];

    observerRef.current = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        // This function should hide the header if topRef is intersecting.
        // This function should show the header and highlight the section over which the user hovers if any other section is intersecting
        if (entry.target === topRef.current && entry.isIntersecting) {
          navRef.current.classList.add('hidden');
          // Hide the header
        } 
        else if (entry.target === aboutRef.current && entry.isIntersecting) {
          navRef.current.classList.remove('hidden');
          // Highlight only about in nav
          // I need to get the pagesth child of the nav and hover it...
        }
        else if (entry.target === projectsRef.current && entry.isIntersecting) {
          navRef.current.classList.remove('hidden');
          // Highlight only projects in nav
        }
        else if (entry.target === contactRef.current && entry.isIntersecting) {
          navRef.current.classList.remove('hidden');
          // Highlight only contact in nav
        }
      });
    }, { threshold: 0.5 });

    elements.forEach(element => {
      observerRef.current.observe(element);
    });

    return () => {
      elements.forEach(element => {
        observerRef.current.disconnect(element);
      });
    }
  }, []);

  return (
    <>
      <Nav ref={navRef} scrollTo={scrollTo} pages={pages} />
      <Top ref={topRef} />
      <About ref={aboutRef} />
      <Projects ref={projectsRef} />
      <Contact ref={contactRef} />
    </>
  )
}

export default App 