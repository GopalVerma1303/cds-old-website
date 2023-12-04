import React, { useEffect, useRef } from "react";
import useMousePosition from "@/hooks/useMousePosition";

const CustomCursor = () => {
  const { x, y } = useMousePosition();
  const cursorRef = useRef(null);

  const handleDocumentClick = () => {
    if (cursorRef.current == null) return;
    cursorRef.current.classList.add("expand");
    setTimeout(() => {
      if (cursorRef.current == null) return;
      cursorRef.current.classList.remove("expand");
    }, 500);
  };

  useEffect(() => {
    document.addEventListener("click", handleDocumentClick);

    return () => {
      document.removeEventListener("click", handleDocumentClick);
    };
  }, []);

  return (
    <>
      <div
        ref={cursorRef}
        style={{ left: `${x - 45}px`, top: `${y - 45}px` }}
        className={"cursor "}
      ></div>
    </>
  );
};

export default CustomCursor;
