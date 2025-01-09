import React from 'react';
import { useProfile } from '../store/ProfileContext';

interface AnimatedLetterProps {
  letter: string;
  index: number;
  isOn: boolean;
}

function AnimatedLetter({ letter, index, isOn }: AnimatedLetterProps) {
  return (
    <span
      className="inline-block gold-stroke"
      style={{
        animation: isOn ? `coinFlip 3s ease-out ${index * 0.3}s` : 'none',
        transformStyle: 'preserve-3d',
      }}
    >
      {letter}
    </span>
  );
}

export function AnimatedGoldText() {
  const letters = 'GOLD'.split('');
  const { isSwitchOn } = useProfile();
  
  return (
    <span className="inline-flex">
      {letters.map((letter, index) => (
        <AnimatedLetter key={index} letter={letter} index={index} isOn={isSwitchOn} />
      ))}
    </span>
  );
}