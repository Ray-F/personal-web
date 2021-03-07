import Layout from "components/Layout";
import profileImg from "assets/profile.jpg";
import styled from "styled-components";
import Content from "../components/Content";
import TechStackCard from "../components/TechStackCard";

const Container = styled.div`
  box-sizing: border-box;
  position: relative;
  margin: 0 auto 200px auto;
  width: 500px;
  padding: 25px;
  max-width: 100%;

  transform: translateY(5vh);
`

const Img = styled.img`
  width: 200px;
  border-radius: 100px;
`

const Title = styled.h1`
  color: ${props => props.theme.colour.darkgrey}
`

const Subtitle = styled.p`
  color: ${props => props.theme.colour.grey};
  line-height: 1.7rem;
`

const Square = styled.div`
  transform: rotate(8deg);
  background-color: ${props => props.theme.colour.lightblue};
  width: 550px;
  height: 280px;
  position: absolute;
  top: 200px;
  left: -30px;
  z-index: -1;

  transition-duration: 0.2s;

  :hover {
    transition-duration: 0.2s;
    opacity: 0.8;
  }
`

const TechStackUl = styled.ul`
  padding: 0;
  margin: 0;
  list-style: none;
`


export default function Home() {
  return (
    <Layout>
      <Container>
        <Img src={profileImg} alt={"profile photo"} />
        <Title>Raymond Feng.</Title>
        <Subtitle>Hello, my name is Raymond Feng. I am a DevOps engineer and business undergraduate.</Subtitle>
        <p>B.Com / B.E &rarr; University of Auckland, New Zealand</p>

        <Square />
      </Container>

      <Content title={"My tech stack"}
               subtitle={"These are the tech tools I have experience with"}>
        <TechStackUl>
          <TechStackCard name={"ReactJS"} style={{color: "rgb(89,211,248)"}}>
            <i className="fab fa-react" />
          </TechStackCard>

          <TechStackCard name={"NextJS"} style={{color: "rgb(89,211,248)"}}>
            <img src={"https://cdn.worldvectorlogo.com/logos/next-js.svg"}  alt={"nextJS logo"} />
          </TechStackCard>

          <TechStackCard name={"ExpressJS"}>
            <img src={"https://cdn.worldvectorlogo.com/logos/express-109.svg"} alt={"Express logo"} />
          </TechStackCard>

          <TechStackCard name={"NodeJS"}>
            <img src={"https://cdn.worldvectorlogo.com/logos/nodejs-1.svg"} alt={"Express logo"} />
          </TechStackCard>

          <TechStackCard name={"MongoDB"}>
            <img src={"https://cdn.worldvectorlogo.com/logos/mongodb-icon-1.svg"} alt={"Express logo"} />
          </TechStackCard>

          <TechStackCard name={"styled-components"}>
            <img src={"https://avatars.githubusercontent.com/u/20658825?s=200&v=4"} alt={"StyledComponents Logo"} />
          </TechStackCard>

          <TechStackCard name={"MaterialUI"}>
            <img src={"https://cdn.worldvectorlogo.com/logos/material-ui-1.svg"} alt={"Material UI Logo"} />
          </TechStackCard>

          <hr />

          <TechStackCard name={"Java"}>
            <img src={"https://cdn.worldvectorlogo.com/logos/jee-3.svg"} alt={"Java Logo"} />
          </TechStackCard>

          <TechStackCard name={"JUnit"}>
            <img src={"https://junit.org/junit4/images/junit-logo.png"} alt={"JUnit Logo"} />
          </TechStackCard>

          <TechStackCard name={"Kotlin JVM"}>
            <img src={"https://cdn.worldvectorlogo.com/logos/kotlin-1.svg"} alt={"Kotlin JVM Logo"} />
          </TechStackCard>

        </TechStackUl>
      </Content>
    </Layout>
  );
}