import { Link } from "react-router";
import navbarDatas, { type NavbarDatas } from "../../assets/data/navbarDatas";
import useNavbar from "../../stores/useNavbar";
import SearchInput from "./SearchInput";
import FeaturesNavbar from "./FeaturesNavbar";
import LogoNavbar from "./LogoNavbar";

const Navbar = () => {
  const isClicked = useNavbar((state) => state.isClicked);

  return (
    <nav className="fixed top-4 left-1/2 z-999 flex w-11/12 -translate-x-1/2 items-center justify-between rounded-md bg-slate-800 px-[4%] py-2 shadow-md">
      <LogoNavbar />
      <ul
        className={`${isClicked ? "visible top-19 opacity-100" : "invisible top-10 opacity-0"} absolute left-1/2 w-full -translate-x-1/2 bg-slate-800 transition-all duration-400`}
      >
        {navbarDatas.map((item: NavbarDatas) => (
          <li
            key={item.id}
            className="px-8 py-4 text-slate-200 transition-all duration-300 hover:bg-indigo-500"
          >
            <Link to={item.link} className="flex items-center gap-6">
              {item.icon} {item.text}
            </Link>
          </li>
        ))}
      </ul>
      <SearchInput />
      <FeaturesNavbar />
    </nav>
  );
};

export default Navbar;
