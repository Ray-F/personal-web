import styled from "styled-components";
import Head from "next/head";
import Link from "next/link";

import { useRouter } from "next/router";
import NavLink from "./NavLink";

const Nav = styled.nav`
  position: relative;
  background-color: ${props => props.theme.colour.grey};
  width: 110%;
  left: -5%;

  padding: 0;
  margin: 0;
`;

const MainUl = styled.ul`
  padding: 0;
  margin: 0;
  text-align: center;
  list-style: none;
`;

const MainLi = styled.li`
  color: white;
  padding: 20px 0;
  display: inline-block;
  width: 100px;
`;

const SocialUl = styled.ul`
  position: absolute;
  right: 5%;
  top: 0;
  margin-right: 50px;
`;

const SocialLi = styled.li`
  color: white;
  display: inline-block;
  font-size: 1.3rem;
  margin: 0 20px;
  cursor: pointer;
  
  :hover {
    color: ${props => props.theme.colour.lightblue};
  }
`

const NavLinkStyled = styled(NavLink)`
  :hover {
    color: ${props => props.theme.colour.lightblue};
    cursor: pointer;
  }
`


type PageType = "/" | "/blog" | "/projects" | "contact";

export default function Navigation() {

  const router = useRouter();

  const paths = router.pathname.split("/");
  let currentPage: PageType = (paths.length === 0) ? "/" : `/${paths[1]}` as PageType;

  return (
    <>
      <Head>
        <title>rayf.me</title>
        <meta charSet={"utf-8"} />
        <meta name={"author"} content={"Raymond Feng"} />
      </Head>

      <Nav>
        <MainUl>
          <MainLi><NavLinkStyled href={"/"} currentPage={currentPage}>Home</NavLinkStyled></MainLi>
          <MainLi><NavLinkStyled href={"/projects"} currentPage={currentPage}>Projects</NavLinkStyled></MainLi>
          <MainLi><NavLinkStyled href={"/contact"} currentPage={currentPage}>Contact</NavLinkStyled></MainLi>
        </MainUl>

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
        </SocialUl>
      </Nav>
    </>
  );
}