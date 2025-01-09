import { useState, useEffect } from 'react';

export function useScrollProgress(elementRef: React.RefObject<HTMLElement>) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const handleScroll = () => {
      const rect = element.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Start transition when element enters viewport
      const start = windowHeight;
      // End transition when element leaves viewport
      const end = -rect.height;
      
      // Calculate progress based on element's position relative to viewport
      const progress = Math.max(0, Math.min(1, 
        (start - rect.top) / (start - end)
      ));
      
      setProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial calculation

    return () => window.removeEventListener('scroll', handleScroll);
  }, [elementRef]);

  return progress;
}