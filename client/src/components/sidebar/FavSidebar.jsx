import { useState } from "react";

const FavSidebar = ({ link }) => {
  const [show, setShow] = useState(false);
  const handleShow = () => {
    setShow(!show);
  };
  return (
    <li className=' cursor-pointer hover:bg-white  hover:text-red-500 overflow-hidden  '>
      <div className='flex py-5 px-3 ' onClick={handleShow}>
        <p className=''>{link.title}</p>
        <link.Icon className=' h-5 w-5 ml-auto' />
      </div>
      {show && <link.Component />}
    </li>
  );
};

export default FavSidebar;
