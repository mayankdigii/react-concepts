import React, { useState, useEffect } from "react";

function WindowResize() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    // Function to update window width
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    // Add event listener on mount
    window.addEventListener("resize", handleResize);

    // Cleanup the event listener on unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []); // Empty dependency array means the effect runs once on mount

  return (
    <div>
      <h1>Window Width: {windowWidth}</h1>
    </div>
  );
}

export default WindowResize;
