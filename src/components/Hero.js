import React from 'react'
import video_placeholder from "../images/video-placeholder.png"
import clients_01 from "../images/clients-01.svg"
import clients_02 from "../images/clients-02.svg"
import clients_03 from "../images/clients-03.svg"
import clients_04 from "../images/clients-04.svg"
import clients_05 from "../images/clients-05.svg"
const Hero = () => {
    return (
      <div className="relative p-8 mx-6 border-b lg:p-24 dark:border-ebony-400 border-ebony-200">
        <div className="flex-col space-y-16 lg:px-16">
          <h1 className="text-5xl font-semibold text-center text-gray-600 transition duration-700 transform translate-x-1 dark:text-gray-50 lg:px-20 leading-tighter font-raleway">
            Engage Your Visitors with a beautiful template
          </h1>
          <img
            src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            className="py-18"
            alt=""
          />
          <div class="mx-auto">
            <ul class="lg:flex grid gap-4 grid-cols-3 lg:items-center lg:justify-between lg:space-y-8 ">
              <li>
                <img
                  src={clients_01}
                  alt="Clients 01"
                  className="text-gray-600 w-14 dark:textebony-400 lg:w-auto lg:h-auto"
                />
              </li>
              <li>
                <img
                  src={clients_02}
                  alt="Clients 02"
                  className="w-14 lg:w-auto lg:h-auto"
                />
              </li>
              <li>
                <img
                  src={clients_03}
                  alt="Clients 03"
                  className="w-14 lg:w-auto lg:h-auto"
                />
              </li>
              <li>
                <img
                  src={clients_04}
                  alt="Clients 04"
                  className="w-14 lg:w-auto lg:h-auto"
                />
              </li>
              <li>
                <img
                  src={clients_05}
                  alt="Clients 05"
                  className="w-14 lg:w-auto lg:h-auto"
                />
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
}

export default Hero
