import React from 'react';
import styled from 'styled-components';
import ScrollAnimation from 'react-animate-on-scroll';

import profile from '../resources/profile.png';
import StackIcon from './techstack/StackIcon';
import { faGithub, faJava, faLinkedin, faNodeJs, faPython, faReact } from '@fortawesome/free-brands-svg-icons';
import { faAngleDown, faEnvelope, faLink } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from './Footer';


const Container = styled.div`
  background-color: ${props => props.theme.main.dark};
  color: white;

  a {
    color: ${props => props.theme.accent.green};
  }

  display: flex;
  flex-flow: row wrap;

  --about-width: 40%;
  
  @media screen and (max-width: ${props => props.theme.screen.lg}) {
    --about-width: 550px;
  }
`;

const Item = styled.div`
  box-sizing: border-box;
  
  max-width: 100%;
  min-height: var(--page-height);

  overflow-x: hidden;
  flex-grow: 1;

  display: flex;
  align-items: center;
  font-size: 1.1rem;
  line-height: 1.8rem;
  
  padding: 50px 0;
  
  @media screen and (max-width: ${props => props.theme.screen.sm}) {
    font-size: 1.1rem;
    line-height: 1.8rem;
  }

  &.dark {
    background: ${props => props.theme.main.darkest};
    width: var(--about-width);
    justify-content: flex-end;

    padding-right: 100px;

    @media screen and (max-width: ${props => props.theme.screen.sm}) {
      padding-left: 20px;
      padding-right: 40px;
    }

  }

  &.tech {
    padding-left: 100px;
    padding-right: 30px;
    width: calc(100% - var(--about-width));
    min-width: 580px;
    
    @media screen and (max-width: ${props => props.theme.screen.md}) {
      min-width: 300px;
    }
    
    @media screen and (max-width: ${props => props.theme.screen.sm}) {
      padding-left: 30px;
    }
  }
`;

const Content = styled.div`

  img {
    margin-top: 40px;
    margin-left: auto;
    display: block;
    --size: 250px;
    width: var(--size);
    height: var(--size);
    border-radius: calc(var(--size) / 2);
  }

  p {
    text-align: right;
    width: 400px;
    max-width: calc(100vw - 75px);
  }
  
  ul {
    padding: 0;
    list-style: none;
    text-align: right;
    
    li {
      font-size: 1.5rem;
      margin-left: 20px;
      display: inline-block;
      
      a {
        color: white;
      }
    }
  }
`;

const TechSelection = styled.div`
  display: flex;
  flex-flow: row wrap;
`;

const TechDesc = styled.p`
  margin-top: 30px;
  max-width: 550px;
  padding-right: 30px;
`;

const TechStackRow = styled.div`
  display: flex;
  flex-flow: row wrap;
  margin-bottom: 0;

  > * {
    margin-right: 10px;
    margin-bottom: 10px;
  }
`;

const Title = styled.h1`
  padding: 0 0 25px 0;
  width: 100%;
  flex-grow: 1;
`;

const Accent = styled.span`
  color: ${props => props.theme.accent.yellow};
`

const DownArrow = styled.p`
  text-align: right;
  font-size: 3rem;

  transition: 0.2s;
  
  :hover {
    transition: 0.2s;
    color: ${props => props.theme.accent.blue};
    cursor: pointer;
  }
`

const AboutContainer = ({scrollAction}: {scrollAction: any}) => {

  const scrollActionInner = () => {
    const currentBottom = document.getElementById('about-content-container')!!.getBoundingClientRect().bottom;
    window.scrollBy({ top: currentBottom, left: 0, behavior: 'smooth' });
  };

  return (
    <Container>
      <Item className={'dark'} id='about-content-container'>
        <ScrollAnimation animateIn={"animate__fadeInRight"} duration={0.5} delay={50}>
          <Content>
            <img src={profile} alt={'Profile'} />
            <p>I am currently a full-stack developer with a core finance focus at <a href={'https://www.nzte.govt.nz'}>New Zealand Trade & Enterpise</a>, a government agency helping New Zealand businesses succeed internationally.
            </p>
            <p>I am passionate about good software design, architecture and writing maintainable code, particularly in fintech and cleantech domains.</p>
            <ul>
              <Link faIcon={faLinkedin} link={"https://www.linkedin.com/in/raymond-feng-nz"} />
              <Link faIcon={faGithub} link={"https://www.github.com/ray-f"} />
              <Link faIcon={faEnvelope} link={"mailto:rf.raymondfeng@gmail.com"} />
            </ul>
            <DownArrow onClick={scrollActionInner}><FontAwesomeIcon icon={faAngleDown}/></DownArrow>
          </Content>
        </ScrollAnimation>
      </Item>
      <Item className={'tech'}>
        <ScrollAnimation animateIn={'animate__fadeInLeft'} duration={0.5}>
          <div>
            <Title>My Tech Stack</Title>
            <TechSelection>
              <TechStackRow>
                <StackIcon faIcon={faJava} tooltip="Java" />
                <StackIcon name={'Kotlin'} />
                <StackIcon faIcon={faPython} tooltip="Python 3" />
              </TechStackRow>

              <TechStackRow>
                <StackIcon name={'TypeScript'} />
                <StackIcon faIcon={faNodeJs} tooltip="JavaScript" />
                <StackIcon faIcon={faReact} tooltip="React" />
              </TechStackRow>
            </TechSelection>
            <TechDesc>
              I like <Accent>statically typed languages</Accent> and prefer working in business domain layers of applications (e.g. backend, automations).
              <br /><br />
              My current language of choice is either <Accent>Kotlin</Accent> or <Accent>TypeScript</Accent> and have used both in a workplace production environment.
              For personal projects, I like to use an opinionated MERN stack (<a href={'https://github.com/ray-f/mern-template'}><FontAwesomeIcon icon={faLink} /></a>) to prototype something quickly.
            </TechDesc>
            <TechDesc>
              Other technologies: PHP, C++, Flask, MongoDB, Azure Cloud, CosmosDB, GCP, Firebase, Express, Jira, Material UI
            </TechDesc>
          </div>
        </ScrollAnimation>
      </Item>
    </Container>
  );
};

export default AboutContainer;
