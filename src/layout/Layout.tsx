import Navbar from "../components/AppBar/AppBar";
import React, { ReactElement } from "react";

const Layout = ({ children }: { children: ReactElement }) => {
  return (
    <div>
      <Navbar />
      <div>{children}</div>
    </div>
  );
};

export default Layout;
