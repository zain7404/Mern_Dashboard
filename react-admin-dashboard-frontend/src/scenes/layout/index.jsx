import React from "react";
import { useState } from "react";
import { Box, useMediaQuery } from "@mui/material";

import { Outlet } from "react-router-dom";

import Navbar from "components/Navbar";
import { useSelector } from "react-redux";
import Sidebar from "components/Sidebar";

const Layout = () => {
  const isNonMobile = useMediaQuery("(min-width: 600px)");
  const [isSideBarOpen, setIsSiteBarOpen] = useState(true);

  return (
    <Box display={isNonMobile ? "flex" : "block"} width="100%" height="100%">
      <Sidebar
        isNonMobile={isNonMobile}
        drawerWidth="250px"
        isSideBarOpen={isSideBarOpen}
        setisSideBarOpen={setIsSiteBarOpen}
      />
      <Box flexGrow={1}>
        <Navbar
          isSidebarOpen={isSideBarOpen}
          setIsSidebarOpen={setIsSiteBarOpen}
        />
        <Outlet />
      </Box>
    </Box>
  );
};

export default Layout;
