import React from "react";
import useAuth from "../core/hooks/useAuth";

const Navbar = () => {
  const { auth, setAuth } = useAuth();

  const logout = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");

    setAuth({});
    window.location.reload(true);
  };

  return (
    <div className="navbar bg-base-100 top-0 left-0 right-0 hidden md:flex  justify-between border-b-2 shadow-sm">
      <div className="">
        <a className="btn btn-ghost normal-case text-xl">Tokopedia Play</a>
      </div>

      <div className="flex-none gap-2">
        {/* Dropdown */}
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img src="https://asset.kompas.com/crops/26yVfPEUtlADYfL6sNGt-9ls3tk=/91x0:1250x773/750x500/data/photo/2023/08/05/64ce32fae37d0.png" />
            </div>
          </label>
          <ul
            tabIndex={0}
            className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
          >
            {auth?.accessToken ? (
              <li onClick={logout}>
                <a>Logout</a>
              </li>
            ) : (
              <li>
                <a href="/login">Login</a>
              </li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
