import React from 'react';

interface CarouselCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  isActive: boolean;
  direction: 'left' | 'right';
}

export function CarouselCard({ title, description, icon, isActive, direction }: CarouselCardProps) {
  const baseClasses = "absolute inset-0 flex items-center justify-between px-8 py-4 bg-[#2F8F83] rounded-xl shadow-lg transition-all duration-[2000ms] ease-in-out";
  const activeClasses = isActive 
    ? "opacity-100 translate-x-0" 
    : "opacity-0";
  const directionClasses = direction === 'left' 
    ? (isActive ? 'translate-x-0' : '-translate-x-full') 
    : (isActive ? 'translate-x-0' : 'translate-x-full');

  return (
    <div 
      className={`${baseClasses} ${activeClasses} ${directionClasses}`}
      style={{ transformOrigin: 'center' }}
    >
      <div className="flex items-center gap-8">
        <div className="text-emerald-600 flex-shrink-0">{icon}</div>
        <div className="flex flex-col">
          <h3 className="text-xl font-semibold text-[#f7f3e6]">{title}</h3>
          <p className="text-[#f7f3e6]">{description}</p>
        </div>
      </div>
    </div>
  );
}