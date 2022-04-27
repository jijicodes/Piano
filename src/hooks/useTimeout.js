import { useEffect } from "react";

export const useTimeout = ({ callback, timeout = 3000 }) => {
  useEffect(() => {
    const timer = setTimeout(callback, timeout);
    return () => clearTimeout(timer);
  }, []);
};
