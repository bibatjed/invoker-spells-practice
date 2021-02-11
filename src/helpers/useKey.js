import { useEffect, useRef } from "react";

function useKey(key = [], cb) {
    const callbackRef = useRef(cb);
  
    useEffect(() => {
      function handle(event) {
        if (key.includes(event.code)) {
          callbackRef.current(event);
        }
      }
  
      document.addEventListener("keydown", handle);
      return () => document.removeEventListener("keydown", handle);
    }, [key]);
}

export default useKey;