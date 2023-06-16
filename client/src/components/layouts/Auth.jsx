import { Link, Outlet, useNavigate } from "react-router-dom";
import authImage from "../../assets/auth.svg";
import logo from "../../assets/logo.svg";
import { useSelector } from "react-redux";
import { useEffect } from "react";

const Auth = ({ title }) => {
  const { userInfo } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (userInfo) {
      navigate("/home");
    }
  }, [navigate, userInfo]);

  return (
    <section className='bg-slate-900 '>
      <div className='flex flex-wrap min-h-screen '>
        <div className=' md:p-5   w-full lg:w-1/2  flex flex-col z-10 '>
          <Link className='p-0 grid place-content-center' to='/'>
            <img src={logo} alt='logo' width='300' />
          </Link>
          <h3 className='px-4 font-bold text-3xl text-sky-700  text-center'>
            {title}
          </h3>
          <div className='md:px-24 p-6'>
            <Outlet />
          </div>
        </div>
        <div className='block relative w-full lg:w-1/2 bg-green-600'>
          <div className='absolute bottom-0 inset-x-0 mx-auto mb-12 max-w-xl text-center'>
            <img className='lg:max-w-xl mx-auto' src={authImage} alt='' />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Auth;
