import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

function Layout({ children }) {
  return (
    <body className="min-h-screen relative">
      <Navbar />
      <div className="">{children}</div>
      {/* <Footer /> */}
    </body>
  );

  // return <div>Hello World</div>;
}

export default Layout;
