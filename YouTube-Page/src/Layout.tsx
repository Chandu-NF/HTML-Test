import { Box, Stack, Typography } from "@mui/joy";
import React from "react";
import { Link, Outlet } from "react-router-dom";
import DropDownMenu from "./Dropdown.tsx";
import { layoutBox } from "./home";

function Layout() {
  return (
    <>
      <Box sx={layoutBox}>
        <Stack
          sx={{
            display: {
              xs: "none",
              sm: "flex",
              fontSize: "25px",
              alignItems: "center",
            },
          }}
          direction="row"
          gap={15}
        >
          <Box
            sx={{
              display: "flex",
              width: "30px",
              height: "30px",
              alignItems: "center",
            }}
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

          <Typography
            component={Link}
            to="/home"
            textColor="white"
            sx={{
              cursor: "pointer",
            }}
          >
            Home
          </Typography>

          <Typography
            component={Link}
            to="/explore"

            textColor="white"
            sx={{ cursor: "pointer" }}
          >
            Explore
          </Typography>

          <Typography
            component={Link}
            to="/search"
            textColor="white"
            sx={{ cursor: "pointer" }}
          >
            Search
          </Typography>
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
