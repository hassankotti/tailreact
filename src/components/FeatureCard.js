import React from "react";

const FeatureCard = ({ title, image, desc }) => {
  return (
    <div className="p-4 text-center">
      <div className="flex flex-col items-center justify-center">
        <div className="flex items-center justify-center w-24 h-24 mb-4 bg-blue-700 rounded-full to bg-gradient-to-tr from-blue-600">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 80 80"
            className="mx-auto h-28 w-28"
          >
            <g
              fill="none"
              fill-rule="evenodd"
              stroke-linecap="square"
              stroke-width="2"
            >
              <path
                d="M47.815 43c.118-.996.18-1.997.185-3 0-8.284-3.582-15-8-15s-8 6.716-8 15c0 8.284 3.582 15 8 15 2.1 0 4-1.525 5.426-4"
                stroke="#29FFFB"
              />
              <path
                d="M37 32.185A26.62 26.62 0 0 1 40 32c8.284 0 15 3.582 15 8s-6.716 8-15 8c-8.284 0-15-3.582-15-8 0-2.1 1.525-4 4-5.426"
                stroke="#CDE0FF"
              />
              <circle stroke="#CDE0FF" cx="40" cy="40" r="3" />
            </g>
          </svg>
        </div>
        <span className="text-lg font-bold leading-relaxed tracking-wide text-white">
          {title}
        </span>
        <p className="mt-4 text-gray-200">{desc}</p>
      </div>
    </div>
  );
};

export default FeatureCard;
