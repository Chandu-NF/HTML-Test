import { Box, Stack, Typography } from "@mui/joy";
import React from "react";
import { Outlet } from "react-router-dom";
import DropDownMenu from "./Dropdown.tsx";
import { layoutBox, layoutStack, layoutStackBox } from "./home";
import NavComp from "./NavComp.tsx";

function Layout() {
  return (
    <>
      <Box sx={layoutBox}>
        <Stack
          sx={layoutStack}
          direction="row"
          gap={15}
        >
          <Box
            sx={layoutStackBox}
          >
            <img
              src="./youtube.png"
              alt="YouTube logo"
              style={{ width: "30px", height: "30px" }}
            />
            <Typography
              textColor="white"
              sx={{ cursor: "pointer" }}
            >
              YouTube
            </Typography>
          </Box>

          <NavComp/>

        </Stack>

        <Stack sx={{ display: { xs: "flex", sm: "none" } }}>
          <DropDownMenu />
        </Stack>
      </Box>

      <Box>
        <Outlet />
      </Box>
    </>
  );
}


export default Layout;
