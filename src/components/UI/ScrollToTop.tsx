import { useEffect } from "react";
import { useLocation } from "react-router";
import useNavbar from "../../stores/useNavbar";

const ScrollToTop = () => {
  const { pathname } = useLocation();
  const setIsClicked = useNavbar((state) => state.setIsClicked);

  useEffect(() => {
    setIsClicked(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname, setIsClicked]);
  return null;
};

export default ScrollToTop;
