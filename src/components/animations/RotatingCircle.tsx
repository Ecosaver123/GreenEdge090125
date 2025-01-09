import React, { useEffect, useRef } from 'react';
import { AnimatedRefrigerator } from './AnimatedRefrigerator';

export function RotatingCircle() {
  const svgRef = useRef<SVGSVGElement>(null);
  const numLines = 36;
  const dotsPerLine = 10;
  const baseRadius = 400;

  const generateDots = () => {
    const dots: Array<{ x: number; y: number; opacity: number }> = [];
    
    for (let lineIdx = 0; lineIdx < numLines; lineIdx++) {
      const angle = (lineIdx * 2 * Math.PI) / numLines;
      
      for (let dotIdx = 0; dotIdx < dotsPerLine; dotIdx++) {
        const distanceFactor = Math.pow(dotIdx / dotsPerLine, 1.5);
        const radius = baseRadius * distanceFactor;
        
        const x = Math.cos(angle) * radius;
        const y = Math.sin(angle) * radius;
        
        const opacity = 1 - (dotIdx / dotsPerLine) * 0.8;
        
        dots.push({ x, y, opacity });
      }
    }
    
    return dots;
  };

  useEffect(() => {
    const svg = svgRef.current;
    if (!svg) return;

    let rotation = 0;
    let animationFrameId: number;

    const animate = () => {
      rotation = (rotation + 0.1) % 360;
      if (svg) {
        svg.style.transform = `perspective(1000px) rotateX(60deg) rotate(${rotation}deg)`;
      }
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  const dots = generateDots();

  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <svg
        ref={svgRef}
        viewBox="-500 -500 1000 1000"
        className="w-[1000px] h-[1000px]"
        style={{
          transformOrigin: 'center',
          filter: 'blur(0.5px)',
        }}
      >
        {/* Nucleus Circle */}
        <circle
          cx="0"
          cy="0"
          r="50"
          fill="#4BF0A5"
          className="animate-nucleus"
          style={{
            filter: 'blur(8px)',
          }}
        />
        
        {dots.map((dot, index) => (
          <circle
            key={index}
            cx={dot.x}
            cy={dot.y}
            r={3.5}
            fill="#4BF0A5"
            opacity={dot.opacity}
          />
        ))}
      </svg>
      <AnimatedRefrigerator />
    </div>
  );
}