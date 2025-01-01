import { useState, useEffect } from "react";

const useResponsive = () => {
  const [screenType, setScreenType] = useState("desktop"); // Default to desktop

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 768) {
        setScreenType("mobile"); // For screens smaller than 768px
      } else if (width >= 768 && width < 1024) {
        setScreenType("tablet"); // For screens between 768px and 1024px
      } else {
        setScreenType("desktop"); // For screens larger than 1024px
      }
    };

    handleResize(); // Check on initial load
    window.addEventListener("resize", handleResize); // Listen for window resize

    return () => {
      window.removeEventListener("resize", handleResize); // Cleanup on component unmount
    };
  }, []);

  return screenType;
};

export default useResponsive;
