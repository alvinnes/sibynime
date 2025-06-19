import { useCallback, useState } from "react";

const useLazyLoading = <T extends HTMLElement>(
  rootMargin = "0px",
): [(node: T | null) => void, boolean] => {
  const [isVisible, setIsVisible] = useState(false);
  const setRef = useCallback(
    (node: T | null) => {
      if (!node) return;
      const observer = new IntersectionObserver(([entry]) => {
        setIsVisible(entry.isIntersecting);
        console.log("Yes", entry.isIntersecting);
        {
          rootMargin;
        }
      });

      if (node) observer.observe(node);

      return () => {
        if (node) observer.unobserve(node);
        observer.disconnect();
      };
    },
    [rootMargin],
  );

  return [setRef, isVisible];
};

export default useLazyLoading;
