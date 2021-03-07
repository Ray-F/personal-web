import Layout from "../components/Layout";
import ContactForm from "../components/ContactForm";
import styled from "styled-components";
import Link from "next/link";


const Container = styled.div`
  box-sizing: border-box;

  margin: 0 auto;
  width: 500px;
  padding: 30px;
`;

const FormContainer = styled.div`
  width: 100%;
`;

const Title = styled.h1`
  color: ${props => props.theme.colour.darkgrey}
`;

const SocialUl = styled.ul`
  padding: 0;
  margin: 0;
`

const SocialLi = styled.li`
  color: ${props => props.theme.colour.grey};
  display: inline-block;
  font-size: 1.3rem;
  margin: 0 30px 0 0;
  cursor: pointer;

  :hover {
    color: ${props => props.theme.colour.darkgrey};
  }
`;

const Hr = styled.hr`
  margin: 50px 0 20px 0;
`

function Contact() {
  return (
    <Layout>
      <Container>
        <Title>Get in touch</Title>

        <FormContainer>
          <ContactForm />
        </FormContainer>

        <Hr />

        <SocialUl>
          <SocialLi>
            <Link href={"https://www.linkedin.com/in/raymond-feng-b5278916b/"}>
              <a><i className="fab fa-linkedin" /></a>
            </Link>
          </SocialLi>
          <SocialLi>
            <Link href={"https://www.github.com/ray-f"}>
              <a><i className="fab fa-github-square" /></a>
            </Link>
          </SocialLi>
          <SocialLi>
            <Link href={"mailto:rf.raymondfeng@gmail.com"}>
              <a><i className="fas fa-envelope" /></a>
            </Link>
          </SocialLi>
        </SocialUl>
      </Container>
    </Layout>
  );
}

export default Contact;