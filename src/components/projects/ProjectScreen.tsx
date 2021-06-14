import React from 'react';
import styled from 'styled-components';
import { Project } from '../../utils/Project';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLayerGroup, faLink } from '@fortawesome/free-solid-svg-icons';


interface ContainerProps {
  bg?: string
}

const Container = styled.div<ContainerProps>`
  height: var(--page-height);
  width: 100vw;
  background: ${props => props.bg ?? props.theme.main.light};

  display: grid;
  grid-template-columns: 1fr minmax(auto, 600px) 1fr;
  grid-template-rows: 25% 40% 35%;
  grid-gap: 50px;
  
  grid-template-areas: "1 2 3" "4 content 5" "6 7 8";

  align-items: center;
  justify-content: center;
  
  .link {
    font-weight: normal;
    font-size: 0.8em;
    color: inherit;
    transition: 0.2s;
    
    &:hover {
      transition: 0.2s;
      color: ${props => props.theme.accent.yellow};
    }
  }
`;

interface ContentProps {
  colour?: string
}

const Content = styled.div<ContentProps>`
  grid-area: content;
  color: ${props => props.colour ?? 'white'};

  padding: 0 25px;
  width: 600px;
  max-width: calc(100vw - 80px);
  line-height: 1.4rem;
  
  .title {
    line-height: 1.3em;
    
    @media screen and (max-width: ${props => props.theme.screen.sm}) {
      font-size: 1.4rem;
    }
  }
  
  .tech {
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
  }

  //position: absolute;
  //top: 50%;
  //transform: translateY(-50%);
  //z-index: 1;
`;

const Accent = styled.span`
  font-weight: bold;
  margin-right: 10px;
`;

const ProjectScreen = ({ children, project }: { children: any, project: Project }) => {
  return (
    <Container bg={project.theme.bgColour}>
      <Content colour={project.theme.colour}>
        <h1 className={'title'}>{project.name}</h1>
        <h4 className={'work-period'}>{project.role} // {project.workPeriod} // <a className='link' href={project.link}><FontAwesomeIcon icon={faLink} /></a></h4>
        <p className={'desc'}>{project.description}</p>
        <ul className={'features'}>
          {project.highlights.map((featureStr, key) => {
            return (<li key={key}>{featureStr}</li>);
          })}
        </ul>
        <div className={'tech'}>
          <Accent><FontAwesomeIcon icon={faLayerGroup} /></Accent>
          <p>{project.technology.join(', ')}</p>
        </div>
      </Content>

      {children}
    </Container>
  );
};

export default ProjectScreen;
