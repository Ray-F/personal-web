import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

interface ContainerProps {
  fontSize: string
}

const Container = styled.div<ContainerProps>`
  position: relative;
  width: 100px;
  height: 100px;

  @media screen and (max-width: ${props => props.theme.screen.sm}) {
    width: 90px;
    height: 90px;
  }

  background-color: ${props => props.theme.grayscale.white};

  transition: 0.2s;

  :hover {
    transition: 0.2s;
    background-color: ${props => props.theme.main.light};
    color: white;
    
    img {
      filter: brightness(4) grayscale(1);
    }
  }

  color: ${props => props.theme.main.light};

  p {
    font-size: ${props => props.fontSize};
    display: block;
    margin: 0;
    padding: 0;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

const Img = styled.img`
  margin: 20%;
  width: 60%;
  height: 60%;
  object-fit: contain;
  display: flex;
  flex-flow: column;
  align-self: center;
  justify-content: space-around;
`

const StackIcon = ({ faIcon, name, logoUrl }: { faIcon?: IconProp, name?: string, logoUrl?: string }) => {
  const [fontSize, setFontSize] = useState('3rem');

  useEffect(() => {
    const stringLen = name?.length;

    if (stringLen) {
      let scaling;
      if (stringLen > 7) scaling = 150;
      else if (stringLen > 3) scaling = 110;
      else scaling = 60;

      setFontSize(scaling / stringLen + 'px');
    }
  }, [name]);

  return (
    <Container fontSize={fontSize}>
        {faIcon ? (
          <p><FontAwesomeIcon icon={faIcon} /></p>
        ) : logoUrl ? (
          <Img src={logoUrl} alt={"Tech stack icon"} />
        ) : (<p>{name}</p>)}
    </Container>
  );
};

export default StackIcon;
