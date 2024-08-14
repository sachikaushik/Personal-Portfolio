import React from 'react';

import { Section, SectionText, SectionTitle, Link } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <h1 className='text-[#000] font-sans text-[50px] font-[700]'>
          Hey there,
          </h1>
       
        <SectionText >
I'm Sachi Kaushik, a MERN and MEAN stack developer. I specialize in creating dynamic and responsive web applications using MongoDB, Express.js, Angular, React, Vue.js, jQuery, Node.js., PHP, NestJS,

I'm passionate about contributing to open-source projects and engaging with the developer community. Let's connect and build something amazing together!

        </SectionText>
        <Button onClick={(e) => {
          e.preventDefault();
          window.location.href = '/files/resume.pdf';
        }}>My Resume</Button>
      </LeftSection>
    </Section>
  </>
);

export default Hero;
