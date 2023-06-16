import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import ProfileCard from "../components/ProfileCard";
import FavouriteCard from "../components/FavouriteCard";

const Profile = () => {
  return (
    <div className=' container grid place-items-center  '>
      <ProfileCard />
      <FavouriteCard />
    </div>
  );
};

export default Profile;
