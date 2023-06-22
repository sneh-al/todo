import { useDispatch, useSelector } from "react-redux";
import { Link, Navigate, Outlet } from "react-router-dom";
import "./privateroutes.css";
import logo from "../../assets/logo.svg";
import SidebarMenu from "./SidebarMenu";
import UserMenu from "./USerMenu";
import Sidebar from "../sidebar/Sidebar";

const PrivateRoutes = () => {
  const { userInfo } = useSelector((state) => state.auth);

  return userInfo ? (
    <main className=' relative bg-red-100 '>
      <nav className=' relative  shadow-md   place-items-center flex transition ease-linear duration-700 w-screen   z-3 bg-orange-400'>
        <SidebarMenu />
        <Link className='border-l' to='/home'>
          <img src={logo} alt='logo ' style={{ height: "5rem" }} />
        </Link>
        <div className='hidden md:block ml-auto mr-5 z-10 '>
          <UserMenu />
        </div>
      </nav>

      <div className=' relative     '>
        <Sidebar />
        <div className='min-h-screen'>
          <Outlet />
        </div>
      </div>
    </main>
  ) : (
    <Navigate to='/login' replace />
  );
};

export default PrivateRoutes;
