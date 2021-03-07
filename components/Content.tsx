import React from "react";
import styled from "styled-components";


const Container = styled.div`
  width: 1000px;
  max-width: 100%;
  padding: 25px;
  box-sizing: border-box;
  margin: 0 auto;
`

const H4 = styled.h4`
  color: ${props => props.theme.colour.grey};
  font-weight: normal;
  font-style: italic;
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