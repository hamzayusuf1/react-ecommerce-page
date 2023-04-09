import React, { useEffect, useState } from "react";

const Screen = () => {
  const [width, setWidth] = useState(window.innerWidth);

  const handleWindowSizeChange = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleWindowSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, [width]);

  return (
    <>
      <p>
        Width: <strong>{width}</strong>
      </p>
    </>
  );
};

export default Screen;
