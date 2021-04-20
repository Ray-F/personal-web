import React from "react";
import styled from "styled-components";

const Container = styled.div`
  position: relative;
  left: -25px;
  width: 100vw;
  min-height: 100vh;
  box-sizing: border-box;
  padding-top: 50px;
  padding-bottom: 50px;
`;

const Screenshots = styled.div`
  padding-top: 20px;
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

const Desc = styled.p`
  line-height: 1.5rem;
`

export default function ProjectContent({
                                         style,
                                         children,
                                         timeline,
                                         title,
                                         description,
                                         link,
                                         type,
                                         client,
                                       }:
                                         {
                                           timeline?: string,
                                           style?: Object,
                                           children: React.ReactNode,
                                           title: string,
                                           description: string,
                                           link: string,
                                           type: string,
                                           client: string
                                         }) {
  return (
    <Container style={style}>
      <Content>
        <h3>{title}</h3>
        {timeline ? (<p>Development period: {timeline}</p>) : null}
        <Desc dangerouslySetInnerHTML={{__html: description}} />
        <br />
        <i><Desc dangerouslySetInnerHTML={{__html: client}} /></i>
      </Content>

      <Screenshots>
        {children}
      </Screenshots>



    </Container>
  );
}
