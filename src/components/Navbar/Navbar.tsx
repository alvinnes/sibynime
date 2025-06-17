import { Link } from "react-router";
import navbarDatas, { type NavbarDatas } from "../../assets/data/navbarDatas";
import useNavbar from "../../stores/useNavbar";
import { ListIcon, UserIcon, XIcon } from "@phosphor-icons/react";

const Navbar = () => {
  const isClicked = useNavbar((state) => state.isClicked);
  const setIsClicked = useNavbar((state) => state.setIsClicked);

  return (
    <nav className="fixed top-4 left-1/2 z-999 flex w-11/12 -translate-x-1/2 items-center justify-between rounded-md bg-slate-800 px-[4%] py-2 shadow-md">
      <div className="h-15 w-30">
        <Link to={"/"}>
          <img
            src="/img/logo.png"
            alt="logo-sibynime"
            className="-mt-2 size-full object-cover"
          />
        </Link>
      </div>
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
      <div className="flex items-center gap-4 text-white">
        <span
          onClick={() => setIsClicked(!isClicked)}
          className="cursor-pointer"
        >
          {isClicked ? <XIcon size={25} /> : <ListIcon size={25} />}
        </span>
        <span>
          <UserIcon size={25} />
        </span>
      </div>
    </nav>
  );
};

export default Navbar;
