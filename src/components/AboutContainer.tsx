import React from 'react';
import styled from 'styled-components';
import ScrollAnimation from 'react-animate-on-scroll';

import profile from '../resources/profile_picture.jpg';
import StackIcon from './techstack/StackIcon';
import { faGithub, faJava, faLinkedin, faNode, faNodeJs, faPython, faReact } from '@fortawesome/free-brands-svg-icons';
import { faAngleDown, faEnvelope, faLink } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from './Footer';

import flaskLogo from '../resources/logo/flask.png';

const Container = styled.div`
  background-color: ${props => props.theme.main.dark};
  color: white;

  a {
    color: ${props => props.theme.accent.green};
  }

  display: flex;
  flex-flow: row wrap;

  --about-width: 500px;
  
  @media screen and (max-width: ${props => props.theme.screen.lg}) {
    --about-width: 500px;
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
    width: 350px;
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
            <p>I am currently a software developer at <a href={'https://www.supergenerous.co.nz/about'}>Supergenerous</a>, a fintech startup based in Auckland, New Zealand.
            </p>
            <p>I am passionate about good software design, architecture and writing maintainable code.</p>
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
                <StackIcon faIcon={faJava} />
                <StackIcon name={'Kotlin'} />
                <StackIcon faIcon={faPython} />
                <StackIcon logoUrl={flaskLogo} />
                <StackIcon name={'MongoDB'} />
              </TechStackRow>

              <TechStackRow>
                <StackIcon name={'typescript'} />
                <StackIcon faIcon={faNodeJs} />
                <StackIcon faIcon={faReact} />
                <StackIcon name={'MaterialUI'} />
                <StackIcon name={'Express'} />
                <StackIcon faIcon={faNode} />
              </TechStackRow>
            </TechSelection>
            <TechDesc>
              I like <Accent>statically typed languages</Accent> and prefer working in the domain and infrastructure layers of applications.
              <br /><br />
              My current tech stack of choice is either <Accent>Kotlin</Accent>, <Accent>Java</Accent>, or an
              opinionated MERN stack (<a href={'https://github.com/ray-f/mern-template'}><FontAwesomeIcon icon={faLink} /></a>) for fullstack web applications.
              I prefer JavaScript for front-end, and primarily Typescript for server-side business logic.<br />
            </TechDesc>
          </div>
        </ScrollAnimation>
      </Item>
    </Container>
  );
};

export default AboutContainer;
