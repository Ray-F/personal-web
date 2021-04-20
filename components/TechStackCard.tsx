import React from "react";
import styled from "styled-components";

const Container = styled.li`
  vertical-align: top;
  display: inline-block;
  width: 100px;
  height: 100px;
  
  margin: 20px 20px;
  border-radius: 5px;
`;

const Symbol = styled.p`
  display: block;
  margin: 0;
  height: 75px;
  padding: 15px 0 0 0;
  text-align: center;
  
  img {
    width: 50px;
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
