const Navbar = () => {
  return (
    <nav className="fixed top-6 left-1/2 flex w-11/12 -translate-x-1/2 items-center justify-between rounded-md bg-slate-800 px-[4%] py-2 shadow-md">
      <div className="h-15 w-30">
        <img
          src="/img/logo.png"
          alt="logo-sibynime"
          className="-mt-2 size-full object-cover"
        />
      </div>
    </nav>
  );
};

export default Navbar;
