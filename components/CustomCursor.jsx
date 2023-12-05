import React, { useEffect, useRef, useState } from "react";
import useMousePosition from "@/hooks/useMousePosition";

const CustomCursor = () => {
  const { x, y } = useMousePosition();
  const cursorRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  const handleDocumentClick = () => {
    if (cursorRef.current == null) return;
    cursorRef.current.classList.add("expand");
    setTimeout(() => {
      if (cursorRef.current == null) return;
      cursorRef.current.classList.remove("expand");
    }, 500);
  };

  useEffect(() => {
    const handleFirstMove = () => {
      setIsVisible(true);
      document.removeEventListener("mousemove", handleFirstMove);
    };

    document.addEventListener("mousemove", handleFirstMove);
    document.addEventListener("click", handleDocumentClick);

    return () => {
      document.removeEventListener("mousemove", handleFirstMove);
      document.removeEventListener("click", handleDocumentClick);
    };
  }, []);

  return (
    <>
      {isVisible && (
        <div
          ref={cursorRef}
          style={{ left: `${x - 45}px`, top: `${y - 45}px` }}
          className={"cursor hidden sm:inline-flex z-50"}
        ></div>
      )}
    </>
  );
};

export default CustomCursor;
