import { useEffect, useState } from "react";
import Logo from "../../assets/Logo";
import NavLinks from "./NavLinks";

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);
  const [prevScrollPosition, setPrevScrollPosition] = useState(0);
  const [visable, setVisable] = useState(true);

  const handleScroll = () => {
    const currentScrollPosition = window.scrollY;
    if (currentScrollPosition > prevScrollPosition) {
      setVisable(false);
    } else {
      setVisable(true);
    }
    setPrevScrollPosition(currentScrollPosition);
  };

  const handleMobileMenu = () => {
    setIsActive(!isActive);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  return (
    <nav
      className={`transition ease-linear duration-700 w-screen fixed top-0 z-50 bg-orange-400   ${
        visable ? "" : "opacity-0 invisible"
      }`}>
      <div className='container relative max-w-screen-xl  md:flex'>
        <div className='w-full flex'>
          <a className=' ' href='/'>
            <Logo />
          </a>
          <div className='md:hidden flex ml-auto'>
            <button
              className='navbar-burger flex items-center text-blue-600 p-3 '
              onClick={handleMobileMenu}>
              <svg
                className='block h-4 w-4 fill-current'
                viewBox='0 0 20 20'
                xmlns='http://www.w3.org/2000/svg'>
                <title>Mobile menu</title>
                <path d='M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z'></path>
              </svg>
            </button>
          </div>
        </div>

        <div
          className={`  md:flex md:ml-auto   md:items-center md:w-auto   md:flex-row md:static  w-full  bg-orange-400   ${
            !isActive && "hidden"
          }`}>
          <NavLinks />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
