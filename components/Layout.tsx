import { ReactNode } from "react";
import Navigation from "./Navigation";
import Footer from "./Footer";
import styled from "styled-components";

const Container = styled.div`
  position: relative;
`;

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <Container>
      <Navigation />
      {children}
      <Footer />
    </Container>
  );
}