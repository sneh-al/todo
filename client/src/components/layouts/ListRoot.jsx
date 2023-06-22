import { useSelector } from "react-redux";
import { Link, Outlet, useParams } from "react-router-dom";

const ListRoot = () => {
  const { id } = useParams();
  const { lists } = useSelector((state) => state.lists);
  const item = lists.find((list) => list._id === id);
  return (
    <div className=' w-full'>
      <Breadcumbs item={item} />
      <div className='p-6'>
        <Outlet />
      </div>
    </div>
  );
};

export default ListRoot;
const Breadcumbs = ({ item }) => (
  <header>
    <nav className='flex bg-orange-500' aria-label='Breadcrumb'>
      <ol className='inline-flex items-center space-x-1 md:space-x-3 p-2'>
        <li className='inline-flex items-center'>
          <Link
            to='/home'
            className='inline-flex items-center text-sm font-medium text-purple-900 hover:text-blue-900  '>
            <svg
              aria-hidden='true'
              className='w-4 h-4 mr-2'
              fill='currentColor'
              viewBox='0 0 20 20'
              xmlns='http://www.w3.org/2000/svg'>
              <path d='M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z'></path>
            </svg>
            Home
          </Link>
        </li>
        <li>
          <div className='flex items-center'>
            <svg
              aria-hidden='true'
              className='w-6 h-6 text-purple-900'
              fill='currentColor'
              viewBox='0 0 20 20'
              xmlns='http://www.w3.org/2000/svg'>
              <path
                fillRule='evenodd'
                d='M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z'
                clipRule='evenodd'></path>
            </svg>
            <Link className='inline-flex items-center text-sm font-medium text-purple-900 hover:text-blue-900 '>
              {item?.name}
            </Link>
          </div>
        </li>
      </ol>
    </nav>
  </header>
);
