import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import ScrollAnimation from 'react-animate-on-scroll';
import ProjectScreen from './ProjectScreen';
import ReactElasticCarousel from 'react-elastic-carousel';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Project } from '../../utils/Project';

import pyfImg1 from '../../resources/projects/pyf-attendance-1.png';
import pyfImg2 from '../../resources/projects/pyf-attendance-2.png';
import pyfImg3 from '../../resources/projects/pyf-attendance-3.png';
import spImg2 from '../../resources/projects/spmedia-2.jpg';
import spImg3 from '../../resources/projects/spmedia-3.png';
import spImg1 from '../../resources/projects/spmedia-1.jpg';
import aspaImg1 from '../../resources/projects/aspa-1.jpg';
import aspaImg2 from '../../resources/projects/aspa-2.jpg';
import aspaImg3 from '../../resources/projects/aspa-3.jpg';

interface ColourProps {
  colour: string
}

const Container = styled.div<ColourProps>`
  position: relative;
  height: var(--page-height);
  background-color: ${props => props.theme.grayscale.white};
  
  .rec-pagination {
    position: absolute;
    bottom: 30px;
    
    .rec-dot {
      box-shadow: none;
      border: 2px solid ${props => props.colour};
    }
    
    .rec-dot_active {
      box-shadow: none;
      border: none;
      outline: none;
      background-color: ${props => props.colour};
    }
  }
  
  .rec-slider-container {
    margin: 0;
  }
`;


const ImgContainer = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;

  img {
    object-position: center;
    width: 100%;
    object-fit: cover;
    height: 100%;
  }
`


const Title = styled.h1<ColourProps>`
  transition: 0.2s;
  position: absolute;
  top: 50px;
  left: 50px;
  color: ${props => props.colour};

  z-index: 999;
  
  @media screen and (max-width: ${props => props.theme.screen.sm}) {
    left: 25px;
  }
`;

const Arrow = styled.div<ColourProps>`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 1;
  
  font-size: 3rem;

  color: ${props => props.colour};
  transition: 0.2s;
  
  :hover {
    transition: 0.2s;
    cursor: pointer;
    color: ${props => props.theme.accent.blue};
  }
  
  &.left {
    left: 50px;
  }
  
  &.right {
    right: 50px;
  }
  
  @media screen and (max-width: ${props => props.theme.screen.md}) {
    display: none;
  }
`
/* TODO: Not currently used 
const DownArrow = styled.p<ColourProps>`
  position: absolute;
  right: 50%;
  transform: translateX(50%);
  bottom: -30px;
  color: ${props => props.colour};
  font-size: 3rem;

  transition: 0.2s;
  
  :hover {
    transition: 0.2s;
    color: ${props => props.theme.accent.blue};
    cursor: pointer;
  }
