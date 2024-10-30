import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="navbar bg-black px-4 text-white m-0 h-20">
      <div className="flex-1">
        <ul className="text-white font-medium text-lg flex flex-row ">
          <li className="mb-3">
            <Link to="/" className="hover:underline px-3">
              Logo
            </Link>
          </li>
        </ul>
      </div>

      <div className="flex-1 justify-end ">
        <input
          type="text"
          placeholder="Type here"
          className="input  bg-white w-full max-w-xs input-sm input-bordered rounded-sm text-black"
        />
        <button className="bg-gray-500 rounded-sm px-2">
          <div className="py-1.5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="20"
              width="20"
              viewBox="0 0 512 512"
            >
              <path
                fill="#f0f2f5"
                d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"
              />
            </svg>
          </div>
        </button>
      </div>

      <div className="flex-none px-2">
        <div className="flex-1 px-3 justify-between">
          <ul className="text-white font-medium text-m mt-6 flex flex-row ">
            <li className="mt-0 px-3">
              <Link to="Wishlist" className="hover:underline px-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24"
                  width="24"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="#f3f4f7"
                    d="M225.8 468.2l-2.5-2.3L48.1 303.2C17.4 274.7 0 234.7 0 192.8l0-3.3c0-70.4 50-130.8 119.2-144C158.6 37.9 198.9 47 231 69.6c9 6.4 17.4 13.8 25 22.3c4.2-4.8 8.7-9.2 13.5-13.3c3.7-3.2 7.5-6.2 11.5-9c0 0 0 0 0 0C313.1 47 353.4 37.9 392.8 45.4C462 58.6 512 119.1 512 189.5l0 3.3c0 41.9-17.4 81.9-48.1 110.4L288.7 465.9l-2.5 2.3c-8.2 7.6-19 11.9-30.2 11.9s-22-4.2-30.2-11.9zM239.1 145c-.4-.3-.7-.7-1-1.1l-17.8-20-.1-.1s0 0 0 0c-23.1-25.9-58-37.7-92-31.2C81.6 101.5 48 142.1 48 189.5l0 3.3c0 28.5 11.9 55.8 32.8 75.2L256 430.7 431.2 268c20.9-19.4 32.8-46.7 32.8-75.2l0-3.3c0-47.3-33.6-88-80.1-96.9c-34-6.5-69 5.4-92 31.2c0 0 0 0-.1 .1s0 0-.1 .1l-17.8 20c-.3 .4-.7 .7-1 1.1c-4.5 4.5-10.6 7-16.9 7s-12.4-2.5-16.9-7z"
                  />
                </svg>
              </Link>
            </li>
            <li className="mb-4">
              <Link to="Cart" className="hover:underline px-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24"
                  width="27"
                  viewBox="0 0 576 512"
                >
                  <path
                    fill="#fafafa"
                    d="M0 24C0 10.7 10.7 0 24 0L69.5 0c22 0 41.5 12.8 50.6 32l411 0c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3l-288.5 0 5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5L488 336c13.3 0 24 10.7 24 24s-10.7 24-24 24l-288.3 0c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5L24 48C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"
                  />
                </svg>
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex-1">
          <ul className="text-white font-medium text-xl mt-6 flex flex-row ">
            <li className="mb-4">
              <Link to="Login" className="hover:underline px-2">
                Login
              </Link>
            </li>
            <li className="mb-4">
              <Link to="Signup" className="hover:underline px-4">
                Signup
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
