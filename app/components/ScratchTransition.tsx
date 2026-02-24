"use client";
import { useState, useEffect } from "react";

export default function ScratchTransition({ trigger }: { trigger: boolean }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (trigger) {
      setVisible(true);
      const timer = setTimeout(() => setVisible(false), 800); // Duration of claw swipe
      return () => clearTimeout(timer);
    }
  }, [trigger]);

  if (!visible) return null;

  return (
    <div className="fixed inset-0 z-[100] pointer-events-none flex items-center justify-center">
      {/* Three claw marks animating in */}
      <div className="relative w-full h-full bg-black/20">
        {[1, 2, 3].map((i) => (
          <div
            key={i}
            className={`absolute h-4 bg-white shadow-[0_0_15px_rgba(255,255,255,0.8)] w-[150%] -left-1/4 
            rotate-[-15deg] transition-all duration-500 ease-in-out
            ${i === 1 ? 'top-[20%]' : i === 2 ? 'top-[45%]' : 'top-[70%]'}
            animate-claw-swipe`}
            style={{ animationDelay: `${i * 0.1}s` }}
          />
        ))}
      </div>
    </div>
  );
}