import React from "react";
import styled from "styled-components";

const Container = styled.li`
  vertical-align: top;
  display: inline-block;
  width: 150px;
  height: 150px;
  //background-color: ${props => props.theme.colour.lightblue};
  
  margin: 0;
  border-radius: 5px;
`;

const Symbol = styled.p`
  display: block;
  margin: 0;
  font-size: 75px;
  height: 110px;
  padding: 15px 0 0 0;
  text-align: center;
  
  img {
    width: 75px;
    max-height: 75px;
    margin: 0 auto;
  }
`;

const Label = styled.p`
  margin: 0;
  padding: 10px 0 0 0;
  text-align: center;
`

export default function TechStackCard({ children, name, style }: { children: React.ReactNode, name: string, style?: Object }) {
  return (
    <Container>
      <Symbol style={style}>{children}</Symbol>
      <Label>{name}</Label>
    </Container>
  );
}