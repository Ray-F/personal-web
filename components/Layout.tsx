import { ReactNode } from "react";
import Navigation from "./Navigation";
import Footer from "./Footer";
import styled from "styled-components";

const Container = styled.div`
  position: relative;
  padding: 0 25px 50px 25px;
  width: 100%;
  box-sizing: border-box;
`;

const H1 = styled.h1`
  margin-top: 100px;

  color: ${props => props.theme.colour.darkgrey};
  text-align: center;
`;

export default function Layout({ children, title }: { children: ReactNode, title?: string }) {
  return (
    <>
      <Navigation />
      <Container>
        {title ? <H1>{title}</H1> : null}
        {children}
      </Container>
      {/*<Footer />*/}
    </>
  );
}
