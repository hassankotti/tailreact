import React, { useState } from "react";

const FAQsItem = ({ question, answer }) => {
  const [show, setShow] = useState(false);
  return (
    <div className="flex-col items-center justify-center">
      <div className="flex items-center justify-between">
        <span className="py-4 text-lg text-gray-600 font-meduim dark:text-gray-50">
          {question}
        </span>
        <button onClick={() => setShow(!show)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6 text-blue-600"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {show ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M20 12H4"
                stroke="currentColor"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 4v16m8-8H4"
                stroke="currentColor"
              />
            )}
          </svg>
        </button>
      </div>
      <div
        className={`${
          show ? "" : "hidden"
        } transition ease-in-out duration-700  font-meduim text-sm py-4`}
      >
        <p className="text-gray-600 dark:text-gray-50">{answer}</p>
      </div>
    </div>
  );
};

export default FAQsItem;
