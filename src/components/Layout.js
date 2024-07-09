import React from "react";

const Layout = ({ className, children }) => {
  return (
    <div
      className={` xl:p-24 lg:p-16 md:p-12 sm:p-8 w-full h-full inline-block z-0 bg-light dark:bg-dark p-32 ${className}`}
    >
      {children}
    </div>
  );
};

export default Layout;
