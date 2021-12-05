import React from "react";

const Layout = ({ children }) => {
  return (
    <div className="relative text-gray-900 dark:bg-gray-900 bg-gray-50 dark:text-gray-400 font-raleway">
      <div className="flex-col items-center justify-center min-h-screen overflow-hidden lg:px-36">
        <div className="mx-auto">{children}</div>
      </div>
    </div>
  );
};

export default Layout;
