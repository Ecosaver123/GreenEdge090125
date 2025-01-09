import React from 'react';
import { Hero } from '../components/Hero';
import { WhyGreenEdge } from '../components/WhyGreenEdge';
import { WhatWeDo } from '../components/WhatWeDo';
import { Testimonials } from '../components/Testimonials';
import { Footer } from '../components/Footer';

export function Home() {
  return (
    <>
      <Hero />
      <WhyGreenEdge />
      <WhatWeDo />
      <Testimonials />
      <Footer />
    </>
  );
}