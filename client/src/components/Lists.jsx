import { useDispatch, useSelector } from "react-redux";
import { logOut } from "../slices/authSlice";
import useToggle from "../hooks/useToggle";
import Modal from "../components/layouts/Modal";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import {
  useDeleteListMutation,
  useUpdateListMutation,
} from "../slices/listApiSlice";
import { deletelist, renamelist } from "../slices/listSlice";
import { useRef } from "react";

const Lists = ({ list }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [state, changeState] = useToggle();
  const [deleteList] = useDeleteListMutation();
  const handleNavigate = (listId) => {
    navigate(`/list/${listId}`);
  };

  const handleDelete = async (id) => {
    try {
      const res = await deleteList(id);
      dispatch(deletelist(id));
      toast.success(res.data.message);
    } catch (error) {
      toast.error(error?.data?.message || error?.error);
    }
  };

  const handleEdit = (id) => {
    changeState();
  };
  return (
    <div
      key={list._id}
      className='w-full md:w-1/2 lg:w-1/4 pl-5 p
          r-5 mb-5 lg:pl-2 lg:pr-2'>
      <div className='bg-white rounded-lg m-h-64 p-2 transform hover:translate-y-2 hover:shadow-xl transition duration-300'>
        <div className='rounded-lg p-4 bg-purple-700 flex flex-col'>
          <div>
            {state ? (
              <EditName
                oldName={list.name}
                id={list._id}
                handleEdit={handleEdit}
              />
            ) : (
              <h5 className='text-white text-2xl font-bold leading-none'>
                {list.name}
              </h5>
            )}
          </div>
          <div className='flex py-5'>
            <button
              onClick={() => handleEdit(list._id)}
              className='rounded-full bg-orange-400 justify-center items-center text-white hover:bg-white hover:text-orange-900 hover:shadow-xl focus:outline-none w-20 h-10 flex ml-auto transition duration-300'>
              Rename
            </button>
            <button
              onClick={() => handleDelete(list._id)}
              className='rounded-full bg-red-900 justify-center items-center text-white hover:bg-white hover:text-red-900 hover:shadow-xl focus:outline-none w-20 h-10 flex ml-auto transition duration-300'>
              Delete
            </button>
            <button
              onClick={() => handleNavigate(list._id)}
              className='rounded-full bg-purple-900 justify-center items-center text-white hover:bg-white hover:text-purple-900 hover:shadow-xl focus:outline-none w-20 h-10 flex ml-auto transition duration-300'>
              View
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Lists;

const EditName = ({ handleEdit, id, oldName }) => {
  const inputRef = useRef(null);
  const [updateList] = useUpdateListMutation();
  const dispatch = useDispatch();
  const handleSubmission = async () => {
    const name = inputRef.current.value;
    const data = {
      name,
      listId: id,
    };
    try {
      const res = await updateList(data).unwrap();

      dispatch(renamelist(data));
      handleEdit();
    } catch (error) {
      toast.error(error?.data?.message || error?.error);
    }
  };

  return (
    <div className='flex  items-center bg-red-100'>
      <input
        ref={inputRef}
        className='bg-white-50  border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full block l p-2 '
        type='text'
        defaultValue={oldName}
        name=''
        id='listInput'
      />
      <label
        onClick={handleSubmission}
        htmlFor='listInput '
        className='ml-auto bg-green-600 p-2 hover:text-white'>
        Save
      </label>
    </div>
  );
};
