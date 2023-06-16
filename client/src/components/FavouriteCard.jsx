import { useState } from "react";
import { useSelector } from "react-redux";
import Modal from "./layouts/Modal";
import Select from "react-select";
import { useSetFavListMutation } from "../slices/userApiSlice";
import { useDispatch } from "react-redux";
import { setFavorites } from "../slices/authSlice";
import { toast } from "react-toastify";
const FavouriteCard = () => {
  const dispatch = useDispatch();
  const { userInfo } = useSelector((state) => state.auth);
  const { lists } = useSelector((state) => state.lists);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [fav, setFav] = useState(false);
  const [setFavList] = useSetFavListMutation();
  const favorites = userInfo?.favourite;
  const options = lists.map((list) => {
    return {
      label: list.name,
      value: list._id,
    };
  });

  const [preVal, setPreVal] = useState([]);
  const handleClose = () => {
    setFav(!fav);
  };

  const handleEdit = () => {
    const options = favorites.map((list) => {
      return {
        label: list.title,
        value: list._id,
      };
    });
    setPreVal(options);
    handleClose();
  };

  const handleSelectChange = (options) => {
    setSelectedOptions(options);
  };

  const isOptionDisabled = (option) => {
    return selectedOptions.length >= 4 && !selectedOptions.includes(option);
  };

  const handleSubmit = async () => {
    try {
      const favs = selectedOptions.map((list) => {
        return {
          title: list.label,
          id: list.value,
        };
      });

      const data = {
        user: userInfo._id,
        favs,
      };
      const res = await setFavList(data).unwrap();
      dispatch(setFavorites(res));
      toast.success(`List updated Sccuessfully`);

      handleClose();
    } catch (error) {
      toast.error(error?.data?.message || error?.error);
    }
  };

  return (
    <div className='flex bg-blue-100   shadow-slate-950 w-full   gap-5 max-w-md '>
      {favorites && favorites.length > 0 ? (
        <div className=' w-full lg:max-w-full  '>
          <div className=''>
            <div className='text-gray-900 font-bold text-xl  bg-red-100 p-5'>
              Favourites
            </div>
            <div className='flex w-full gap-5 my-2 justify-center p-5'>
              {favorites.map((fav) => (
                <div key={fav.id} className='bg-red-100 px-5 py-3'>
                  <p className='text-gray-700 text-base'>{fav.title}</p>
                </div>
              ))}
            </div>
            <button
              onClick={handleEdit}
              className='bg-red-100 hover:bg-red-500 px-5 py-3 mt-auto w-full hover:text-white'>
              Edit
            </button>
          </div>
        </div>
      ) : (
        <button onClick={handleClose}>Add</button>
      )}
      {fav && (
        <Modal closeModal={handleClose}>
          <div className='p-5'>
            <h6 className='text-lg  '>Select Favourites</h6>
            <div className=' '>
              <Select
                defaultValue={preVal}
                isMulti
                options={options}
                closeMenuOnSelect={false}
                onChange={handleSelectChange}
                isOptionDisabled={isOptionDisabled}
              />
            </div>
            <div className=' px-4 py-3  '>
              <button
                type='button'
                className='py-2 px-4 bg-gray-500 text-white rounded hover:bg-gray-700 mr-2'
                onClick={handleClose}>
                <i className='fas fa-times'></i> Cancel
              </button>
              <button
                type='submit'
                onClick={handleSubmit}
                className='py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-700 mr-2'>
                <i className='fas fa-plus'></i> Save
              </button>
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
};

export default FavouriteCard;
