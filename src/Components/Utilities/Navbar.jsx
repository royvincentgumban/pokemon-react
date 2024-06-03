import React, { useState } from "react";
import "../style.css";

import { Link } from "react-router-dom";
import { motion } from "framer-motion";

// LOGO
import pokemon from "../../Assets/img/bg/Pokemon-Logo.png";


const itemVariants = {
  open: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 300, damping: 24 },
  },
  closed: { opacity: 0, y: 20, transition: { duration: 0.2 } },
};

const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div className="navbar bg-[#222224] text-neutral-content px-10">
      <div className="navbar-start">
        <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
        <div className="flex-none lg:hidden">
          <label
            htmlFor="my-drawer-3"
            aria-label="open sidebar"
            className="btn btn-square btn-ghost"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block w-6 h-6 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </label>
        </div>

        <div className="drawer-side">
          <label
            htmlFor="my-drawer-3"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>

          <ul className="menu p-4 w-80 min-h-full bg-base-200 gap-4">
            <div className="w-full h-12 mb-5">
              <img
                src={pokemon}
                alt="logo"
                className="w-full h-full object-contain"
              />
            </div>

            <li className="sidebar-li">
              <Link to="/"> Home </Link>
            </li>

            <li className="sidebar-li">
              <Link to="/Pokedex"> Pokedex </Link>
            </li>

            <li className="sidebar-li">
              <Link to="/Games"> Games </Link>
            </li>

            <li className="sidebar-li">
              <Link to="/TradingCard"> TCG </Link>
            </li>

            <li className="sidebar-li">
              <Link to="/TradingCard"> Anime </Link>
            </li>

          </ul>
        </div>

        <div className="hidden lg:block">
          <img
            src={pokemon}
            alt="logo"
            className="w-full h-12 object-contain"
          />
        </div>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-8">
          <li className="line-li">
            <Link onClick={handleClick} to="/"> Home </Link>
          </li>

          <li className="line-li">
            <Link onClick={handleClick} to="/Pokedex"> Pokedex </Link>
          </li>

          <li className="line-li">
            <Link onClick={handleClick} to="/Games"> Games </Link>
          </li>

          <li className="line-li">
            <Link onClick={handleClick} to="/TradingCard"> TCG </Link>
          </li>

          <li className="line-li">
            <Link onClick={handleClick} to="/TradingCard"> Anime </Link>
          </li>

          <li>

            <motion.details
              initial={false}
              animate={isOpen ? "open" : "closed"}
            >
              <motion.summary
                whileTap={{ scale: 0.97 }}
                onClick={() => setIsOpen(!isOpen)}
              >
                News
              </motion.summary>

              <motion.ul
                variants={{
                  open: {
                    clipPath: "inset(0% 0% 0% 0% round 10px)",
                    transition: {
                      type: "spring",
                      bounce: 0,
                      duration: 0.7,
                      delayChildren: 0.3,
                      staggerChildren: 0.05,
                    },
                  },
                  closed: {
                    clipPath: "inset(10% 50% 90% 50% round 10px)",
                    transition: {
                      type: "spring",
                      bounce: 0,
                      duration: 0.3,
                    },
                  },
                }}
                style={{ pointerEvents: isOpen ? "auto" : "none" }}
                className="p-2 bg-[#222224] text-white w-48 rounded-box absolute top-[3em]"
              >
                <motion.li variants={itemVariants} className="custom-li">
                  <Link to="/"> Home </Link>
                </motion.li>
                <motion.li variants={itemVariants} className="custom-li">
                  <Link to="/TradingCard"> Trading Card </Link>
                </motion.li>
              </motion.ul>
            </motion.details>

          </li>
          
        </ul>
      </div>

      <div className="navbar-end">
        <button
          className="btn-login"
          onClick={() => document.getElementById("my_modal_3").showModal()}
        >
          Login
        </button>
      </div>

      <dialog id="my_modal_3" className="modal text-black p-4">
        <div className="modal-box text-left w-full max-w-lg relative overflow-hidden">

          <div className="absolute -bottom-36 -right-36 -z-10  -rotate-45">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              className="w-96 h-96"
              xmlns="http://www.w3.org/2000/svg"
              >
              <path
                d="M21.9012 13H16.8506C16.3873 15.2822 14.3696 17 11.9506 17C9.53167 17 7.51391 15.2822 7.05064 13H2C2.50172 18.0533 6.76528 22 11.9506 22C17.136 22 21.3995 18.0533 21.9012 13Z"
                fill="#d9d9d9"
              />
              <path
                d="M21.9012 11C21.3995 5.94668 17.136 2 11.9506 2C6.76528 2 2.50172 5.94668 2 11H7.05064C7.51391 8.71776 9.53167 7 11.9506 7C14.3696 7 16.3873 8.71776 16.8506 11H21.9012Z"
                fill="#d9d9d9"
              />
              <path
                d="M11.9506 15C13.6075 15 14.9506 13.6569 14.9506 12C14.9506 10.3431 13.6075 9 11.9506 9C10.2938 9 8.95062 10.3431 8.95062 12C8.95062 13.6569 10.2938 15 11.9506 15ZM13.4506 12C13.4506 12.8284 12.7791 13.5 11.9506 13.5C11.1222 13.5 10.4506 12.8284 10.4506 12C10.4506 11.1716 11.1222 10.5 11.9506 10.5C12.7791 10.5 13.4506 11.1716 13.4506 12Z"
                fill="#d9d9d9"
              />
            </svg>
          </div>

          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>

          <div className="flex flex-col items-center w-full h-96 p-2 mt-3 mb-3">
            <div className="w-full h-20 mb-3">
              <img
                src={pokemon}
                alt="logo"
                className="w-full h-full object-contain"
              />
            </div>

            <form action="" className="w-full py-4">
              <div className="w-full">
              
                <div className="label">
                  <span className="label-text">Username</span>
                </div>

                <label className="form-control w-full mb-3">  
                  <input
                    type="text"
                    placeholder="Enter username"
                    className="input input-bordered w-full focus:border-[#222224]"
                  />
                </label>


                <div className="label">
                  <span className="label-text">Password</span>
                </div>
                
                <label className="form-control w-full">
                  <input
                    type="text"
                    placeholder="Enter password"
                    className="input input-bordered w-full max-w-md focus:border-[#222224]"
                  />
                </label>
              </div>
            </form>

            <button className="btn mt-6 bg-blue-600 text-white w-[50%] hover:bg-[#222224]">
              Login
            </button>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default Navbar;
