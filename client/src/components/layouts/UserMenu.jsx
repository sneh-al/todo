import { useDispatch, useSelector } from "react-redux";
import { logOut } from "../../slices/authSlice";
import { Link } from "react-router-dom";
import useToggle from "../../hooks/useToggle";
import { toast } from "react-toastify";

function UserMenu() {
  const { userInfo } = useSelector((state) => state.auth);
  const [isDropDown, setIsDropDown] = useToggle(false);

  const dispatch = useDispatch();

  const handleLogout = async () => {
    try {
      dispatch(logOut());
    } catch (error) {
      toast.error(error?.data?.message || error?.error);
    }
  };

  return (
    <>
      <button
        className='w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 p-4 font-medium rounded-lg text-sm  text-center inline-flex items-center'
        type='button'
        onClick={setIsDropDown}>
        <span className=''> {userInfo.name}</span>
        {/* <span className='block  md:hidden'>
          <img
            className='w-20 h-10 rounded-full'
            src='https://i.pravatar.cc/300'
            alt='Rounded avatar'></img>
        </span> */}
        <svg
          className={` w-4 h-4 ml-2 hidden md:block  ${
            isDropDown ? "md:rotate-180" : "md:rotate-0"
          }  transition-transform ease-l  inear duration-300`}
          fill='none'
          stroke='currentColor'
          viewBox='0 0 24 24'
          xmlns='http://www.w3.org/2000/svg'>
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth='2'
            d='M19 9l-7 7-7-7'></path>
        </svg>
      </button>

      <div
        className={`${
          !isDropDown && "hidden"
        } p-7 absolute right-5 top-20 bg-orange-400 text-base z-5 list-none divide-y divide-gray-100 rounded shadow  `}
        id='dropdown'>
        <div className='px-4 py-3'>
          <span className='block font-bold  md:hidden'> {userInfo.name}</span>

          <span className='block text-sm font-medium text-gray-900 '>
            {userInfo.email}
          </span>
        </div>
        <ul className='py-1 flex flex-col '>
          <li className='p-2  hover:bg-orange-600 cursor-pointer hover:text-white '>
            <Link
              className='text-xs font-semibold   px-4  py-2  '
              to='/profile'>
              Profile
            </Link>
          </li>
          <li
            className='p-2   hover:bg-red-500 cursor-pointer hover:text-white '
            onClick={handleLogout}>
            <button className=' text-xs font-semibold  px-4  py-2 '>
              Logout
            </button>
          </li>
        </ul>
      </div>
    </>
  );
}

export default UserMenu;
