import React from "react";
import logo from "../../../public/pic.jpg";

const Header = () => {
  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="flex-1">
          <a className="btn btn-ghost normal-case text-xl">Knowledge Cafe</a>
        </div>
        <div className="flex-none gap-2">
          <ul className="">
            <li className="">
              <a className="mx-6" href="/home">
                Home
              </a>
              <a className="mx-6" href="/service">
                Service
              </a>
              <a className="mx-6" href="/about">
                About
              </a>
              <a className="mx-6" href="/blog">
                Blog
              </a>
            </li>
          </ul>
          <div className="form-control">
            <input
              type="text"
              placeholder="Search"
              className="input input-bordered"
            />
          </div>
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img src={logo} />
              </div>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
