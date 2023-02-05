import React from 'react';
import { Carousel } from '@mantine/carousel';

import './Events.scss';

export default function Events() {
  return (
    <main className='events'>
      <Carousel
        slideSize="70%"
        height={230}
        slideGap="md"
        withIndicators
        loop
      >
      <Carousel.Slide>1</Carousel.Slide>
      <Carousel.Slide>2</Carousel.Slide>
      <Carousel.Slide>3</Carousel.Slide>
      {/* ...other slides */}
    </Carousel>
    </main>
  )
}
