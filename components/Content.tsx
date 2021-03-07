import React from "react";
import styled from "styled-components";


const Container = styled.div`
  width: 1000px;
  max-width: 100%;
  box-sizing: border-box;
  padding-top: 50px;
  margin: 0 auto;
`

const H4 = styled.h4`
  color: ${props => props.theme.colour.grey};
  font-weight: normal;
  font-style: italic;
  line-height: 1.5rem;
  max-width: 700px;
`

export default function Content({
                                  children,
                                  title,
                                  subtitle,
                                  className,
                                }: { children: React.ReactNode, title: string, subtitle?: string, className?: string }) {
  return (
    <Container className={className}>
      <h2>{title}</h2>
      <H4>{subtitle}</H4>
      {children}
    </Container>
  );
}