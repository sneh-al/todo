import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const FavList = () => {
  const { userInfo } = useSelector((state) => state.auth);
  const favorites = userInfo?.favourite;

  return (
    <ul className=''>
      {favorites.map((fav) => (
        <li key={fav.id} className='bg-red-100 px-5 py-3 flex'>
          <Link
            to={`/list/${fav._id}`}
            className='hover:bg-white hover:text-red-500 cursor-pointer p-3 text-base text-right w-full'>
            {fav.title}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default FavList;
