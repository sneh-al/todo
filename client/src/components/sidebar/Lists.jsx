import { useEffect, useRef, useState } from "react";
import {
  useCreateListMutation,
  useGetListsMutation,
} from "../../slices/listApiSlice";
import { useDispatch, useSelector } from "react-redux";
import { setLists } from "../../slices/listSlice";
import createSvg from "../../assets/create.svg";
import { toast } from "react-toastify";

const Lists = ({ isEdit }) => {
  const inputRef = useRef(null);
  const [getLists, { isLoading }] = useGetListsMutation();
  const [createList] = useCreateListMutation();
  const { userInfo } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const [show, setShow] = useState(isEdit || false);
  const getList = async () => {
    const userId = userInfo._id;
    try {
      const res = await getLists(userId).unwrap();

      dispatch(setLists(res));
    } catch (error) {
      toast.error(error?.data?.message || error?.error);
    }
  };

  const handleSubmission = async () => {
    const name = inputRef.current.value;

    const user = userInfo._id;

    const data = {
      name,
      user,
    };
    try {
      const res = await createList(data).unwrap();

      getList();
      toast.success(`${res.name}  Crearted Sccuessfully`);
      setShow(!show);
    } catch (error) {
      toast.error(error?.data?.message || error?.error);
    }
  };
  useEffect(() => {
    getList();
  }, []);
  return (
    <li className='h-fit w-full nav-item hover:bg-white hover:text-red-500 cursor-pointer mt-5'>
      {!show ? (
        <div className='flex py-5 px-3 ' onClick={() => setShow(!show)}>
          <label
            htmlFor='listInput'
            className='cursor-pointer hover:bg-white  hover:text-red-500 overflow-hidden  '>
            Create list
          </label>
        </div>
      ) : (
        <div className='flex relative'>
          <span className=''>
            <input
              ref={inputRef}
              className='bg-white-50  border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block l p-2.5 '
              type='text'
              name=''
              id='listInput'
            />
          </span>
          <svg
            onClick={handleSubmission}
            viewBox='0 0 24 24'
            className='h-5 w-5 m-auto right-0'
            xmlns='http://www.w3.org/2000/svg'
            fill='#F44336'>
            <g id='SVGRepo_bgCarrier' strokeWidth='0'></g>
            <g
              id='SVGRepo_tracerCarrier'
              strokeLinecap='round'
              strokeLinejoin='round'></g>
            <g id='SVGRepo_iconCarrier'>
              {" "}
              <rect x='0' fill='none' width='24' height='24'></rect>{" "}
              <g>
                {" "}
                <path d='M21 14v5c0 1.105-.895 2-2 2H5c-1.105 0-2-.895-2-2V5c0-1.105.895-2 2-2h5v2H5v14h14v-5h2z'></path>{" "}
                <path d='M21 7h-4V3h-2v4h-4v2h4v4h2V9h4'></path>{" "}
              </g>{" "}
            </g>
          </svg>
        </div>
      )}
    </li>
  );
};

export default Lists;
