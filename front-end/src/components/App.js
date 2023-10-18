import React, { useRef, useEffect, useMemo } from 'react'
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

  const pages = useMemo(() => {
    return {
      top: 0,
      about: 1,
      projects: 2,
      contact: 3
    };
  }, []);

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
    const nav_options = navRef.current.querySelectorAll('#nav li'); // This is indexed according to the 'pages' enum.

    observerRef.current = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        // This function hides the header if topRef is intersecting.
        // This function shows the header and highlight the section over which the user hovers if any other section is intersecting.
        if (entry.target === topRef.current && entry.isIntersecting) {
          navRef.current.classList.remove('visible');
          set_selected_nav_option(nav_options, pages.top);
        }
        else if (entry.target === aboutRef.current && entry.isIntersecting) {
          navRef.current.classList.add('visible');
          set_selected_nav_option(nav_options, pages.about);
        }
        else if (entry.target === projectsRef.current && entry.isIntersecting) {
          navRef.current.classList.add('visible');
          set_selected_nav_option(nav_options, pages.projects);
        }
        else if (entry.target === contactRef.current && entry.isIntersecting) {
          navRef.current.classList.add('visible');
          set_selected_nav_option(nav_options, pages.contact);
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
  }, [pages]);

  return (
    <>
      <Nav ref={navRef} scrollTo={scrollTo} pages={pages} />
      <Top ref={topRef} scrollTo={scrollTo} pages={pages} />
      <About ref={aboutRef} />
      <Projects ref={projectsRef} />
      <Contact ref={contactRef} />
    </>
  )
}

/**
 * Put the 'selected' class onto the element in the nav_options array that corresponds to the
 * index selected_page_index.
 * @param {[]HTMLElement} nav_options the array of nav_options
 * @param {Integer} selected_page_index the index of the selected page in the array
 */
function set_selected_nav_option(nav_options, selected_page_index)
{
  nav_options.forEach((element, index) => {
    if (index === selected_page_index)
    {
      element.classList.add('selected');
    } else {
      element.classList.remove('selected');
    }
  });
}

export default App 