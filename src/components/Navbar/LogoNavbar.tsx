import { Link } from "react-router";

const LogoNavbar = () => {
  return (
    <div className="h-15 w-30">
      <Link to={"/"}>
        <img
          src="/img/logo.png"
          alt="logo-sibynime"
          className="-mt-2 size-full object-cover"
        />
      </Link>
    </div>
  );
};

export default LogoNavbar;
