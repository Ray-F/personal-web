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
    cursor: pointer;
    transition: 0.2s;
    background-color: ${props => props.theme.main.light};
    color: white;
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

const StackIcon = ({ faIcon, name }: { faIcon?: IconProp, name?: string }) => {
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
      <p>
        {faIcon ? (
          <FontAwesomeIcon icon={faIcon} />
        ) : null}
        {name}
      </p>
    </Container>
  );
};

export default StackIcon;
