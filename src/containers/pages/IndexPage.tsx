import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import TitleContainer from '../../components/TitleContainer';
import AboutContainer from '../../components/AboutContainer';
import ContactContainer from '../../components/ContactForm';
import { Footer } from '../../components/Footer';
import ProjectsContainer from '../../components/projects/ProjectsContainer';


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
  Start,
  About,
  Projects,
  Contact,
}

export default function IndexPage() {
  const [pageHeight, setPageHeight] = useState(0);

  useEffect(() => {
    setPageHeight(window.visualViewport.height);
  }, []);


  const scrollToSection = (section: Page) => {
    window.scrollTo(0, section * window.visualViewport.height);
  };

  return (
    <>
      <CSS pageHeight={pageHeight}>
        <ScreenContainer>
          <TitleContainer buttonAction={() => scrollToSection(Page.About)} />
        </ScreenContainer>
        <ScreenContainer>
          <AboutContainer />
        </ScreenContainer>
        <ScreenContainer id={"projects-screen"}>
          <ProjectsContainer />
        </ScreenContainer>
        <ScreenContainer><ContactContainer /></ScreenContainer>
        <Footer />
      </CSS>
    </>
  );
}
