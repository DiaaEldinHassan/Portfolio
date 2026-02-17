import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <div className="w-full overflow-x-hidden bg-[#1a1a1a]">
      <Navbar />
      <main className="w-full">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;