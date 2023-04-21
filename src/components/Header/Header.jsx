import React from "react";
import { Link } from "react-router-dom";
import userImage from "../../images/userIcon.webp";

const Header = () => {
  return (
    <>
      <div className=" bg-gray-800 flex justify-between px-[10vw] py-4">
        <Link to="/" className="logo  font-bold text-white text-4xl">
          MovieApp
        </Link>
        <div className="user-image ">
          <img className=" w-12" src={userImage} alt="user" />
        </div>
      </div>
    </>
  );
};

export default Header;
