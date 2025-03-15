import React, { useState, useRef, useEffect } from 'react'

export const CardSpotlightEffect = ({children, customCSS, intensity, timeout, rgb}) => {
  const hasCustomCSS = customCSS !== '' && customCSS != null;
  if (intensity == null || intensity == undefined || intensity == '') {
    intensity = 0.04
  }
  if (timeout == null) {
    timeout = 0
  }
  if (rgb == null || rgb == undefined || rgb == '') {
    rgb = '255,255,255'
  }
  const divRef = useRef(null);
  const [isFocused, setIsFocused] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e) => {
    if (!divRef.current || isFocused) return;

    const div = divRef.current;
    const rect = div.getBoundingClientRect();

    setTimeout(() => {
      setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    }, [timeout])

  };

  

  const handleFocus = () => {
    setIsFocused(true);
    setOpacity(1);
  };

  const handleBlur = () => {
    setIsFocused(false);
    setOpacity(0);
  };

  const handleMouseEnter = () => {
    setOpacity(1);
  };

  const handleMouseLeave = () => {
    setOpacity(0);
  };

  return (
  
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onFocus={handleFocus}
      onBlur={handleBlur}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={"justify-self-center relative overflow-hidden " + (hasCustomCSS && customCSS)}
    >
      <div
        className="w-full pointer-events-none absolute -inset-px opacity-0 transition duration-300"
        style={{
          opacity,
          background: `radial-gradient(18000px circle at ${position.x}px ${position.y}px, rgba(${rgb},${intensity}), transparent 5%)`,
        }}
      />
      {children}
    </div>
  );
};