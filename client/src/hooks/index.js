import { useEffect, useState, useRef } from "react";
import { endPoint } from "../config.js";

//custom hook to handle scroll event
export function useScrollToBottom(callback) {
  let inThrottle = useRef(false);
  useEffect(() => {
    // Interval between two callback event
    const threshold = 500;
    //function to check wether close to the bottom
    function checkBottom() {
      const winScroll = document.documentElement.scrollTop;
      const totalScroll =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      if (winScroll > totalScroll - 100) {
        return true;
      } else return false;
    }
    //function executed when win scroll which trigger the callback
    function scrollHandler() {
      const reachBottom = checkBottom();
      if (reachBottom && !inThrottle.current) {
        inThrottle.current = true;
        callback();
        setTimeout(() => {
          inThrottle.current = false;
        }, threshold);
      }
    }
    //scroll event register
    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  });
}

//custom hook to fetch data
export function useFetchData(url) {
  const corsAPI = endPoint + "/v1/cors";
  const [isLoading, setIsLoading] = useState(false);
  const [dataArray, setDataArray] = useState([]);
  async function fetchData(url) {
    setIsLoading(true);
    const response = await fetch(corsAPI + url);
    const data = await response.json();
    setIsLoading(false);
    setDataArray([...dataArray, ...data]);
  }

  useEffect(() => {
    fetchData(url);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [url]);

  return [dataArray, isLoading];
}
