import React from "react";
import styled from "styled-components";

const Container = styled.div`
  position: relative;
  left: -25px;
  width: 100vw;
  min-height: 100vh;
  box-sizing: border-box;
  padding-top: 50px;


`;

const Screenshots = styled.div`
  display: flex;
  flex-flow: row nowrap;
  align-items: start;
  justify-content: space-evenly;
`;

const Content = styled.div`
  width: 1000px;
  max-width: 100%;
  
  box-sizing: border-box;
  padding: 0 25px;
  margin: 0 auto;
`

export default function ProjectContent({
                                         style,
                                         children,
                                         title,
                                         description,
                                         link,
                                         type,
                                       }: { style?: Object, children: React.ReactNode, title: string, description: string, link: string, type: string }) {
  return (
    <Container style={style}>
      <Content>
        <h3>{title}</h3>
        <p>{description}</p>
      </Content>

      <Screenshots>
        {children}
      </Screenshots>
    </Container>
  );
}