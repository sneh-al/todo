import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const AllList = () => {
  const { lists } = useSelector((state) => state.lists);

  return (
    <ul className='overflow-hide'>
      {lists.map((fav) => (
        <li key={fav._id} className='bg-red-100  p-3 w-full flex'>
          <Link
            to={`/list/${fav._id}`}
            className='hover:bg-white hover:text-red-500 cursor-pointer p-3 text-base text-right w-full'>
            {fav.name}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default AllList;
