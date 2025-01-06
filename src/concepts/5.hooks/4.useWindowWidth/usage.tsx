import React from "react";
import useWindowWidth from "./index";

function ResponsiveComponent() {
  const width = useWindowWidth(); // Using the custom hook

  return (
    <div>
      <h1>Window Width: {width}px</h1>
      {width < 600 ? <p>Mobile view</p> : <p>Desktop view</p>}
    </div>
  );
}

export default ResponsiveComponent;
