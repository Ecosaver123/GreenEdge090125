import React, { useState, useEffect } from 'react';
import { Fan, Lightbulb, Power, Wind } from 'lucide-react';
import { CarouselCard } from './CarouselCard';

const CARDS = [
  {
    id: 1,
    title: "Optimize AC in Mumbai's Humid Climate",
    description: "Use ceiling fans to circulate air and set your AC at 24°C or higher—this helps manage humidity without skyrocketing your electricity bill.",
    icon: <Fan className="w-8 h-8" />,
  },
  {
    id: 2,
    title: "Switch to LED Bulbs",
    description: "Energy-efficient LEDs reduce lighting costs by up to 75%. Many local shops in Mumbai offer rebates and bundle deals.",
    icon: <Lightbulb className="w-8 h-8" />,
  },
  {
    id: 3,
    title: "Unplug Standby Devices",
    description: "Chargers, set-top boxes, and other gadgets left on standby still use power. In bustling Mumbai households, every device counts.",
    icon: <Power className="w-8 h-8" />,
  },
  {
    id: 4,
    title: "Use Natural Ventilation During Monsoon AND Winters",
    description: "Open windows to let in the cooler monsoon and winter breeze instead of constantly relying on AC.",
    icon: <Wind className="w-8 h-8" />,
  },
];

export function EnergyHabitsCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState<'left' | 'right'>('right');

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection('left');
      setActiveIndex((current) => (current + 1) % CARDS.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="h-[25vh] bg-[#f8f3e7] flex items-center">
      <div className="max-w-[1400px] w-full mx-auto px-6">
        <div className="relative h-20">
          {CARDS.map((card, index) => (
            <CarouselCard
              key={card.id}
              title={card.title}
              description={card.description}
              icon={card.icon}
              isActive={index === activeIndex}
              direction={direction}
            />
          ))}
        </div>
      </div>
    </section>
  );
}