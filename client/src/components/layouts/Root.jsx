import { useEffect, useRef, useState } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../header/Navbar";
import Footer from "../Footer";

const Root = () => {
  return (
    <div className='   '>
      <Navbar />

      <div className='mt-10 '>
        <Outlet />
      </div>
      <div className='footer block p-7'>
        <Footer />
      </div>
    </div>
  );
};

export default Root;
