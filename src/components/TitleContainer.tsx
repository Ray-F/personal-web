import 'particles.js/particles';
import ScrollAnimation from 'react-animate-on-scroll';
import 'animate.css/animate.min.css';
import smoothscroll from 'smoothscroll-polyfill';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect } from 'react';
import styled from 'styled-components';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';

import particlesConfigPath from '../resources/particle-config.json';

const Container = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  box-sizing: border-box;
  padding: 0 25px;
  width: 650px;
  max-width: 100%;
`;

const Title = styled.p`
  margin: 0;
  padding: 0;
  font-size: 1.8rem;
  line-height: 2.5rem;

  @media screen and (max-width: ${props => props.theme.screen.sm}) {
    font-size: 1.5rem;
    line-height: 2rem;
  }
`;

const TitleHighlight = styled.span`
  font-weight: bold;
  color: ${props => props.theme.main.light}
`;

const Button = styled.a`
  display: inline-block;
  margin-top: 30px;
  outline: none;
  padding: 20px;

  background-color: rgba(0, 0, 0, 0);
  border: 2px solid ${props => props.theme.main.light};

  cursor: pointer;
  transition: 0.25s;

  &:hover {
    color: ${props => props.theme.grayscale.white};
    background-color: ${props => props.theme.main.light};
    transition: 0.25s;
  }
`;

const ParticlesContainer = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
`;

const TitleContainer = ({scrollAction}: {scrollAction: any}) => {
  useEffect(() => {
    setTimeout(() => {
      // @ts-ignore
      window.particlesJS('particles-container', particlesConfigPath);
    }, 10);
  }, [])

  return (
    <>
      <ParticlesContainer id={'particles-container'}>

      </ParticlesContainer>
    <Container>
      <ScrollAnimation animateIn={"animate__fadeIn"} duration={1}>
        <Title>Hello, I'm <TitleHighlight>Raymond Feng</TitleHighlight>. I am a software developer based in Auckland, New Zealand.</Title>
        <Button onClick={scrollAction}>Learn more about me&nbsp;&nbsp;<FontAwesomeIcon icon={faAngleDown} /></Button>
      </ScrollAnimation>
    </Container>
    </>
  );
};

export default TitleContainer;
