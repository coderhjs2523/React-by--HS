import React from "react";
import { Link } from "react-router-dom";
import { Logo } from "../index";

const Footer = () => {
  return (
    <footer className=" bg-gray-200 text-gray-800 py-10  border-t border-gray-200">
      <div
        className=" max-w-7xl mx-auto px-5 ">
        <div
          className=" grid grid-cols-1 md:grid-cols-4 gap-8 " >
          {/* Brand */}
          <div className="md:col-span-2">
            <Link to="/">
              <Logo width="100px" />
            </Link>

            <p
              className=" mt-5 text-gray-400 max-w-md " >
              A simple and powerful blogging platform where you can share your
              thoughts, ideas and knowledge.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3
              className=" text-lg font-semibold mb-4 " >
              Explore
            </h3>

            <ul className="space-y-3">
              <li>
                <Link to="/" className=" text-gray-400 hover:text-white transition " >
                  Home
                </Link>
              </li>

              <li>
                <Link to="/all-posts" className=" text-gray-400 hover:text-white transition ">
                  All Posts
                </Link>
              </li>

              <li>
                <Link to="/add-post" className=" text-gray-400 hover:text-white transition " >
                  Create Post
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className=" text-lg font-semibold mb-4 " >
              Support
            </h3>

            <ul className="space-y-3">
              <li className="text-gray-400">Help Center</li>

              <li className="text-gray-400">Contact Us</li>

              <li className="text-gray-400">Privacy Policy</li>
            </ul>
          </div>
        </div>

        <div className=" border-t  border-gray-700 mt-10 pt-5 text-center  text-gray-400 text-sm " >
          © 2026 Blog App. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
