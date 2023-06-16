import { useDispatch, useSelector } from "react-redux";
import { logOut } from "../slices/authSlice";
import useToggle from "../hooks/useToggle";
import Modal from "../components/layouts/Modal";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Home = () => {
  const dispatch = useDispatch();
  const [state, changeState] = useToggle();
  const { lists } = useSelector((state) => state.lists);
  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      dispatch(logOut());
    } catch (error) {
      toast.error(error?.data?.message || error?.error);
    }
  };

  const handleNavigate = (listId) => {
    navigate(`/list/${listId}`);
  };

  return (
    <div className='relative min-h-screen grid place-content-center py-9'>
      <div className='relative container ml-auto mr-auto flex flex-wrap items-start'>
        {lists.map((list) => (
          <div
            key={list._id}
            className='w-full md:w-1/2 lg:w-1/4 pl-5 p
            r-5 mb-5 lg:pl-2 lg:pr-2'>
            <div className='bg-white rounded-lg m-h-64 p-2 transform hover:translate-y-2 hover:shadow-xl transition duration-300'>
              <div className='rounded-lg p-4 bg-purple-700 flex flex-col'>
                <div>
                  <h5 className='text-white text-2xl font-bold leading-none'>
                    {list.name}
                  </h5>
                </div>
                <button
                  onClick={() => handleNavigate(list._id)}
                  className='rounded-full bg-purple-900 justify-center items-center text-white hover:bg-white hover:text-purple-900 hover:shadow-xl focus:outline-none w-20 h-10 flex ml-auto transition duration-300'>
                  view all
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* <button className='block p-6 pt-6 bg-red-100' onClick={handleLogout}>
        logout
      </button> */}
    </div>
  );
};

export default Home;
