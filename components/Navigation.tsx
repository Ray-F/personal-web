import styled from 'styled-components';
import Head from 'next/head';
import Link from 'next/link';
import MediaQuery from 'react-responsive';
import ReactBurgerMenu from 'react-hamburger-menu';

import { useRouter } from 'next/router';
import NavLink from './NavLink';
import { useState } from 'react';

// The size of the mobile screen, in pixels
const MOBILE_SCREEN_SIZE = 650;

const Nav = styled.nav`
  position: relative;
  background-color: ${props => props.theme.colour.grey};

  padding: 0;
  margin: 0;
  height: 60px;
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
  right: 0;
  top: 0;
  margin-right: 20px;
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
`;

const NavLinkStyled = styled(NavLink)`
  :hover {
    color: ${props => props.theme.colour.lightblue};
    cursor: pointer;
  }
`;

const MobileUl = styled.ul`
  left: 0;
  top: 60px;
  position: absolute;
  box-sizing: border-box;
  
  margin: 0;
  padding: 20px;
  width: 130px;
  
  border-radius: 0 0 20px 0;
  
  z-index: 2;
  background-color: rgb(87, 101, 111);
`;

const MobileLi = styled.li`
  display: block;
  padding: 10px 0;
  color: white;
`;

const MediaQueryStyled = styled(MediaQuery)``

const NavMenuBtnStyled = styled(ReactBurgerMenu)`
  top: 20px;
  left: 20px;
  position: absolute;
`;


type PageType = '/' | '/blog' | '/projects' | 'contact';

export default function Navigation() {
  const router = useRouter();

  const [isMenuOpen, setMenuOpen] = useState(false);

  const paths = router.pathname.split('/');
  let currentPage: PageType = (paths.length === 0) ? '/' : `/${paths[1]}` as PageType;

  const handleMenuClick = () => setMenuOpen(!isMenuOpen);

  return (
    <>
      <Head>
        <title>rayf.me</title>
        <meta charSet={'utf-8'} />
        <meta name={'author'} content={'Raymond Feng'} />
        <meta name={'viewport'} content={'initial-scale=1.0'} />
      </Head>

      <Nav>
        <MobileUl style={{ 'display': isMenuOpen ? 'block' : 'none' }}>
          <MobileLi><NavLinkStyled href={'/'} currentPage={currentPage}>Home</NavLinkStyled></MobileLi>
          <MobileLi><NavLinkStyled href={'/projects'} currentPage={currentPage}>Projects</NavLinkStyled></MobileLi>
          <MobileLi><NavLinkStyled href={'/contact'} currentPage={currentPage}>Contact</NavLinkStyled></MobileLi>
        </MobileUl>

        <MediaQueryStyled maxWidth={MOBILE_SCREEN_SIZE - 1} onChange={() => setMenuOpen(false)}>
          <div>
            <NavMenuBtnStyled
              color={'white'} height={18} width={30}
              menuClicked={handleMenuClick} isOpen={isMenuOpen}
            />
          </div>
        </MediaQueryStyled>
        <MediaQueryStyled minWidth={MOBILE_SCREEN_SIZE}>
          <MainUl>
            <MainLi><NavLinkStyled href={'/'} currentPage={currentPage}>Home</NavLinkStyled></MainLi>
            <MainLi><NavLinkStyled href={'/projects'} currentPage={currentPage}>Projects</NavLinkStyled></MainLi>
            <MainLi><NavLinkStyled href={'/contact'} currentPage={currentPage}>Contact</NavLinkStyled></MainLi>
          </MainUl>
        </MediaQueryStyled>

        <SocialUl>
          <SocialLi>
            <Link href={'https://www.linkedin.com/in/raymond-feng-b5278916b/'}>
              <a><i className="fab fa-linkedin" /></a>
            </Link>
          </SocialLi>
          <SocialLi>
            <Link href={'https://www.github.com/ray-f'}>
              <a><i className="fab fa-github-square" /></a>
            </Link>
          </SocialLi>
        </SocialUl>
      </Nav>
    </>
  );
}
