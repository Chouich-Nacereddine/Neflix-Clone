import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";

const Navbar = () => {
  const { user, logOut } = UserAuth();
  // console.log(user);

  const handleLogout = async () => {
    try {
      await logOut();
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex item-center justify-between p-4 w-full absolute z-10">
      <Link to="">
        <h1 className="text-red-600 text-4xl font-bold cursor-pointer">
          Netflix
        </h1>
      </Link>
      {user?.email ? (
        <div>
          <Link to="/Account">
            <button className="text-white pr-4 font-semibold">Account</button>
          </Link>

          <button
            onClick={handleLogout}
            className="bg-red-600 px-6 py-2 rounded cursor-pointer font-semibold"
          >
            LogOut
          </button>
        </div>
      ) : (
        <div>
          <Link to="/Login">
            <button className="text-white pr-4 font-semibold">Login</button>
          </Link>
          <Link to="/SignUp">
            <button className="bg-red-600 px-6 py-2 rounded cursor-pointer font-semibold">
              Sign up
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;
