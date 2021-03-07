import Layout from "components/Layout";
import profileImg from "assets/profile.jpg";
import styled from "styled-components";
import Link from "next/link";
import Content from "../components/Content";
import TechStackCard from "../components/TechStackCard";

const Container = styled.div`
  box-sizing: border-box;
  position: relative;
  margin: 0 auto 200px auto;
  width: 500px;
  max-width: 100%;

  transform: translateY(5vh);
`;

const Img = styled.img`
  width: 200px;
  border-radius: 100px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h1`
  color: ${props => props.theme.colour.darkgrey}
`;

const Subtitle = styled.p`
  color: ${props => props.theme.colour.grey};
  line-height: 1.7rem;
`;

const SquareGraphic = styled.div`
  transform: rotate(8deg);
  background-color: ${props => props.theme.colour.lightblue};
  width: 580px;
  height: 300px;
  position: absolute;
  top: 175px;
  left: -50px;
  z-index: -1;

  transition-duration: 0.2s;

  :hover {
    transition-duration: 0.2s;
    opacity: 0.8;
  }
`;

const DiagonalGraphic = styled.div`
  position: absolute;
  z-index: -1;
  top: -100px;
  left: -50px;

  width: 120vw;
  height: 650px;
  transform: rotate(-8deg);

  background-color: #f3f8fa;
`;

const TechStackUl = styled.ul`
  padding: 0;
  margin: 0 0;
  list-style: none;
`;

const Hr = styled.hr`
  margin: 50px 0 30px 0;
`;


export default function Home() {
  return (
    <Layout>
      <Container>
        <Img src={profileImg} alt={"profile photo"} />
        <div>
          <Title>Raymond Feng.</Title>
          <Subtitle>Hello, my name is Raymond Feng. I am a software engineer and business undergraduate. I am currently studing a B.E/B.Com cojoint at the University of Auckland.</Subtitle>
        </div>
        <Link href={"/projects"}><a>See some past projects &rarr;</a></Link>

        <SquareGraphic />
      </Container>

      <DiagonalGraphic />
      <Content title={"My tech stack"}
               subtitle={
                 "This is the technology stack I have experience with across different projects and systems. " +
                 "Experience levels vary anywhere from intermediate to proficient given any tool listed."}>

        <TechStackUl>

          <h3>For Web Development</h3>
          <TechStackCard name={"ReactJS"} style={{ color: "rgb(89,211,248)" }}>
            <img src={"https://cdn.worldvectorlogo.com/logos/react-2.svg"} alt={"React Logo"} />
          </TechStackCard>

          <TechStackCard name={"NextJS"} style={{ color: "rgb(89,211,248)" }}>
            <img src={"https://cdn.worldvectorlogo.com/logos/next-js.svg"} alt={"nextJS logo"} />
          </TechStackCard>

          <TechStackCard name={"styled-components"}>
            <img src={"https://avatars.githubusercontent.com/u/20658825?s=200&v=4"} alt={"StyledComponents Logo"} />
          </TechStackCard>

          <TechStackCard name={"MaterialUI"}>
            <img src={"https://cdn.worldvectorlogo.com/logos/material-ui-1.svg"} alt={"Material UI Logo"} />
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

          <Hr />

          <h3>Other Languages and Frameworks</h3>

          <TechStackCard name={"Java"}>
            <img src={"https://cdn.worldvectorlogo.com/logos/jee-3.svg"} alt={"Java Logo"} />
          </TechStackCard>

          <TechStackCard name={"JUnit"}>
            <img src={"https://junit.org/junit4/images/junit-logo.png"} alt={"JUnit Logo"} />
          </TechStackCard>

          <TechStackCard name={"Kotlin JVM"}>
            <img src={"https://cdn.worldvectorlogo.com/logos/kotlin-1.svg"} alt={"Kotlin JVM Logo"} />
          </TechStackCard>

          <TechStackCard name={"Python 3"}>
            <img src={"https://cdn.worldvectorlogo.com/logos/python-5.svg"} alt={"Python Logo"} />
          </TechStackCard>

          <TechStackCard name={"R for Stats"}>
            <img src={"https://cdn.worldvectorlogo.com/logos/r-lang.svg"} alt={"R Logo"} />
          </TechStackCard>
        </TechStackUl>
      </Content>
    </Layout>
  );
}