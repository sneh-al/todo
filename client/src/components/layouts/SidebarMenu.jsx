import { useDispatch } from "react-redux";
import { showShidebar } from "../../slices/uiSlice";

function SidebarMenu() {
  const dispatch = useDispatch();
  const handleSidebar = () => {
    dispatch(showShidebar());
  };
  return (
    <button
      onClick={handleSidebar}
      className='p-6 rounded-lg rounded-tl-none outline-none shadow-lg hover:shadow-xl hover:rounded-tr-none duration-200'>
      <svg
        fill='#000000'
        viewBox='0 0 24 24'
        width='30'
        height='30'
        id='menu-alt-4'
        data-name='Line Color'
        xmlns='http://www.w3.org/2000/svg'
        className='icon line-color'>
        <g id='SVGRepo_bgCarrier' strokeWidth='0'></g>
        <g
          id='SVGRepo_tracerCarrier'
          strokeLinecap='round'
          strokeLinejoin='round'></g>
        <g id='SVGRepo_iconCarrier'>
          <path
            id='secondary'
            d='M8,9h8M8,12h8M8,15h8'
            style={{
              fill: "none",
              stroke: " #2ca9bc",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              strokeWidth: 2,
            }}></path>
          <circle
            id='primary'
            cx='12'
            cy='12'
            r='9'
            style={{
              fill: "none",
              stroke: " #000000",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              strokeWidth: 2,
            }}></circle>
        </g>
      </svg>
    </button>
  );
}

export default SidebarMenu;
