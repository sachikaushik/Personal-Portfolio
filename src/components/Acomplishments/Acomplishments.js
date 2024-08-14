import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';

const data = [
  { number: 30, text: 'Open Source Projects' },
  { number: 50, text: 'Shell Scripts', },
  // { number: 250000, text: 'Downloads', },
  // { number: 200, text: 'Github Stars', }
];

const Acomplishments = () => (
  <Section>
    <h1 className='text-[50px] font-[600]'>Personal Achievements</h1>
    <Boxes>
      {data.map((card, index) => (
        <Box key={index}>
          <BoxNum>{`${card.number.toLocaleString('en-IN')}+`}</BoxNum>
          <BoxText>{card.text}</BoxText>
        </Box>
      ))}
    </Boxes>
    <SectionDivider />
  </Section>
);

export default Acomplishments;
