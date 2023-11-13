import { useRef } from 'react';
import Autoplay from 'embla-carousel-autoplay';
import { Carousel } from '@mantine/carousel';
import { Image } from '@mantine/core';

const images = ["/images/about_c_0.png", "/images/about_c_1.png", "/images/about_c_2.png", "/images/about_c_3.png", "/images/about_c_4.png", "/images/about_c_5.png"];

export default function Hero() {

  const slides = images.map((url) => (
    <Carousel.Slide key={url}>
      <Image src={url} />
    </Carousel.Slide>
  ));

  const autoplay = useRef(Autoplay({ delay: 2000 }));
  return (
    <Carousel
      mx="auto"
      withIndicators
      slideSize="100%"
      height={500}
      plugins={[autoplay.current]}
      onMouseEnter={autoplay.current.stop}
      onMouseLeave={autoplay.current.reset}
      loop
    >
      {slides}
    </Carousel>
  );
}