import React, { useState } from 'react'
import { NavLink } from "react-router-dom";
import ThemeToggle from '../components/ThemeToggle'
const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    return (
      <nav>
        <div className="flex items-center justify-between px-8 py-4 ">
          <NavLink to="/home">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32">
              <g fill="none" fill-rule="evenodd">
                <path fill="#0062FF" d="M16 0v16H0z" />
                <path fill="#00F5F0" d="M16 32V16h16z" />
              </g>
            </svg> 
          </NavLink>
          <div className="flex items-center justify-between space-x-4">
            <ThemeToggle />
            <button
              className="lg:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <svg
                className="w-6 h-6 dark:text-gray-200"
                viewBox="0 0 24 24"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                {isMenuOpen ? (
                  <path
                    d="M17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41L17.59 5Z"
                    fill="currentColor"
                  ></path>
                ) : (
                  <path
                    d="M21 16H3V14H21V16ZM21 10H3V8H21V10Z"
                    fill="currentColor"
                  ></path>
                )}
              </svg>
            </button>
            <ul className="hidden space-x-4 lg:items-center lg:justify-between lg:flex">
              <NavLink
                to="SecondPage"
                className="text-sm font-medium tracking-tighter underline uppercase dark:text-white font-base hover:no-underline"
              >
                Secondary Page
              </NavLink>
              <NavLink
                to="#"
                className="px-6 py-2 text-sm font-medium text-gray-100 uppercase bg-gray-800"
              >
                sign up
              </NavLink>
            </ul>
          </div>
        </div>
        <div
          className={`${
            isMenuOpen ? "lg:block" : "hidden"
          } lg:hidden relative bg-ebony-400 bg-opacity-50 transition ease-in-out duration-700 mx-8 rounded-lg`}
        >
          <ul className="flex-col items-center justify-around p-4">
            <NavLink
              to="/SecondPage"
              className="block p-3 text-sm font-medium tracking-tighter underline uppercase dark:text-white font-base hover:no-underline"
            >
              Secondary Page
            </NavLink>
            <NavLink
              to="#"
              className="block p-3 px-6 py-2 text-sm font-medium text-gray-100 uppercase bg-gray-800"
            >
              sign up
            </NavLink>
          </ul>
        </div>
      </nav>
    );
}

export default Navbar
