const Modal = ({ children, closeModal }) => {
  return (
    <div className='fixed z-10 overflow-y-auto top-0 w-full left-0 ' id='modal'>
      <div className='flex items-center justify-center m-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0'>
        <div className='fixed inset-0 transition-opacity'>
          <div className='absolute inset-0 bg-gray-900 opacity-75' />
        </div>
        <span className='hidden sm:inline-block sm:align-middle sm:h-screen'>
          &#8203;
        </span>
        <div
          className='relative inline-block m-0 p-0 justify-center  align-center bg-white  rounded-lg text-left shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full '
          role='dialog'
          aria-modal='true'
          aria-labelledby='modal-headline'>
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;
