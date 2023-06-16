import { useSelector } from "react-redux";

import Lists from "./Lists";
import FavList from "./FavList";
import FavSidebar from "./FavSidebar";
import AllList from "./AllList";
import UserMenu from "../layouts/USerMenu";
import Footer from "../Footer";

const Sidebar = () => {
  const { isSidebar } = useSelector((state) => state.ui);

  return (
    <nav
      className={`absolute flex flex-col z-10 min-h-screen w-fit  bg-orange-400 top-0 p-6   transition-display ease-in duration-500 overflow-y-auto ${
        !isSidebar && "hidden"
      }`}>
      <ul className='md:hidden block w-full '>
        <UserMenu />
      </ul>
      <ul className='flex flex-col    '>
        <Lists />
        <>
          {links.map((link) => (
            <FavSidebar link={link} key={link.id} />
          ))}
        </>
      </ul>
      <div className='mt-auto'>
        <Footer />
      </div>
    </nav>
  );
};

export default Sidebar;

const HeartSvg = ({ className }) => (
  <svg
    className={className}
    version='1.1'
    id='Layer_1'
    xmlns='http://www.w3.org/2000/svg'
    xmlnsXlink='http://www.w3.org/1999/xlink'
    width='800px'
    height='800px'
    viewBox='0 0 128 128'
    enableBackground='new 0 0 128 128'
    xmlSpace='preserve'>
    <path
      fill='#F44336'
      d='M92,8c15.324,0,27.813,12.375,27.996,27.656c-0.055,0.422-0.098,0.844-0.109,1.281l-0.051,3.172
	c-2.652,24.742-37.203,60.523-55.84,77.273c-18.5-16.617-52.695-52-55.773-76.742l-0.109-3.703C8.102,36.523,8.063,36.109,8,35.656
	C8.188,20.375,20.676,8,36,8c8.422,0,16.352,3.875,21.754,10.625L64,26.43l6.246-7.805C75.648,11.875,83.578,8,92,8 M92,0
	C80.621,0,70.598,5.383,64,13.625C57.402,5.383,47.379,0,36,0C16.117,0,0,16.117,0,36c0,0.398,0.105,0.773,0.117,1.172H0
	C0,74.078,64,128,64,128s64-53.922,64-90.828h-0.117C127.895,36.773,128,36.398,128,36C128,16.117,111.883,0,92,0L92,0z'
    />
  </svg>
);

const AllSvg = ({ className }) => (
  <svg
    className={className}
    width='800px'
    height='800px'
    viewBox='0 0 48 48'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'>
    <rect
      x='4'
      y='6'
      width='40'
      height='36'
      rx='3'
      stroke='#F44336'
      strokeWidth='4'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M4 14H44'
      stroke='#F44336'
      strokeWidth='4'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M20 24H36'
      stroke='#F44336'
      strokeWidth='4'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M20 32H36'
      stroke='#F44336'
      strokeWidth='4'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M12 24H14'
      stroke=''
      strokeWidth='4'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M12 32H14'
      stroke='#F44336'
      strokeWidth='4'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);
const links = [
  {
    id: 1,
    title: "Favorite",
    to: "/favorites",
    Icon: HeartSvg,
    Component: FavList,
  },
  {
    id: 2,
    title: "All lists",
    to: "/favorites",
    Icon: AllSvg,
    Component: AllList,
  },
];
