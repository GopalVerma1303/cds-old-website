import { useEffect,useRef } from "react";

// component that follows the mouse
export default function CustomCursor  (){
    const cursorRef = useRef(null)
    useEffect(() => {
    if (cursorRef.current == null || cursorRef == null)
         return;
    document.addEventListener('mousemove', e => {
         if (cursorRef.current == null)
              return;
         cursorRef.current.setAttribute("style", "top: " + (e.pageY-45) + "px; left: " + (e.pageX-45) + "px;")
    });

    document.addEventListener('click', () => {
     

    if(cursorRef.current == null)
         return;
    cursorRef.current.classList.add("expand");
    setTimeout(() => {
         if (cursorRef.current == null)
              return;
         cursorRef.current.classList.remove("expand");
    }, 500)
    })
    }, [])
    return (
    <div className='cursor' id="cursor" ref={cursorRef}>
    </div>
    )
    }