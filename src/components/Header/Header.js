import Link from 'next/link';
import React from 'react';
import { AiFillGithub,  AiFillLinkedin, AiFillMail } from 'react-icons/ai';
import { Container, Div1, Div2, Div3, NavLink, SocialIcons } from './HeaderStyles';

const Header = () => (
  <Container>
    <Div1>
      <Link
        href="/"
        style={{ display: 'flex', alignItems: 'center', color: "black" }}>

        <img src="/logo.svg" height={40} width={40} /> <span style={{ marginLeft: 10, marginTop: 7, fontSize: 20 }} >Sachi Kaushik</span>

      </Link>
    </Div1>
    <Div2>
       <li>
        <Link href="#projects" legacyBehavior>
          <NavLink>Projects</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#skills" legacyBehavior>
          <NavLink>Skills</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#about" legacyBehavior>
          <NavLink>About</NavLink>
        </Link>
      </li>
      <li>
        <NavLink>Blogs</NavLink>
      </li> 
    </Div2>
    <Div3>
      <SocialIcons href="https://github.com/sachikaushik">
        <AiFillGithub size="3rem" />
      </SocialIcons>
      <SocialIcons href="https://www.linkedin.com/in/sachi-k-5abb94275/?original_referer=">
        <AiFillLinkedin size="3rem" />
      </SocialIcons>
      <SocialIcons href="https://www.upwork.com/freelancers/~01b54fdde87311fc61">
      <img src="/upwork.svg" height={30} width={30} />
      </SocialIcons>
      {/* <SocialIcons href="">
        <AiFillMail size="3rem" />
      </SocialIcons> */}
    </Div3>
  </Container>
);

export default Header;