`
*/

const projects: Project[] = [
  {
    name: "Attendance Monitor",
    link: "https://github.com/ray-f/pyf-attendance",
    description: "A team management tool to monitor and track attendance information over time beyond a simple excel spreadsheet. Also useful for generating insights into membership base capacity and well-being through a traffic light attendance tracking system.\n",
    highlights: [
      "Structured backend with repository pattern",
      "Implemented GitHub actions CI/CD"
    ],
    technology: ["React", "MongoDB", "TypeScript", "Express", "react-vis", "Material UI"],
    workPeriod: "2021",
    role: "Lead Developer",
    purpose: "nothing much",
    theme: { bgColour: "#fafafa", colour: "black" }
  },

  {
    name: "Spprax Media Display Website",
    link: "https://www.spprax.co.nz",
    description: "A custom-built display website used to drive online traffic conversions. Uses EmailJS as a serverless lambda to send emails from contact form, and advanced google analytics to generate site performance insights.",
    highlights: [],
    technology: ["React", "EmailJS", "Google Analytics"],
    role: "Personal",
    workPeriod: "2021",
    purpose: "nothing much",
    theme: { bgColour: "#262626", colour: "white" }
  },

  {
    name: "Pool Event Registration System",
    link: "https://github.com/UoaWDCC/ASPA-EnrollmentForm",
    description: "An integrated event registration system that brings Google Sheets, Stripe online payments and typeform like user experience to a university pool club. Increases processing efficiencies to reduce administration time and increase pool time.\n",
    highlights: [
      "Led a team of 8 developers in accordance with agile methodologies",
      "Restructured application architecture with domain driven design principles"
    ],
    technology: ["PHP", "CodeIgniter", "Google API", "Stripe API"],
    role: "Project Lead",
    workPeriod: "2020 – 2021",
    purpose: "nothing much",
    theme: { bgColour: "white", colour: "black" }
  },
]


const imagesAttendance = [
  null,
  null,
  <img src={pyfImg1} alt={"Attendance monitor website"} />,
  null,
  null,
  <img src={pyfImg2} alt={"Attendance monitor website"} />,
  null,
  <img src={pyfImg3} alt={"Attendance monitor website"} />,
]


const imagesSpmedia = [
  null,
  null,
  <img src={spImg2} alt={"spprax media website"} />,
  null,
  null,
  <img src={spImg3} alt={"spprax media website"} />,
  null,
  <img src={spImg1} alt={"spprax media website"} />,
]

const imagesAspa = [
  null,
  null,
  <img src={aspaImg3} alt={"aspa website"} />,
  null,
  null,
  <img src={aspaImg2} alt={"aspa website"} />,
  null,
  <img src={aspaImg1} alt={"aspa website"} />,
]

const ProjectsContainer = ({scrollAction}:{scrollAction: any}) => {
  let [currentPage, setCurrentPage] = useState(0);
  let [currentColour, setCurrentColour] = useState('white');

  useEffect(() => {
    setCurrentColour(projects[currentPage].theme.colour)
  }, [currentPage]);

  const numPages = projects.length;

  let carrouselRef: any = null;

  const prevPage = () => {
    const nextPage = currentPage === 0 ? numPages - 1 : currentPage - 1;
    carrouselRef.goTo(nextPage);
    setCurrentPage(nextPage);
  }

  const nextPage = () => {
    const nextPage = currentPage === numPages - 1 ? 0 : currentPage + 1;
    carrouselRef.goTo(nextPage);
    setCurrentPage(nextPage);
  }

  return (
    <Container colour={currentColour} id={'projects-container'}>
      <Title colour={currentColour}>Projects</Title>

      <Arrow colour={currentColour} onClick={prevPage} className={'left'}><FontAwesomeIcon icon={faAngleLeft} /></Arrow>
      <Arrow colour={currentColour} onClick={nextPage} className={'right'}><FontAwesomeIcon icon={faAngleRight} /></Arrow>

      <ReactElasticCarousel isRTL={false}
                            itemsToShow={1}
                            showArrows={false}
                            ref={(ref) => carrouselRef = ref}
                            onChange={(item, index) => setCurrentPage(index)}>
        <ProjectScreen project={projects[0]}>
          {imagesAttendance.map((element: any, index: number) => <ScrollAnimation key={index} animateIn={'animate__fadeIn'}><ImgContainer>{element}</ImgContainer></ScrollAnimation> )}
        </ProjectScreen>
        <ProjectScreen project={projects[1]}>
          {imagesSpmedia.map((element: any, index: number) => <ImgContainer key={index}>{element}</ImgContainer>)}
        </ProjectScreen>
        <ProjectScreen project={projects[2]}>
          {imagesAspa.map((element: any, index: number) => <ImgContainer key={index}>{element}</ImgContainer>)}
        </ProjectScreen>
      </ReactElasticCarousel>

      {/* <DownArrow colour={currentColour} onClick={scrollAction}><FontAwesomeIcon icon={faAngleDown}/></DownArrow> */}

    </Container>
  );
};

export default ProjectsContainer;
