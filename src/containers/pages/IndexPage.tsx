import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import TitleContainer from '../../components/TitleContainer';
import AboutContainer from '../../components/AboutContainer';
import ContactContainer from '../../components/ContactForm';
import { Footer } from '../../components/Footer';
import ProjectsContainer from '../../components/projects/ProjectsContainer';
import 'animate.css/animate.min.css';


const ScreenContainer = styled.div`
  position: relative;
  margin: 0;
  padding: 0;
  width: calc(100vw - (100vw - 100%));
  min-height: var(--page-height);
`;

interface CSSProps {
  pageHeight: number;
}

const CSS = styled.div<CSSProps>`
  --page-height: ${props => props.pageHeight + 'px'};
`;

enum Page {
  Start = 'title-screen',
  About = 'about-screen',
  Projects = 'projects-screen',
  Contact = 'contact-screen',
}

export default function IndexPage() {
  const [pageHeight, setPageHeight] = useState(0);

  useEffect(() => {
    setPageHeight(window.visualViewport.height);
  }, []);


  const scrollToSection = (section: Page) => {
    const currentBottom = document.getElementById(section)!!.getBoundingClientRect().top;
    window.scrollBy({ top: currentBottom, left: 0, behavior: 'smooth' });
  };

  return (
    <>
      <CSS pageHeight={pageHeight}>
        <ScreenContainer id={'title-screen'}>
          <TitleContainer scrollAction={() => scrollToSection(Page.About)} />
        </ScreenContainer>
        <ScreenContainer id={'about-screen'}>
          <AboutContainer scrollAction={() => scrollToSection(Page.Projects)}/>
        </ScreenContainer>
        <ScreenContainer id={"projects-screen"}>
          <ProjectsContainer scrollAction={() => scrollToSection(Page.Contact)}/>
        </ScreenContainer>
        <ScreenContainer id={'contact-screen'}>
          <ContactContainer />
        </ScreenContainer>
        <Footer />
      </CSS>
    </>
  );
}
