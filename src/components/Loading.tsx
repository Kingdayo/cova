import { useEffect, useState } from "react";

export const Loading = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-background transition-opacity duration-500 animate-fade-out">
      <div className="relative">
        {/* Outer rotating ring */}
        <div className="absolute inset-0 animate-spin">
          <div className="h-24 w-24 rounded-full border-4 border-transparent border-t-primary border-r-accent glow-effect"></div>
        </div>
        
        {/* Inner pulsing circle */}
        <div className="flex h-24 w-24 items-center justify-center">
          <div className="h-16 w-16 rounded-full gradient-primary animate-pulse opacity-50"></div>
        </div>

        {/* Center icon */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="h-8 w-8 rounded-full bg-primary animate-float"></div>
        </div>
      </div>

      {/* Loading text */}
      <p className="absolute mt-40 text-sm font-medium text-muted-foreground animate-pulse">
        Loading...
      </p>
    </div>
  );
};
