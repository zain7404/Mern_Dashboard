import React from "react";
import Header from "components/Header";
import {Box} from "@mui/material";
import BreakDownChart from "components/BreakDownChart";

const index = () => {
  return <Box m="1.5rem 2.5rem" >

    <Header title="BREAKDOWN" subtitle="Breadown of sales By Catagory"/>
    <Box mt="40px" height="75vh" >
      <BreakDownChart />
    </Box>

  </Box>
};

export default index;
