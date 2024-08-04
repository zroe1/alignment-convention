import React, { useEffect, useState, useCallback, useRef, useLayoutEffect, useMemo } from "react";

const HomeBanner = () => {
  const [styles, setStyles] = useState("");
  const [numberOfRectangles, setNumberOfRectangles] = useState(0);
  const [resetKey, setResetKey] = useState(0);
  const initializedRef = useRef(false);
  const lastWidthRef = useRef(0);

  const calculateRectangles = useCallback(() => {
    const screenWidth = window.innerWidth;
    const baseRectangles = 180; // Number of rectangles at 1920px width
    const calculatedRectangles = Math.floor((screenWidth / 1920) * baseRectangles);
    return Math.max(calculatedRectangles, 0);
  }, []);

  const debouncedResize = useMemo(
    () =>
      debounce(() => {
        const currentWidth = window.innerWidth;
        if (Math.abs(currentWidth - lastWidthRef.current) > 1) {
          setNumberOfRectangles(calculateRectangles());
          setResetKey((prev) => prev + 1);
          lastWidthRef.current = currentWidth;
        }
      }, 250),
    [calculateRectangles]
  );

  useEffect(() => {
    window.addEventListener("resize", debouncedResize);
    return () => {
      window.removeEventListener("resize", debouncedResize);
    };
  }, [debouncedResize]);

  useLayoutEffect(() => {
    if (!initializedRef.current) {
      setNumberOfRectangles(calculateRectangles());
      lastWidthRef.current = window.innerWidth;
      initializedRef.current = true;
    }
  }, [calculateRectangles]);

  useEffect(() => {
    const css = `
      @import url('https://fonts.googleapis.com/css2?family=Dela+Gothic+One&display=swap');
      
      .container {
        position: relative;
        height: 280px;
        width: 140vw;
        margin-left: -20vw;
        overflow: hidden;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: black;
      }
      .rectangle {
        position: absolute;
        top: 0;
        left: 0;
        width: 1px;
        height: calc(100% + 200px);
        background-color:#626f85;
        transform-origin: center;
        opacity: 0;
      }
      .banner-text {
        width: 40%;
        position: absolute;
        color: white;
        font-size: 5vw;
        font-weight: bold;
        text-align: center;
        z-index: 10;
        font-family: 'Dela Gothic One', sans-serif;
        font-weight: 700;
        position: relative;
        top: -20px;
      }
      @keyframes appear {
        from { opacity: 0; transform: translateY(-100%) rotate(15deg); }
        to { opacity: 1; transform: translateY(-100px) rotate(15deg); }
      }
      @keyframes rotate {
        0%, 100% { transform: translateY(-100px) rotate(15deg); }
        50% { transform: translateY(-100px) rotate(-15deg); }
      }

      @media (max-width: 1000px) {
        .banner-text {
          font-size: 7vw;
          width: 60%;
        }
      }
      @media (max-width: 668px) {
        .banner-text {
          font-size: 8vw;
          width: 70%;
      }
      .container {
        height: 200px;
      }
    }
    `;

    setStyles(css);
  }, []);

  return (
    <>
      <style>{styles}</style>
      <div key={resetKey} className="container">
        {[...Array(numberOfRectangles)].map((_, index) => (
          <div
            key={index}
            className="rectangle"
            style={{
              left: `${(index / numberOfRectangles) * 100}%`,
              animation: `
                appear 0.5s ease-out forwards ${(index / numberOfRectangles) * 1.5}s,
                rotate 3s ease-in-out infinite alternate ${
                  (index / numberOfRectangles) * 1.5 + 0.5
                }s
              `,
            }}
          />
        ))}
        <div className="banner-text">Welcome to AlignCon Chicago</div>
      </div>
    </>
  );
};

// Debounce function
const debounce = (func, wait) => {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
};

export default HomeBanner;
