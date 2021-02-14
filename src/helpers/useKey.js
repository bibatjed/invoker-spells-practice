import { useEffect, useRef } from "react";

function useKey(key = [], cb) {
    const callbackRef = useRef(cb);

    function handle(event) {
      //prevent helding down registers a multiple key
      if(event.repeat){
        return;
      }

      if (key.includes(event.code)) {
        callbackRef.current(event);
      }
    }
  
    useEffect(() => {
  
      document.addEventListener("keydown", handle);
      return () => document.removeEventListener("keydown", handle);
    }, []);
}

export default useKey;