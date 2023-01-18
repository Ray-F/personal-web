import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import styled from 'styled-components';

import { faGithub, faLinkedin, faReact } from '@fortawesome/free-brands-svg-icons';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import tsLogo from '../resources/ts_logo.png';

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 80px;
  background: ${props => props.theme.main.darkest};

  @media screen and (max-width: ${props => props.theme.screen.md}) {
    height: 140px;
  }
`;

const SocialsUl = styled.ul`
  position: absolute;
  top: 25px;
  flex-grow: 1;
  margin: 0;
  padding: 0;
  list-style: none;

  li {
    color: white;
    font-size: 1.5rem;
    display: inline-block;
    margin: 0 20px;
  }
  
  li a {
    color: inherit;
    text-decoration: none;
  }
`;

const CopyrightContainer = styled.div`
  position: absolute;
  top: 30px;
  right: 25px;
  color: white;
  
  * {
    margin: 0;
    padding: 0;
  }
  
  @media screen and (max-width: ${props => props.theme.screen.md}) {
    box-sizing: border-box;
    padding-top: 20px;
    background-color: ${props => props.theme.main.light};
    left: 0;
    right: 0;
    top: 80px;
    text-align: center;
    height: 60px;
  }
`

const TSLogo = styled.img`
  height: 1rem;
  position: relative;
  top: 2px;
  
`

const Link = ({link, faIcon}: {link: string, faIcon: IconProp}) => {
  return (
    <li>
      <a href={link}><FontAwesomeIcon icon={faIcon} /></a>
    </li>
  )
}

const Footer = () => {
  return (
    <Container>
      <SocialsUl>
        <Link faIcon={faLinkedin} link={"https://www.linkedin.com/in/raymond-feng-nz"} />
        <Link faIcon={faGithub} link={"https://www.github.com/ray-f"} />
      </SocialsUl>

      <CopyrightContainer>
        <p>Made using <FontAwesomeIcon icon={faReact} /> <TSLogo src={tsLogo} /> – Raymond Feng {new Date().getFullYear()}</p>
      </CopyrightContainer>
    </Container>
  );
};

export {
  Footer,
  Link
};
