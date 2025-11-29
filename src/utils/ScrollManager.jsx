import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

export function ScrollManager(){
  const { pathname } = useLocation();
  const positions = useRef({});
  const prevPath = useRef(pathname);

  useEffect(() => {
    const root = document.getElementById("root");
    if (!root) return;
    positions.current[prevPath.current] = root.scrollTop;
    const scrollY = positions.current[pathname] || 0;
    root.scrollTo({top: scrollY, left: 0, behavior: "instant"});
    prevPath.current = pathname;
  }, [pathname])

  return null;  
}

