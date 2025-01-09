import React from 'react';
import { Hero } from './Hero';
import { Features } from './Features';
import { EnergyHabitsCarousel } from './carousel/EnergyHabitsCarousel';

export function Home() {
  return (
    <>
      <Hero />
      <EnergyHabitsCarousel />
      <Features />
    </>
  );
}