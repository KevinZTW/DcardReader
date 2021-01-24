import { useEffect, useState, useRef } from "react";

export function useScroll(callback) {
  useEffect(() => {
    let timeoutId;
    const threshold = 300;
    function checkBottom() {
      const winScroll =
        document.body.scrollTop || document.documentElement.scrollTop;
      const height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      if (winScroll > height - 20) {
        return true;
      } else return false;
    }
    function scrollHandler() {
      const reachBottom = checkBottom();

      if (reachBottom) {
        clearTimeout(timeoutId);
        setTimeout(() => {
          callback();
        }, threshold);
      }
    }
    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  });
}
