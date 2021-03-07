import styled from "styled-components";

const Container = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  box-sizing: border-box;
  text-align: right;
  padding: 0 20px;
  
  color: ${props => props.theme.colour.grey}
`


function Footer() {
  return (
    <Container>
      <p>Made with next.js</p>
    </Container>
  );
}

export default Footer;